(function () {
  function TestCtrl ($templateCache){
    this.user = {name: 'Blake'};
    console.log($templateCache.get('test.html'));
  }

  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'TestCtrl as test',
      templateUrl: 'test.html' 
    })
    .otherwise('/');
  })
  .controller('TestCtrl',TestCtrl);

  angular.module('app').run(function ($templateCache) {
    $templateCache.put('test.html', 'Hello {{ test.user.name }}!');
  });
})()