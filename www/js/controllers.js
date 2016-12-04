angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaFacebook) {s

  $scope.logar = function() {
    console.log('clicou');
    $cordovaFacebook.login(["public_profile", "email"]).then(function (sucesso) {
      var exemplo_sucesso = {
        status: "connected",
        authResponse: {
          session_key: true,
          accessToken: "<string longa>",
          expiresIn: 5183979,
          sig: "...",
          secret: "<string longa>",
          userID: "634565435"
        }
      };
      var facebook_id = sucesso.authResponse.userID;
      localStorage.setItem('facebook_id', facebook_id);
      $scope.facebook_id = facebook_id;

      $cordovaFacebook.api('me', ['public_profile']).then(function (dados) {
        var exemplo_dados = {
          "id": "634565435",
          "name": "Ezequiel Bertti"
        };
        localStorage.setItem('nome', dados.name);

        $scope.dados = dados;
      }, function(error){
        console.log('deu erro ao pedir dados', error)
      })
    }, function (erro) {
      console.log('deu erro no login', erro);
    });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
