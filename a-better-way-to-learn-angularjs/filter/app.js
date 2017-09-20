function TestCtrl() {
  var self = this;
  self.myString = "Hello World";
}

function CapitalizerFilter() {
  return function (text) {
    return text.toUpperCase();
  }
}

function TestCtrl2() {
  var self = this;
  self.people = [
    {
      name: "Eric Simons",
      born: "Chicago"
    },
    {
      name: "Diogo Simao",
      born: "Barra Mansa"
    },
    {
      name: "Matthew Greenster",
      born: "Virginia"
    }
  ];
}

angular.module('app', [])
.controller('TestCtrl', TestCtrl)
.controller('TestCtrl2', TestCtrl2)
.filter('capitalize', CapitalizerFilter);

