;(function(window) {

angular.module('app', [])
.directive('tabset', function(){
  return{
    restrict: 'E',
    transclude: true,
    scope: { 
      type: '@',
      vertical: '@',
      justified: '@'
    },
    templateUrl: 'tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
      var self = this
      self.tabs = []

      self.classes = {}

      if(self.type === 'pills') { 
        self.classes['nav-pills'] = true
      } else{
        self.classes['nav-tabs'] = true
      }

      if(self.justified) {
        self.classes['nav-justified'] = true
      }
      if(self.vertical) {
        self.classes['nav-stacked'] = true
      }

      self.addTab = function addTab(tab) {
        self.tabs.push(tab)

        if(self.tabs.length === 1){
          tab.active = true
        }
      }

      self.select = function(selectedTab) {
        if(selectedTab.disabled) {return}
        angular.forEach(self.tabs, function(tab) {
          if(tab.active && tab !== selectedTab) {
            tab.active = false;
          }
        })
        selectedTab.active = true;
      }
    }
  }
})
.directive('tab', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      heading: '@'
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    require: '^tabset', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
    // templateUrl: '',
    // replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function(scope, elem, attr, tabsetCtrl ) {
      scope.active = false

      scope.disabled = false
      if(attr.disable){
        attr.$observe('disable', function(value) {
          scope.disabled = (value !== 'false')
        })
      }
      tabsetCtrl.addTab(scope)
    }
  };
});
})(window)