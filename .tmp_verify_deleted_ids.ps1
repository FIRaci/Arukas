$deleted = git diff --name-status -- src/data | Where-Object { $_ -match '^D\s+' } | ForEach-Object { ($_ -split '\s+', 2)[1] }
$currentFiles = Get-ChildItem src/data -Recurse -File -Filter *.ts | ForEach-Object { $_.FullName }
$currentText = ($currentFiles | ForEach-Object { Get-Content -Raw $_ }) -join [Environment]::NewLine
$missing = New-Object System.Collections.Generic.List[object]
$totalIds = 0

foreach ($f in $deleted) {
  $content = git show "HEAD:$f" 2>$null
  if (-not $content) { continue }

  $ids = [regex]::Matches($content, 'id:\s*[''\"]([^''\"]+)[''\"]') | ForEach-Object { $_.Groups[1].Value }
  $totalIds += $ids.Count

  foreach ($id in $ids) {
    $pattern = 'id:\s*[''\"]' + [regex]::Escape($id) + '[''\"]'
    if (-not [regex]::IsMatch($currentText, $pattern)) {
      $null = $missing.Add([pscustomobject]@{ file = $f; id = $id })
    }
  }
}

Write-Output ("Deleted files under src/data: {0}" -f $deleted.Count)
Write-Output ("Total IDs in deleted files: {0}" -f $totalIds)
Write-Output ("Missing IDs in current data: {0}" -f $missing.Count)
if ($missing.Count -gt 0) {
  $missing | Select-Object -First 80 | Format-Table -AutoSize
}
