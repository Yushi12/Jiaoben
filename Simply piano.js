#!url=https://raw.githubusercontent.com/Yu9191/Script/main/simplypiano.sgmodule
#!name=simplypiano
#!desc=simplypiano


[Script]
# Simply Piano
simply piano = type=http-response,pattern=^https:\/\/alicdn\.joytunescn\.com\/server\/asla\/accounts\/accountAuthenticate,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/simplypiano.js,script-update-interval=0
[MITM]
hostname = %APPEND% alicdn.joytunescn.com
