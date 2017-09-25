var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "app.html",
    controller: "AppCtrl",
    controllerAs: "app",
    resolve: {
      app: function($q, $timeout) {
        var defer = $q.defer();
        $timeout(function () {
          defer.resolve();
        }, 2000);
        return defer.promise;
      }
    }
  });
})
.controller('AppCtrl', function($scope) {
  $scope.model = {
    message: "I'm a great app!"
  }
});