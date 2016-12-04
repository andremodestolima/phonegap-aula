# Debugando pelo Android

Fundamental para desenvolver com Cordova/Phonegap/Ionic para o ambiente Android

## Log

Antes de listar as ferramentas que iremos usar, é bom lembrar que você precisa se acostumar a usar o modulo de
`console` do JavaScript.

Mas de todas as possibilidades, a mais importante é conseguir usar o `console.log('sua mensagem')`.
Um porém do Cordova é que o `console` não consegue receber objetos complexos, apenas strings.
Então, sempre devemos converter nossos objetos usando algo como:

```javascript
    var informacao = {
        nome: "Ezequiel",
        telegramm: "@ebertti",
        sala: 212
    };
    // como deve ser feito no Cordova/Phonegap/Ionic
    console.log('informação: ' + JSON.stringify(informacao));
    
    // como fazemos no Browser
    console.log('informação', informacao);
```

## ADB logcat

O ambiente android instala diversas ferramentas, entre ela o `adb`, o Android Debug Bridge, que faz a conexão do Android
com o PC para facilitar o Debug.

O `logcat` faz a captura de todo o log gerado em nosso console.

Para executar, basta rodar o comando no seu *git bash* ou terminal:

```bash
$ adb logcat
```

## Monitor

É uma interface gráfica que arruma os dados do logcat para facilitar a análise do log gerado pela aplicação.

Para executar o `monitor`, basta digitar no seu *git bash* ou terminal:

```bash
$ monitor
```

Aguarde alguns segundos que irá aparecer uma tela com diversas opções, nelas você poderá ver todos os dispositivos 
conectados em seu computador e todo o log gerado por estes dispositivos.

Para facilitar a leitura e ver apenas logs gerados pela sua aplicação, no campo *Search for messages...* digite:

```
         app:org.seuusuario.suaaplicacao
  
  Ex:    app:org.ebertti.ionicfacebook
```

Que irá aparecer apenas mensagens da sua aplicação.

Para filtar mais ainda, você pode escolher o nivel de log, troque de verbosr para info no canto direito.

![Android Monitor](https://github.com/ebertti/phonegap-aula/blob/master/imagens/android-debug-01.png?raw=true)


## Ionic

Para ter logs detalhados no Ionic, basta executar o comando run com os parâmetros de livereload, console e server.

```
$ ionic run -l -c -s
```

Que os dados irão aparecer no console. Você pode configurar para sempre executar desta forma no Webstorm:

![Configurando Webstorm](https://github.com/ebertti/phonegap-aula/blob/master/imagens/android-debug-02.png?raw=true)

