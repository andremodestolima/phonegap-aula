angular.module('starter.services', [])

.factory('Tarefas', function() {
  var tarefas = null;
  var tarefas_string = localStorage.getItem('tarefas');
  if(tarefas_string) {
    tarefas = JSON.parse(tarefas_string);
  } else {
    tarefas = [];
  }

  return {
    todas: function() {
      return tarefas;
    },

    remover: function(tarefa) {
      tarefas.splice(tarefas.indexOf(tarefa), 1);
    },

    adicionar: function (titulo) {
      tarefas.push({
        titulo: titulo,
        feito: false
      });

      return tarefas;
    },

    limpar: function () {
      tarefas.splice(0, tarefas.length); // limpa a lista
      localStorage.removeItem('tarefas');
    },

    salvar: function () {
      var tarefas_salvar_string = angular.toJson(tarefas);
      localStorage.setItem('tarefas', tarefas_salvar_string);
    }
  };
})

.factory('Configuracoes', function () {
  var configuracao = null;
  var configuracao_string = localStorage.getItem('configuracoes');
  if(configuracao_string) {
    configuracao = JSON.parse(configuracao_string);
  } else {
    configuracao = {
      autoSalvar: true
    };
  }

  return {
    todas: function() {
      return configuracao;
    },

    salvar: function () {
      var c = JSON.stringify(configuracao);
      localStorage.setItem('configuracoes', c)
    }
  };
})
;
