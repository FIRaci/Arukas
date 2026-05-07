#!/usr/bin/env python3
"""
ARUKAS Data Converter
=====================
Converts JSONL (JSON Lines) text files into structured JSON arrays 
for the ARUKAS Japanese Learning App.

Usage:
    python tools/convert_data.py vocab raw/vocab_raw.txt public/data/vocab.json
    python tools/convert_data.py grammar raw/grammar_raw.txt public/data/grammar.json
    python tools/convert_data.py all raw/ public/data/

Input format (JSONL - one JSON object per line):
  Vocab:   {"t":"犬","r":"いぬ","rm":"inu","m":"Chó","type":"NOUN","jlpt":"N5","hv":"KHUYỂN","pitch":"10","pp":"ATAMADAKA","ex":["犬を飼う|いぬをかう|Nuôi chó"],"syn":["ワンちゃん|わんちゃん|Cún cưng"],"ant":[],"col":["愛犬|あいけん|Chó cưng"],"kanji":[{"c":"犬","hv":"KHUYỂN","on":["ケン"],"kun":["いぬ"],"m":"Chó"}],"def":"Động vật có vú thuộc họ chó","trans":"N/A"}
  Grammar: {"s":"〜ている","r":"ている","m":"Đang [làm gì]","usage":"Biểu thị hành động đang tiến hành","cons":"V-Te + いる","jlpt":"N5","ex":["食べている|たべている|Đang ăn"],"ctx":["Hành động đang xảy ra","Trạng thái kết quả"],"rules":["V-te + いる → progressive"],"mistakes":[{"i":"結婚した","c":"結婚している","e":"した = event, している = state"}],"comp":[{"s":"〜てある","n":"Resultative","d":"てある focuses on result state"}]}
"""

import json
import sys
import os
from pathlib import Path
from collections import Counter

VALID_TYPES = {"NOUN", "VERB", "ADJECTIVE", "PARTICLE", "CONJUNCTION", "AUXILIARY", "PUNCTUATION", "OTHER"}
VALID_JLPT = {"N5", "N4", "N3", "N2", "N1"}
VALID_PITCH = {"HEIBAN", "ATAMADAKA", "NAKADAKA", "ODAKA"}
VALID_TRANS = {"TRANSITIVE", "INTRANSITIVE", "BOTH", "N/A"}


def parse_pipe_triplet(s: str) -> dict:
    """Parse 'japanese|reading|vietnamese' into dict."""
    parts = s.split("|")
    if len(parts) >= 3:
        return {"japanese": parts[0], "reading": parts[1], "vietnamese": parts[2]}
    elif len(parts) == 2:
        return {"japanese": parts[0], "reading": parts[0], "vietnamese": parts[1]}
    else:
        return {"japanese": s, "reading": s, "vietnamese": s}


def parse_related(s: str) -> dict:
    """Parse 'text|reading|meaning' into RelatedWord."""
    parts = s.split("|")
    if len(parts) >= 3:
        return {"text": parts[0], "reading": parts[1], "meaning": parts[2]}
    elif len(parts) == 2:
        return {"text": parts[0], "reading": parts[0], "meaning": parts[1]}
    else:
        return {"text": s, "reading": s, "meaning": s}


def parse_kanji(k: dict) -> dict:
    """Normalize kanji detail."""
    return {
        "char": k.get("c", ""),
        "hanViet": k.get("hv", ""),
        "onyomi": k.get("on", []),
        "kunyomi": k.get("kun", []),
        "meaning": k.get("m", "")
    }


def convert_vocab_line(raw: dict, idx: int) -> dict:
    """Convert a single JSONL vocab entry to SavedToken format."""
    errors = []
    
    text = raw.get("t", "")
    if not text:
        errors.append("Missing 't' (text)")
    
    reading = raw.get("r", "")
    romaji = raw.get("rm", "")
    meaning = raw.get("m", "")
    part_type = raw.get("type", "OTHER").upper()
    jlpt = raw.get("jlpt", "").upper()
    han_viet = raw.get("hv", "")
    pitch = raw.get("pitch", "")
    pitch_pattern = raw.get("pp", "")
    definition = raw.get("def", meaning)
    transitivity = raw.get("trans", "N/A")
    
    if part_type not in VALID_TYPES:
        errors.append(f"Invalid type '{part_type}'")
        part_type = "OTHER"
    
    if jlpt and jlpt not in VALID_JLPT:
        errors.append(f"Invalid jlpt '{jlpt}'")
    
    # Parse examples, synonyms, antonyms, collocations
    examples = [parse_pipe_triplet(e) for e in raw.get("ex", [])]
    synonyms = [parse_related(s) for s in raw.get("syn", [])]
    antonyms = [parse_related(a) for a in raw.get("ant", [])]
    collocations = [parse_related(c) for c in raw.get("col", [])]
    kanji_details = [parse_kanji(k) for k in raw.get("kanji", [])]
    
    # Build tags
    tags = []
    if jlpt:
        tags.append(f"JLPT {jlpt}")
    if part_type == "VERB":
        if transitivity in ("TRANSITIVE", "INTRANSITIVE"):
            tags.append(transitivity.capitalize())
    
    result = {
        "id": f"v{idx}",
        "text": text,
        "reading": reading,
        "romaji": romaji,
        "meaning": meaning,
        "type": part_type,
        "savedAt": 0,
        "pitchAccent": pitch,
        "pitchPattern": pitch_pattern if pitch_pattern else None,
        "deepDive": {
            "dictionaryForm": text,
            "dictionaryReading": reading,
            "dictionaryPitchAccent": pitch,
            "tags": tags if tags else None,
        },
        "extendedAnalysis": {
            "definitionDetail": definition,
            "transitivity": transitivity if transitivity in VALID_TRANS else "N/A",
            "dictionaryPitchAccent": pitch,
            "dictionaryPitchPattern": pitch_pattern if pitch_pattern else None,
            "dictionaryReading": reading,
            "examples": examples,
            "synonyms": synonyms if synonyms else None,
            "antonyms": antonyms if antonyms else None,
            "collocations": collocations if collocations else None,
            "kanjiDetails": kanji_details if kanji_details else None,
        }
    }
    
    # Add optional fields
    if han_viet:
        result["hanViet"] = han_viet
    
    # Clean None values from nested objects
    result["deepDive"] = {k: v for k, v in result["deepDive"].items() if v is not None}
    result["extendedAnalysis"] = {k: v for k, v in result["extendedAnalysis"].items() if v is not None}
    
    return result, errors


def convert_grammar_line(raw: dict, idx: int) -> dict:
    """Convert a single JSONL grammar entry to SavedGrammar format."""
    errors = []
    
    structure = raw.get("s", "")
    if not structure:
        errors.append("Missing 's' (structure)")
    
    reading = raw.get("r", "")
    meaning = raw.get("m", "")
    usage = raw.get("usage", "")
    construction = raw.get("cons", "")
    jlpt = raw.get("jlpt", "").upper()
    
    if jlpt and jlpt not in VALID_JLPT:
        errors.append(f"Invalid jlpt '{jlpt}'")
    
    # Parse extended analysis fields
    examples = [parse_pipe_triplet(e) for e in raw.get("ex", [])]
    contexts = raw.get("ctx", [])
    rules = raw.get("rules", [])
    
    mistakes = []
    for m in raw.get("mistakes", []):
        if isinstance(m, dict):
            mistakes.append({
                "incorrect": m.get("i", ""),
                "correct": m.get("c", ""),
                "explanation": m.get("e", "")
            })
    
    comparisons = []
    for c in raw.get("comp", []):
        if isinstance(c, dict):
            comparisons.append({
                "similarStructure": c.get("s", ""),
                "nuance": c.get("n", ""),
                "difference": c.get("d", "")
            })
    
    tags_raw = raw.get("tags", [])
    tags = tags_raw if tags_raw else []
    if jlpt and f"JLPT {jlpt}" not in tags:
        tags.append(f"JLPT {jlpt}")
    
    result = {
        "id": f"g{idx}",
        "structure": structure,
        "reading": reading,
        "meaning": meaning,
        "usage": usage,
        "construction": construction,
        "jlpt": jlpt if jlpt else None,
        "tags": tags if tags else None,
        "savedAt": 0,
        "extendedAnalysis": {
            "generalMeaning": meaning,
            "contexts": contexts,
            "constructionRules": rules,
            "examples": examples,
            "jlpt": jlpt if jlpt else None,
            "tags": tags if tags else None,
        }
    }
    
    if mistakes:
        result["extendedAnalysis"]["commonMistakes"] = mistakes
    if comparisons:
        result["extendedAnalysis"]["detailedComparison"] = comparisons
    
    # Clean None values
    result = {k: v for k, v in result.items() if v is not None}
    result["extendedAnalysis"] = {k: v for k, v in result["extendedAnalysis"].items() if v is not None}
    
    return result, errors


def convert_file(input_path: str, output_path: str, data_type: str):
    """Convert a JSONL file to structured JSON."""
    if not os.path.exists(input_path):
        print(f"ERROR: Input file not found: {input_path}")
        return False
    
    items = []
    error_lines = []
    line_count = 0
    jlpt_dist = Counter()
    type_dist = Counter()
    
    converter = convert_vocab_line if data_type == "vocab" else convert_grammar_line
    
    with open(input_path, "r", encoding="utf-8") as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith("#") or line.startswith("//"):
                continue  # Skip comments/empty lines
            
            line_count += 1
            try:
                raw = json.loads(line)
                item, errors = converter(raw, line_count)
                
                if errors:
                    error_lines.append(f"  Line {line_num}: {'; '.join(errors)}")
                
                items.append(item)
                
                jlpt_val = raw.get("jlpt", "?").upper()
                jlpt_dist[jlpt_val] += 1
                
                if data_type == "vocab":
                    type_dist[raw.get("type", "OTHER").upper()] += 1
                    
            except json.JSONDecodeError as e:
                error_lines.append(f"  Line {line_num}: JSON parse error - {e}")
    
    # Write output
    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
    
    # Print report
    print(f"\n{'='*50}")
    print(f"  ARUKAS Data Converter - {data_type.upper()}")
    print(f"{'='*50}")
    print(f"  Input:  {input_path}")
    print(f"  Output: {output_path}")
    print(f"  Total entries: {len(items)}")
    print(f"\n  JLPT Distribution:")
    for level in ["N5", "N4", "N3", "N2", "N1", "?"]:
        if jlpt_dist[level]:
            bar = "█" * (jlpt_dist[level] // 5 + 1)
            print(f"    {level}: {jlpt_dist[level]:>4} {bar}")
    
    if data_type == "vocab" and type_dist:
        print(f"\n  Type Distribution:")
        for t, count in type_dist.most_common():
            print(f"    {t}: {count}")
    
    if error_lines:
        print(f"\n  ⚠ Warnings ({len(error_lines)}):")
        for e in error_lines[:20]:
            print(e)
        if len(error_lines) > 20:
            print(f"  ... and {len(error_lines) - 20} more")
    else:
        print(f"\n  ✓ No errors!")
    
    print(f"{'='*50}\n")
    return True


def parse_jsonl_items(input_path: str, data_type: str):
    """Parse JSONL and return converted items without writing files."""
    if not os.path.exists(input_path):
        print(f"ERROR: Input file not found: {input_path}")
        return [], [f"Input file not found: {input_path}"]

    items = []
    errors = []
    converter = convert_vocab_line if data_type == "vocab" else convert_grammar_line

    with open(input_path, "r", encoding="utf-8") as f:
      item_idx = 0
      for line_num, line in enumerate(f, 1):
          line = line.strip()
          if not line or line.startswith("#") or line.startswith("//"):
              continue

          item_idx += 1
          try:
              raw = json.loads(line)
              item, line_errors = converter(raw, item_idx)
              if line_errors:
                  errors.extend([f"Line {line_num}: {e}" for e in line_errors])
              items.append(item)
          except json.JSONDecodeError as e:
              errors.append(f"Line {line_num}: JSON parse error - {e}")

    return items, errors


def merge_missing(existing_path: str, incoming_path: str, data_type: str):
    """Merge new items into existing JSON while skipping duplicates."""
    incoming_items, incoming_errors = parse_jsonl_items(incoming_path, data_type)

    existing_items = []
    if os.path.exists(existing_path):
        with open(existing_path, "r", encoding="utf-8") as f:
            loaded = json.load(f)
            if isinstance(loaded, list):
                existing_items = loaded

    def vocab_key(item):
        text = (item.get("text") or item.get("deepDive", {}).get("dictionaryForm") or "").strip()
        reading = (item.get("reading") or item.get("deepDive", {}).get("dictionaryReading") or "").strip()
        return f"{text}::{reading}"

    def grammar_key(item):
        structure = (item.get("structure") or "").strip()
        meaning = (item.get("meaning") or "").strip()
        return f"{structure}::{meaning}"

    key_fn = vocab_key if data_type == "vocab" else grammar_key
    seen = set()

    for item in existing_items:
        seen.add(key_fn(item))

    appended = []
    for item in incoming_items:
        k = key_fn(item)
        if not k or k in seen:
            continue
        seen.add(k)
        appended.append(item)

    merged = existing_items + appended

    os.makedirs(os.path.dirname(existing_path) or ".", exist_ok=True)
    with open(existing_path, "w", encoding="utf-8") as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*50}")
    print(f"  ARUKAS Merge Missing - {data_type.upper()}")
    print(f"{'='*50}")
    print(f"  Existing file:  {existing_path}")
    print(f"  Incoming file:  {incoming_path}")
    print(f"  Existing count: {len(existing_items)}")
    print(f"  Incoming count: {len(incoming_items)}")
    print(f"  Appended:       {len(appended)}")
    print(f"  Final count:    {len(merged)}")

    if incoming_errors:
        print(f"\n  ⚠ Warnings ({len(incoming_errors)}):")
        for err in incoming_errors[:20]:
            print(f"    {err}")
        if len(incoming_errors) > 20:
            print(f"    ... and {len(incoming_errors) - 20} more")
    else:
        print("\n  ✓ No parse warnings!")

    print(f"{'='*50}\n")
    return True


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("Usage:")
        print("  python convert_data.py vocab <input.txt> <output.json>")
        print("  python convert_data.py grammar <input.txt> <output.json>")
        print("  python convert_data.py all <input_dir/> <output_dir/>")
        print("  python convert_data.py merge-missing <vocab_new.txt> <grammar_new.txt> <vocab.json> <grammar.json>")
        sys.exit(1)
    
    mode = sys.argv[1].lower()
    
    if mode == "all":
        input_dir = sys.argv[2] if len(sys.argv) > 2 else "raw"
        output_dir = sys.argv[3] if len(sys.argv) > 3 else "public/data"
        
        vocab_in = os.path.join(input_dir, "vocab_raw.txt")
        grammar_in = os.path.join(input_dir, "grammar_raw.txt")
        
        if os.path.exists(vocab_in):
            convert_file(vocab_in, os.path.join(output_dir, "vocab.json"), "vocab")
        else:
            print(f"Skipping vocab (file not found: {vocab_in})")
        
        if os.path.exists(grammar_in):
            convert_file(grammar_in, os.path.join(output_dir, "grammar.json"), "grammar")
        else:
            print(f"Skipping grammar (file not found: {grammar_in})")
    
    elif mode in ("vocab", "grammar"):
        if len(sys.argv) < 4:
            print(f"Usage: python convert_data.py {mode} <input.txt> <output.json>")
            sys.exit(1)
        convert_file(sys.argv[2], sys.argv[3], mode)

    elif mode == "merge-missing":
        vocab_in = sys.argv[2] if len(sys.argv) > 2 else os.path.join("tools", "vocab_new.txt")
        grammar_in = sys.argv[3] if len(sys.argv) > 3 else os.path.join("tools", "grammar_new.txt")
        vocab_out = sys.argv[4] if len(sys.argv) > 4 else os.path.join("public", "data", "vocab.json")
        grammar_out = sys.argv[5] if len(sys.argv) > 5 else os.path.join("public", "data", "grammar.json")

        ok_vocab = merge_missing(vocab_out, vocab_in, "vocab")
        ok_grammar = merge_missing(grammar_out, grammar_in, "grammar")
        if not ok_vocab or not ok_grammar:
            sys.exit(1)
    
    else:
        print(f"Unknown mode '{mode}'. Use 'vocab', 'grammar', 'all', or 'merge-missing'.")
        sys.exit(1)


if __name__ == "__main__":
    main()
