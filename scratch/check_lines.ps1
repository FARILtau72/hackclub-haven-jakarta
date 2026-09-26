$files = Get-ChildItem -File -Recurse -Path . -Include *.html, *.css, *.js | Where-Object { $_.FullName -notmatch '\\.git' }
$results = foreach ($f in $files) {
    $lines = (Get-Content $f.FullName | Measure-Object -Line).Lines
    [PSCustomObject]@{
        Name = $f.Name
        RelativePath = $f.FullName.Substring((Get-Location).Path.Length + 1)
        Lines = $lines
        Status = if ($lines -le 200) { "OK (<=200)" } else { "EXCEEDED (>200)" }
    }
}
$results | Sort-Object Lines -Descending | Format-Table -AutoSize
