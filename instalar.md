# Como instalar PhoneGap

### Intalar o Node JS e o PhoneGap Cli

1. Baixa o nodejs versão LTS **.msi**

  https://nodejs.org/en/download/

2. Execute este comando na sua linha de comando
  ```
  npm install -g phonegap
  ```
  Aguarde alguns minutos e o PhoneGap está instalado

*Se você não possue a permissao de administrador, va para este trecho do tutorial [Sem Permissão de Administrador](#sem-permissao-de-administrador) e volta para ao terminar.*

3. Instale o WebStorm

  https://www.jetbrains.com/webstorm/download/#section=windows-version
  
  Adiquira sua licença de estudante por este link usando seu e-mail da infnet
  
  https://www.jetbrains.com/student/

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

3. Faça o download deste pacote e salve na mesma pasta que salvou o node.js

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

7. Adicione a pasta `C:\node` no PATH do seu usuário ou do sistema
