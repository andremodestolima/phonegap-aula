angular.module('starter.controllers', [])

.controller('TarefasCtrl', function($scope, Tarefas, Configuracoes) {

  $scope.tarefas_listar = Tarefas.todas();

  $scope.teclado_salvar = function (evt) {
    if (evt.which === 13) { // checa se apertou enter
      Tarefas.adicionar(this.titulo);
      this.titulo = '';
    }
  };

  $scope.excluir = function (tarefa) {
    Tarefas.remover(tarefa);
  };

  $scope.marcar_feito = function (tarefa) {
    tarefa.feito = !tarefa.feito;
  };

  var configuracoes = Configuracoes.todas();

  $scope.$watch(function () {
    if(configuracoes.autoSalvar){
      Tarefas.salvar();
    }
  })

})

.controller('ConfiguracaoCtrl', function($scope, Tarefas, Configuracoes) {
  $scope.configuracoes = Configuracoes.todas();

  $scope.salvar = function () {
    Tarefas.salvar();
  };

  $scope.$watch(function () {
    Configuracoes.salvar();
  });

  $scope.limpar = function () {
    Tarefas.limpar();
  };

});
