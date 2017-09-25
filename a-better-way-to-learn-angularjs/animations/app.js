function TestCtrl(){
  var self = this;

  self.showBoxOne = false;
  self.showBoxTwo = false;

}

angular.module('app', ['ngAnimate'])
.controller('TestCtrl', TestCtrl)