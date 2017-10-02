angular.module('app', [])
.controller('TestCtrl', function($scope) {
  console.log($scope)
})
.directive('testDirective', function(){
  return {
    link: function(scope) {
      console.log(scope)
    }
  }
})