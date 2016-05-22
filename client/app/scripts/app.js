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
      .when('/joints/head', {
        templateUrl: 'app/views/joints/head.html'
      })
      .when('/joints/sternum', {
        templateUrl: 'app/views/joints/sternum.html'
      })
      .when('/joints/shoulder', {
        templateUrl: 'app/views/joints/shoulder.html'
      })
      .when('/joints/hand', {
        templateUrl: 'app/views/joints/hand.html'
      })
      .when('/joints/pelvis', {
        templateUrl: 'app/views/joints/pelvis.html'
      })
      .when('/joints/foot', {
        templateUrl: 'app/views/joints/foot.html'
      })

      .when('/tissue', {
        templateUrl: 'app/views/tissue/tissue.html'
      })
      .when('/tissue/epithelial', {
        templateUrl: 'app/views/tissue/epithelial.html'
      })
      .when('/tissue/connective', {
        templateUrl: 'app/views/tissue/connective.html'
      })
      .when('/tissue/muscles', {
        templateUrl: 'app/views/tissue/muscles.html'
      })
      .when('/tissue/nervous', {
        templateUrl: 'app/views/tissue/nervous.html'
      })

      .when('/systems', {
        templateUrl: 'app/views/systems/sys.html'
      })
      .when('/systems/heard', {
        templateUrl: 'app/views/systems/heard/heard.html'
      })
      .when('/systems/blood', {
        templateUrl: 'app/views/systems/blood/blood.html'
      })
      .when('/systems/endocrine', {
        templateUrl: 'app/views/systems/endocrine/endocrine.html'
      })
      .when('/systems/respiratory', {
        templateUrl: 'app/views/systems/respiratory/respiratory.html'
      })
      .when('/systems/digestive', {
        templateUrl: 'app/views/systems/digestive/digestive.html'
      })
      .when('/systems/excretory', {
        templateUrl: 'app/views/systems/excretory/excretory.html'
      })
      .when('/systems/reproductive', {
        templateUrl: 'app/views/systems/reproductive/reproductive.html'
      })
      .when('/systems/nervous', {
        templateUrl: 'app/views/systems/nervous/nervous.html'
      })
      .when('/systems/senses', {
        templateUrl: 'app/views/systems/senses/senses.html'
      })
      .when('/systems/skin', {
        templateUrl: 'app/views/systems/skin/skin.html'
      })
      .when('/not', {
        templateUrl: 'app/views/not-impl.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
