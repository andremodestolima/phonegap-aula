angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.hospitais', {
    url: '/hospitais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hospitais.html',
        controller: 'hospitaisCtrl'
      }
    }
  })

  .state('menu.delegacias', {
    url: '/delegacias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/delegacias.html',
        controller: 'delegaciasCtrl'
      }
    }
  })

  .state('menu.pontosTuristicos', {
    url: '/pontosTuristicos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pontosTuristicos.html',
        controller: 'pontosTuristicosCtrl'
      }
    }
  })

  .state('menu.praias', {
    url: '/praias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/praias.html',
        controller: 'praiasCtrl'
      }
    }
  })

  .state('menu.restaurantes', {
    url: '/restaurantes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/restaurantes.html',
        controller: 'restaurantesCtrl'
      }
    }
  })

  .state('menu.hoteis', {
    url: '/hoteis',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hoteis.html',
        controller: 'hoteisCtrl'
      }
    }
  })

  .state('menu.eventos', {
    url: '/eventos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventos.html',
        controller: 'eventosCtrl'
      }
    }
  })

  .state('menu.banheiros', {
    url: '/banheiros',
    views: {
      'side-menu21': {
        templateUrl: 'templates/banheiros.html',
        controller: 'banheirosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')



});
