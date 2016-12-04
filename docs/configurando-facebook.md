# Configurando Facebook

Fique bem atendo a este passo a passo, pois ele não pode ser feito pela metade, se não der atenção, sua aplicação não
irá autenticar usando o Facebook.

Para este tutorial funcionar, é necessário que o ambiente de desenvolvimento do Android esteja configurado, caso ainda
não tenha configurado, veja este tutorial: [Configurando Ambiente Android](configurando-ambiente-android.md)

O plugin que iremos utilizar é o [cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4)

## Configurando a App no Facebook

Antes de começar a mexer em código, precisamos criar uma conta como desenvolvedor no Facebook e criar um App.

https://developers.facebook.com/apps

1) Depois da aplicação criada, vá no menu **Configurações > Básico**.

2) Clique em **+ Adicionar plataforma**, selecione **Android**

3) Preencha o **Nome do pacote do Google Play** com o seguinte formato:
  
  org.seu_usuario_github.nome_do_app
  
  ex: *org.ebertti.testefacebook*

  Não esqueça de atualizar o `config.xml` do seu projeto com este namespace na segunda linha do projeto. Ex:
  
  ```xml
   <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
     <widget id="org.ebertti.testefacebook" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
     <name>Ionic Facebook</name>
  ```
e
4) Vamos gerar uma **Hashes Chave** para testar, rodando o seguinte comando no **git bash**

  ```bash
    $ keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
  ```
  
  Este comando irá gerar algo parecido com isso: `eapaGG1pgH9Cgze7o8Nhr9WFwDU=`, Copie esse valor no campo *Hashes chave*
  
  Você pode e deve adicionar vários Hashs, um para cada computador que está desenvolvendo sua aplicação
   Android com Cordova.
  
## Phonegap

1) Adicione a plataforma android no projeto

  ```bash
  $ phonegap platform add android  
  ```

2) Adicione o plugin do de [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)
  
  ```bash
  $ phonegap plugin add cordova-plugin-whitelist
  ```

3) Adicione o plugin do facebook, não esqueça que será necessário o ID do App criado no Facebook
  
  ```bash
  $ phonegap plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApplication"
  ```
  
4) Verifique se o arquivo config.xml possui o cordova-plugin-facebook4 com o APP_ID e o APP_NAME

Agora você á pode fazer o login no facebook

```javascript
facebookConnectPlugin.login(['public_profile','email'], function(sucesso){
    var exemplo_sucesso = { // isso é apenas um exemplo
      status: "connected",  // da estrutura retornada
      authResponse: {       // o valor correto está em
        session_key: true,  // sucesso
            accessToken: "<string longa>",
            expiresIn: 5183979,
            sig: "<string longa>",
            secret: "<string longa>",
            userID: "634565435"
        }
    };
    var facebook_id = sucesso.authResponse.userID;
    localStorage.setItem('facebook_id', facebook_id);
    
    facebookConnectPlugin.api('me', function(dados){
        var exemplo_dados = {
          "id": "634565435",
          "name": "Ezequiel Bertti"
        };
        
        localStorage.setItem('nome', dados.name);
    })
}, function(erro) {
  console.log('deu errado', erro);
});
```

## Ionic 

1) Instale os seguintes pacotes, seguindo estes comandos

  ```bash
  $ npm install -g bower
  $ npm install ionic-native
  $ bower install ionic-native
  ```
  
2) Adicione a referência do `ionic-native` no arquivo *www/index.html* logo apos a referência ao `ionic`, Ex:

```html
    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>
    
    <!-- adicionar aqui o ionic-native -->
    <script src="lib/ionic-native/ionic.native.js"></script>

    <!-- cordova script (this will be a 404 during development) -->
    <script src="cordova.js"></script>

```

3) Adicione o plugin do de [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)
  
  ```bash
  $ phonegap plugin add cordova-plugin-whitelist
  ```

4) Adicione a plataforma android no projeto

  ```bash
  $ ionic platform add android  
  ```

5) Adicione o plugin do facebook, não esqueça que será necessário o ID do App criado no Facebook
   
  ```bash
  $ ionic plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApplication"
  ```

6) Verifique se o arquivo config.xml possue o cordova-plugin-facebook4 com o APP_ID e o APP_NAME

Agora você á pode fazer o login no facebook

```javascript

angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, $cordovaFacebook) {
  $cordovaFacebook.login(["public_profile", "email"]).then(function (sucesso) {
    var exemplo_sucesso = { // isso é apenas um exemplo
      status: "connected",  // da estrutura retornada
      authResponse: {       // o valor correto está em
        session_key: true,  // sucesso
        accessToken: "<string longa>",
        expiresIn: 5183979,
        sig: "...",
        secret: "<string longa>",
        userID: "634565435"
      }
    };
    var facebook_id = sucesso.authResponse.userID;
    localStorage.setItem('facebook_id', facebook_id);
  
    $cordovaFacebook.api('me', ['public_profile']).then(function (dados) {
      var exemplo_dados = { // outro exemplo de retorno
        "id": "634565435",  // o valor certo esta na var dados
        "name": "Ezequiel Bertti"
      };
      localStorage.setItem('nome', dados.name);
 
    }, function(erro){
      console.log('deu erro ao pedir dados', erro)
    })
  }, function (erro) {
    console.log('deu erro no login', erro);
  });
})

