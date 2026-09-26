Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\Faril Putra pratama\.gemini\antigravity-ide\brain\777ee0ce-0ca2-4127-94e5-c23d2c758a53\.user_uploaded\media_1790342281125.png"
$img = [System.Drawing.Image]::FromFile($srcPath)

function Save-Crop($name, $y, $h) {
    $rect = New-Object System.Drawing.Rectangle(0, $y, $img.Width, $h)
    $bmp = New-Object System.Drawing.Bitmap($img.Width, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $img.Width, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $outPath = "C:\Users\Faril Putra pratama\.gemini\antigravity-ide\brain\777ee0ce-0ca2-4127-94e5-c23d2c758a53\scratch\$name.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $outPath"
}

Save-Crop "crop_picnic_exact" 330 180
$img.Dispose()
