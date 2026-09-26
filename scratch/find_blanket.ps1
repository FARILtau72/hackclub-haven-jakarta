Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("$PWD\assets\animalkumpul.png")

# Blanket is orange checkered: R > 200, G between 100 and 180, B < 60
$minY = $img.Height
$maxY = 0
$minX = $img.Width
$maxX = 0

for ($y = 0; $y -lt $img.Height; $y += 5) {
    for ($x = 0; $x -lt $img.Width; $x += 5) {
        $p = $img.GetPixel($x, $y)
        if ($p.A -gt 200 -and $p.R -gt 220 -and $p.G -gt 110 -and $p.G -lt 180 -and $p.B -lt 60) {
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
        }
    }
}

Write-Output "Blanket bounds:"
Write-Output "X: $minX to $maxX (pct: $([math]::Round($minX/$img.Width*100))% to $([math]::Round($maxX/$img.Width*100))%)"
Write-Output "Y: $minY to $maxY (pct: $([math]::Round($minY/$img.Height*100))% to $([math]::Round($maxY/$img.Height*100))%)"
$img.Dispose()
