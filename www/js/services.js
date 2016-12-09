angular.module('app.services', [])

.service('Hospitais', [function(){
  var hospitais = [];

  hospitais.push({
    nome: 'Souza Aguiar',
    bairro: 'Centro',
    foto: 'http://.....',
    telefone: '3111-2600'
  });

  hospitais.push({
    nome: 'Miguel Couto',
    bairro: 'Gavea',
    foto: 'http://.....',
    telefone: '1233-1231'
  });

  return {
    todos: hospitais
  }
}]);
