var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "app.html",
    controller: "AppCtrl",
    controllerAs: "app"
  })
  .when('/cookies/:cookieType', {
    redirectTo: function(routeParams, path, search) {
      console.log(routeParams);
      console.log(path);
      console.log(search);
      return "/" + routeParams.cookieType;
    }
  })
  .when("/sugar",{
    template: "Sugar cookie."
  })
  .otherwise({
    redirectTo: "/"
  });
})
.controller('AppCtrl', function($routeParams) {
  var self = this;
  self.message = "The app routing is working";
});