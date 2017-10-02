function testInterceptors() {
  return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      return res;
    },

    responseError: function(res) {
      return res;
    },
  }
}

angular.module('app', [])
.factory('testInterceptors', testInterceptors)
.config(function($httpProvider) {
  $httpProvider.interceptors.push('testInterceptors');
})
.run(function($http) {
  $http.get('http://test-routes.herokuapp.com/test/hello')
    .then(function(res) {
      console.log(res.data.message)
    })
})