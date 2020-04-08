call pub_auto

echo "Atencao digite a senha ao ser solicitada: %CERTIFICADO_SENHA%"
pause

cd ..

keytool -exportcert -alias %CERTIFICADO_ALIAS% -keystore %CERTIFICADO% | openssl sha1 -binary | openssl base64


pause