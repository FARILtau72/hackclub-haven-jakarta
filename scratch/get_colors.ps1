Add-Type -AssemblyName System.Drawing
$b1 = New-Object System.Drawing.Bitmap "c:\khusus project IT\hackclubwebsite\assets\tree2.png"
$b2 = New-Object System.Drawing.Bitmap "c:\khusus project IT\hackclubwebsite\assets\roadvillage.png"

Write-Output ("tree2: " + $b1.Width + "x" + $b1.Height)
$c1 = $b1.GetPixel([int]($b1.Width / 2), $b1.Height - 10)
Write-Output ("tree2 bottom center: R=" + $c1.R + " G=" + $c1.G + " B=" + $c1.B)

Write-Output ("roadvillage: " + $b2.Width + "x" + $b2.Height)
$c2 = $b2.GetPixel([int]($b2.Width / 2), 10)
Write-Output ("roadvillage top center: R=" + $c2.R + " G=" + $c2.G + " B=" + $c2.B)

$c3 = $b2.GetPixel(10, [int]($b2.Height / 2))
Write-Output ("roadvillage left edge: R=" + $c3.R + " G=" + $c3.G + " B=" + $c3.B)

$b1.Dispose()
$b2.Dispose()
