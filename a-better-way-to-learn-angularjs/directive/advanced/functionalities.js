angular.module('functionalities', [])
.directive("entering", function() {
  return function(scope, element, attrs) { 
    element.bind("mouseenter", function(){
      element.css('background-color', attrs.entering)
    })
  }
})
.directive("leaving", function() {
  return function(scope, element, attrs) {
    element.bind("mouseleave", function() {
      element.css('background-color', attrs.leaving);
    })
  }
});