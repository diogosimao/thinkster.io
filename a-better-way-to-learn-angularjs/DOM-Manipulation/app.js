var app = angular.module("app", []);

app.directive('myWidget', function () {
  var linkFn;
  linkFn = function(scope, element, attrs) {
    var animateDown, animateRight, oneBox, twoBox;

    oneBox = element.children()[0]
    twoBox = element.children()[1]

    animateRight = function() {
      $(this).animate({
        left: '+=50'
      })
    }

    animateDown = function() {
      $(this).animate({
        top: '+=50'
      })
    }

    $(oneBox).on('click', animateDown);
    $(twoBox).on('click', animateRight);
  };
  return {
    restrict: 'E',
    link: linkFn
  }
})