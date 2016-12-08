# Configurando ambiente Android

Vídeo com o passo a passo e explicando cada detalhe:

https://www.youtube.com/watch?v=Lio23jkqjWU

1. Baixar o JDK do java

  http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html
    
2. Baixar o Android SDK

  https://developer.android.com/studio/index.html#downloads
  
  Você pode baixar o Android Studio que já ajuda a configurar algumas coisas. Mas pode baixar apenas o SDK 
  (parte de baixo) para não sobrecarregar mais ainda seu pc.

3. Agora você precisa configurar as variáveis de ambiente
   
    1. Aperte a tecla windows e digite "variáveis de ambiente"

    2. Aperte o botão variáveis de ambiente

      Adicione as seguintes variáveis:

      * `JAVA_HOME` com o caminho para o JDK que foi instalado, ex: `C:\Program Files\Java\jdk1.8.0_111`

      * `ANDROID_HOME` com o caminho que o AndroidSDK foi instalado, ex: `C:\android-sdk`

      Adicione as seguintes pastas a variavel `Path` referente a pasta que foi instalada o android-sdk

      * C:\android-sdk\tools
      * C:\android-sdk\platform-tools

      Agora adicione as pastas referentes a instalação do JAVA

      * C:\Program Files\Java\jdk1.8.0_111\bin
      * C:\Program Files\Java\jre1.8.0_111\bin

4. Verificando se tudo foi instalado:

  Abra o git bash e execute os comandos:
  
  ```bash
  $ echo $ANDROID_HOME
  $ echo $JAVA_HOME
  $ echo $PATH
  ```
  
  Em cada uma das execuções, deve retornar o conteúdo que foi salvo nas configurações do windows. Se não retornar, 
  **reinicie o seu computador** e verifique se as variáveis apareceram com conteúdo.
  
5. Baixando dependências e SDKs das versões do Android para conseguir rodar o projeto

  Abra o git bash e execute o comando `android.bat`

  Verifique se ao menos estes pacotes estão instalados no seu ambiente

  ![Android SDK Manager](https://github.com/ebertti/phonegap-aula/blob/master/imagens/android-skd-manager-01.png?raw=true)

  Se não estiver, selecione e instale-os
