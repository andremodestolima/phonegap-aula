# Criando GIT

## Instalar o Git

### Windows

Baixar e instalar o [Git Bash](https://git-for-windows.github.io/)

### Linux (Ubuntu)

Executar o Comando
```sh
$ sudo apt-get update
$ sudo apt-get install git
```

### Mac

$ sudo brew install git

## Iniciar repositório

1. Abra o terminal

  Se estiver no windows, abra o **git bash**

2. Navegue até a pasta do seu projeto

  ```bash
  $ cd pasta/do/projeto
  ```
  
3. Inicie o repositório local do git

  ```bash
  $ git init
  ```
  
4. Informe seu nome e email para configurar o git
 
  ```bash
  $ git config user.name "Ezequiel Bertti"
  $ git config user.email "ezequiel.bertti@prof.infnet.edu.br
  ```
 
 Se você estiver em seu computador, você pode configurar de forma global, desta forma, valerá para todos os projetos git em seu computador
 
 ```bash
  $ git config --global user.name "Ezequiel Bertti"
  $ git config --global user.email "ezequiel.bertti@prof.infnet.edu.br
  ```
 
5. Crie o arquivo `.gitignore` como o arquivo deste repositório na pasta do seu projeto

  https://raw.githubusercontent.com/ebertti/phonegap-aula/master/.gitignore
  
  As pastas e arquivos referenciados neste arquivo, não serão adicionados ao seu repositório
  
6. Verifique o status do seu repositório:

  ```
  $ git status
  ```
  
7. Adicione o `.gitignore` no seu repositoro
  
  ```
  $ git add .gitignore
  ```
  
8. Faça o **commit** do `.gitignore`

  ```
  $ git commit -m "primeiro commit com ignore"
  ``` 

## Publicando código no GitHub

1. Crie seu repositório no GitHub publico

  Deixe a opção *Initialize this repository with a README* **DESMARCADA** para não criar arquivos de readme.
  E **NÃO** selecione arquivo de ignore (já criamos o nosso)
  e **NÃO** selecione arquivo de licença.

2. Adicione o *remote* ao seu repositório 

  O GitHub irá exibir informações para publicar um repositório já existente:
  
  **…or push an existing repository from the command line**
  
  Certifique-se que o botão HTTPS está pressiondo e execute o comando para o seu repositório

  ```bash
  $ git remote add origin https://github.com/ebertti/meuprojeto.git
  ```
  
3. Execute o comando **push** para publicar o que foi commitado até agora

  ```bash
  $ git push -u origin master
  ```

4. Verifique na página do seu projeto que agora há um arquivo .gitignore nele.

## Enviando modificações

1. Faça o commit de suas modificações:

  ```bash
  $ git commit -am "Sua mensagem de commit"
  ```
  
  Este comando adiciona os arquivos e faz o commit ao mesmo tempo, ele é equivalente há:

  ```bash
  $ git add .
  $ git commit -m "Sua mensagem de commit"
  ```

2. Faça a publicação do seu commit. **push**

  ```bash
  $ git push
  ```

