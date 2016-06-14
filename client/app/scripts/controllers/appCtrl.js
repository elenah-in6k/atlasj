'use strict';

angular.module('clientApp')
  .controller('ApplicationController', function ($rootScope, $scope) {

  $rootScope.search = function (search1) {
    $scope.atlas = [
      {
        link: "muscles",
        name1: "м'яз"
      },
      {
        link: "not",
        name1: "not"
      }

    ];
    var atlas = $scope.atlas;

    var location = window.location;
    var result;
    for(var i=0; i<=atlas.length; i++){

      var name = atlas[i].name;
      console.log(name);
    //   if (search1.search(name) != -1)
    //    result = atlas[i].link;
    // else
    //     result = "not";
    }
    // location.hash = result;
    //
    // window.location = location;
  }

  });
