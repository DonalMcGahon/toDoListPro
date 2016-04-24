angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.To-Do', {
    url: '/To-Do',
    views: {
      'tab-To-Do': {
        templateUrl: 'templates/tab-To-Do.html',
        controller: 'To-DoCtrl'
      } // To-Do list tab
    }
  })

  .state('tab.Add-Items', {
    url: '/Add-Items',
    views: {
      'tab-Add-Items': {
        templateUrl: 'templates/tab-Add-Items.html',
        controller: 'Add-ItemsCtrl'
      } // Add Item tab
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/To-Do'); // Default Tab

});