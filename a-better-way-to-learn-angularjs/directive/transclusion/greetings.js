angular.module('greetings', [])
.directive("welcome", function() {
  return {
    restrict: "E",
    scope: {},
    transclude: true,
    template: "<div>This is the welcome component</div><ng-transclude></ng-transclude>"
  }
});