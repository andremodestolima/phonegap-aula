# Como instalar PhoneGap

## Com permissão de Administrador

*Se você não possui a permissao de administrador, vá para este trecho do tutorial [Sem Permissão de Administrador](#sem-permissão-de-administrador) e volte ao passo 3. para ao terminar.*

*Se você quer instalar o WebStorm e o Node JS no Pendrive, vá para este trecho do tutorial [Instalando no Pendrive](#instalando-no-pendrive).*

## Como trafegar entre diretórios no prompt

  http://www.tiexpert.net/sistema-operacional/comandos-de-dos/cd.php

### Intalar o Node JS e o PhoneGap Cli

1. Baixa o nodejs versão LTS **.msi**

  https://nodejs.org/en/download/

2. Execute este comando na sua linha de comando
  ```
  npm install -g phonegap
  ```
  Aguarde alguns minutos e o PhoneGap está instalado

3. Instale o WebStorm

  https://www.jetbrains.com/webstorm/download/#section=windows-version
  
  Adiquira sua licença de estudante por este link usando seu e-mail da infnet
  
  https://www.jetbrains.com/student/
  
  3.1. Insale o WebStorm no Pendrive

    Execute a instalação normalmente, mas ao definir o local de instalação, altere o caminho para o seu Pendrive

    ![12](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_12.png?raw=true)
    
  3.2. Após instalado, encontre o arquivo executável 
  
  `WebStorm.exe` ou `WebStorm64.exe` em `\WebStorm 2016.2.4\bin` (número variável de acordo com a versão)

4. Crie um novo projeto usando o WebStorm

  ![1](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_1.png?raw=true)
  
5. Selecione o PhoneGap e verifique o caminho para a instalação do PhoneGap

  ![2](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_2.png?raw=true)
  
6. Verifique se os arquivos do projeto foram criados corretamente

  ![3](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_3.png?raw=true)
  
7. Va no menu Run > Edit Configurations e altere o **Command** para *server* e **Plataform** para *browser*

  ![4](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_4.png?raw=true)
  
8. Verifique se o X não está aparecendo na seta vermelha, logo em seguida preciose a seta verde apontada pela seta azul

  ![5](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_5.png?raw=true)

9. Abra o seu navegador na url [http://localhost:3000/](http://localhost:3000/) e aguarde a aparecer a seguinte tela:

  ![6](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_6.png?raw=true)

10. Mantenha o navegador aberto e altere o arquivo `www/index.html` dentro do seu projeto, observe que a página recarregou com suas modificações.




## Sem permissão de administrador

1. Baixa o nodejs versão LTS **.exe**

  [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
  
2. Salve na pasta `C:\node\`

3. Faça o download deste pacote e salve na mesma pasta que salvou o node.exe

  [https://registry.npmjs.org/npm/-/npm-3.10.9.tgz](https://registry.npmjs.org/npm/-/npm-3.10.9.tgz)
  
4. Descomprimir esta pacote e acesse a pasta *package* dentro dele

5. Execute o comando dentro da pasta `package`:

  ```
  C:\node\node.exe cli.js install -gf
  ```
  
6. Execute o comando para instalar o phonegap dentro da pasta `C:\node\`

  ```
  npm install -g phonegap
  ```
  Aguarde alguns minutos e o PhoneGap está instalado

7. Adicione a pasta `C:\node` no PATH na primeira linha do arquivo phonegap.cmd dentro da pasta `C:\node`

  ```
  SET PATH=%PATH%;%~dp0\node\
  ```

8. Depois de instalar o Webstorm (passos no inicio deste tutorial), antes de criar um novo projeto, vá em *Configure > Settings*.

   ![7](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_7.png?raw=true)

9. Vá em *Languagues e Frameworks > Node.js and NPM* e selecione a opção de *ADD*

    ![8](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_8.png?raw=true)
   
10. Selecione o `node.exe` que você instalou dentro do seu pendrive. Lembrando que é possivel ter que refazer essa configuração toda vez que a LETRA DO DRIVER do seu Pendrive for alterada.

   ![9](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_9.png?raw=true)
   

## Instalando no Pendrive

*Será considerado como `E:` o Pendrive, mas isso pode variar de acordo com o seu computador.*

1. Baixa o nodejs versão LTS **.exe**

  [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
  
2. Salve na pasta `\node\` **DENTRO DO SEU PENDRIVE**

3. Faça o download deste pacote e salve na mesma pasta que salvou o node.exe

  [https://registry.npmjs.org/npm/-/npm-3.10.9.tgz](https://registry.npmjs.org/npm/-/npm-3.10.9.tgz)
  
4. Descomprimir a pasta *package* na mesma pasta que salvou o node.exe

5. Execute o comando dentro da pasta `package`

*Se você não lembra como acessar a pasta pelo prompt, vá para este trecho do tutorial [Como trafegar entre diretórios no prompt](#como-trafegar-entre-diretórios-no-prompt).*

  ```
  E:\node\node.exe cli.js install -gf
  ```
  ![10](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_10.png?raw=true)
  
6. Execute o comando para instalar o phonegap dentro da pasta `C:\node\`

  ```
  npm install -g phonegap
  ```
  ![11](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_11.png?raw=true)
  
  Aguarde alguns minutos e o PhoneGap está instalado

7. Adicione a pasta `E:\node` no PATH na primeira linha do arquivo phonegap.cmd dentro da pasta `E:\node`

  ```
  SET PATH=%PATH%;%~dp0\node\
  ```

8. Depois de instalar o WebStorm (passos no início deste tutorial), antes de criar um novo projeto, vá em *Configure > Settings*.

   ![7](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_7.png?raw=true)

9. Vá em *Languages e Frameworks > Node.js and NPM* e selecione a opção de *ADD*

    ![8](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_8.png?raw=true)
   
10. Selecione o `node.exe` que você instalou dentro do seu pendrive. Lembrando que é possivel ter que refazer essa configuração toda vez que a LETRA DO DRIVER do seu Pendrive for alterada.

   ![9](https://github.com/ebertti/phonegap-aula/blob/master/imagens/Screenshot_9.png?raw=true)
   
