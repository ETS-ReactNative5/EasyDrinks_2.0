Ordem de criação:

1. Push e Facebook se tiver tem q ser a 1a coisa do projeto e ja com as contas do cliente.

2. Configurar no início o arquivo pub_auto.bat

3. Precisa ter os camandos abaixo no PATH:
-keytool (fica dentro do jre e jdk)
-openssl (caso nao tenha, npm install openssl ou https://www.openssl.org/related/binaries.html)
-jarsigner (fica dentro do jdk)
-zipalign (fica dentro do android sdk tools e tb em build-tools\19.1.0)

Todo App Tem Que Ter:
----------------------------------------------------------------------

Na Raiz:

/InfoGCM.txt 
  Contendo os dados do PUSH - API e Projeto.

/pub_auto_0_certificado.bat
   Gera um certificado para a produção

/pub_auto_0.1_facebookDEV.bat
   Gera o hash do certificado de testes

/pub_auto_0.2_facebookProd.bat
   Gera o hash do certificado do Google Play

/pub_auto_1_compila.bat
   Compila o App para o Google Play

/pub_auto_2_assina.bat
    Assina para enviar para o Google Play 

/certificado_***  
    Certificado do aplicativo no Google Play 

/certificado_***.txt  
    A senha do  Certificado do aplicativo no Google Play 

/***_producao.apk 
    Apk de produção para o Google Play

../google (Pasta contendo todos os scripts e certificados do Google)

../apple (Pasta contendo todos os certificados da Apple incluindo os de Push)

/Readme.txt 
  Esse conteúdo.
