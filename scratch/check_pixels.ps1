Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("$PWD\assets\animalkumpul.png")
$c1 = $img.GetPixel(10, 10)
$c2 = $img.GetPixel(500, 10)
$c3 = $img.GetPixel(10, 500)
Write-Output "(10,10): A=$($c1.A) R=$($c1.R) G=$($c1.G) B=$($c1.B)"
Write-Output "(500,10): A=$($c2.A) R=$($c2.R) G=$($c2.G) B=$($c2.B)"
Write-Output "(10,500): A=$($c3.A) R=$($c3.R) G=$($c3.G) B=$($c3.B)"
$img.Dispose()
