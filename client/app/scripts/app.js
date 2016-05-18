'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
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
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/bodySystems', {
        templateUrl: 'app/views/body-systems.html',
        controller: 'BodySystemCtrl'
      })
      .when('/muscles', {
        templateUrl: 'app/views/muscles/muscles.html'
      })
      .when('/muscles/head', {
        templateUrl: 'app/views/muscles/head.html'
      })
      .when('/muscles/neck', {
        templateUrl: 'app/views/muscles/neck.html'
      })
      .when('/muscles/torso', {
        templateUrl: 'app/views/muscles/torso.html'
      })
      .when('/muscles/hand', {
        templateUrl: 'app/views/muscles/hand.html'
      })
      .when('/muscles/pelvis', {
        templateUrl: 'app/views/muscles/pelvis.html'
      })
      .when('/muscles/foot', {
        templateUrl: 'app/views/muscles/foot.html'
      })
      .when('/skeleton', {
        templateUrl: 'app/views/skeleton/skeleton.html'
      })
      .when('/skeleton/head', {
        templateUrl: 'app/views/skeleton/head.html'
      })
      .when('/skeleton/spine', {
        templateUrl: 'app/views/skeleton/spine.html'
      })
      .when('/skeleton/torso', {
        templateUrl: 'app/views/skeleton/torso.html'
      })
      .when('/skeleton/hand', {
        templateUrl: 'app/views/skeleton/hand.html'
      })
      .when('/skeleton/pelvis', {
        templateUrl: 'app/views/skeleton/pelvis.html'
      })
      .when('/skeleton/foot', {
        templateUrl: 'app/views/skeleton/foot.html'
      })


      .when('/joints', {
        templateUrl: 'app/views/joints/joints.html'
      })

      .when('/tissue', {
        templateUrl: 'app/views/tissue/tissue.html'
      })

      .when('/systems', {
        templateUrl: 'app/views/systems/systems.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
