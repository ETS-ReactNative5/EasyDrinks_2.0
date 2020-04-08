echo "Atencão digite enter na senha solicitada:"
pause

cd ..

keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | openssl sha1 -binary | openssl base64

pause