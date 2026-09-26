Add-Type -AssemblyName System.Drawing
$files = Get-ChildItem assets\*.png
foreach ($f in $files) {
    $img = [System.Drawing.Image]::FromFile($f.FullName)
    Write-Output "$($f.Name): $($img.Width)x$($img.Height)"
    $img.Dispose()
}
