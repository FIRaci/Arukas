const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
  const data = await pdf(fs.readFileSync('../grammar_guide.pdf'));
  fs.writeFileSync('grammar_text.txt', data.text);
  console.log('Grammar text extracted: ', data.text.length, ' characters.');
  
  // Just read first 5 pages of dictionary for structure check
  const dictData = await pdf(fs.readFileSync('../[studyjapanese.net]_Tu_Dien_Nhat-Viet_Viet-Nhat.pdf'), { max: 10 });
  fs.writeFileSync('dict_sample.txt', dictData.text);
  console.log('Dictionary sample extracted.');
}

extract().catch(console.error);
