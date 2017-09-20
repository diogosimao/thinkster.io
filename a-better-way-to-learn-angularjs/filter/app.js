function TestCtrl() {
  var self = this;
  self.myString = "Hello World";
}

function CapitalizerFilter() {
  return function (text) {
    return text.toUpperCase();
  }
}

angular.module('app', [])
.controller('TestCtrl', TestCtrl)
.filter('capitalize', CapitalizerFilter);

