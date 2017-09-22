var app = angular.module("app", [])
app.config(function($logProvider){
  $logProvider.debugEnabled(false);
});
app.controller('appController', ['$scope', '$log', function($scope, $log) {
  $scope.temp = "someword";
  $scope.$log = $log;
}])