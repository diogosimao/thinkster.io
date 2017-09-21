var app = angular.module('drinkApp', []);

app.controller('AppCtrl', function($scope){
  $scope.ctrlFlavor = "blackberry";
})

/*without @ 
app.directive('drink', function() {
  return {
    scope: {},
    template: '<div> {{ flavor }} </div>',
    link: function (scope, element, attrs) {
      scope.flavor = attrs.flavor;
    }
  };
});*/

/*with @ */
app.directive('drink', function() {
  return {
    scope: {
      flavor: '@'
    },
    template: '<div> {{ flavor }} </div>',
  };
});