angular.module('app', [])
.controller('TestCtrl', function($scope) {
  console.log($scope)
})
.directive('testDirective', function(){
  return {
    scope: {},
    link: function(attr, elem, scope) {
      console.log(scope)
    }
  }
})