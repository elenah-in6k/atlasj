'use strict';
angular.module('clientApp')
  .controller('BodySystemCtrl', function ($scope, BodySystem) {
    $scope.bodySystems = [
      'Рука',
      'нога',
      'Karma'
    ];

    BodySystem.getAll().then(
      function (response) {
        $scope.bodySystems = response;
        console.log(response);
      },
      function (response) {
        console.log(response)

      }
    );

  });
