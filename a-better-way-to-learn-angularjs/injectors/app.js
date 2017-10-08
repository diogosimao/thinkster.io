var app = angular.module('app', []);

app.factory('game', function() {
  return {
    title: "StarCraft"
  };
});

angular.injector(['app']).invoke(function (game) {
  alert(game.title);
});

app.controller('AppCtrl', function($scope, game) {
  $scope.title = game.title;
})