'use strict';

/**
 * @ngdoc overview
 * @name chdApp
 * @description
 * # chdApp
 *
 * Main module of the application.
 */
angular
  .module('chdApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/zipkid', {
        templateUrl:'views/zipkid.html',
        controller: 'ZipKidCtrl'
      })
      .when('/splash', {
        templateUrl:'views/splash.html',
        controller: 'SplashCtrl'
      })
      .when('/phone', {
        templateUrl:'views/phone.html',
        controller: 'PhoneCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
