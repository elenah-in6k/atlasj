'use strict';

    angular.module('clientApp')
      .controller('ApplicationController', function ($rootScope, $scope, $location) {

        $rootScope.search = function (userQuery) {
          $scope.atlas = [
            {
              link: "/muscles/head",
              name: "м'язи голови"
            },
            {
              link: "/muscles/head/supracranial-neck",
              name: "затилочний м'яз"
            },
            {
              link: "/muscles/head/supracranial-frontal",
              name: "лобний м'яз"
            },
            {
              link: "/muscles/head/temporalis",
              name: "Височний м'яз"
            },
            {
              link: "/muscles/head/anterior-auricular",
              name: "Передній вушний м'яз"
            }
            ,
            {
              link: "/muscles/head/superior-auricular",
              name: "Верхній вушний м'яз"
            },
            {
              link: "/muscles/head/posterior-auricular",
              name: "Задній вушний м'яз"
            },
            {
              link: "/muscles/neck",
              name: "М'яз шиї"
            },
            {
              link: "/muscles/torso",
              name: "М'язи тулуба"
            },
            {
              link: "/muscles/hand",
              name: "М'язи верхніх кінцівок"
            },
            {
              link: "/muscles/pelvis",
              name: "м'язи таз"
            },
            {
              link: "/muscles/foot",
              name: "М'язи нижніх кінцівок"
            },
            {
              link: "/muscles",
              name: "М'яз"
            },
            {
              link: '/skeleton/head',
              name: "череп"
            },
              {
              link: '/skeleton/spine',
              name: "хребет"
            },
              {
              link: '/skeleton/torso',
              name: "Грудний відділ"
            },
              {
              link: '/skeleton/hand',
              name: "Верхня кінцівка"
            },
              {
              link: '/skeleton/pelvis',
              name: "Тазовий пояс"
            },
              {
              link: '/skeleton/foot',
              name: "Нижня кінцівка"
            },
            {
              link: '/skeleton',
              name: "скелет"
            },
            {
              link: '/joints',
              name: "суглоби"
            },
            {
              link: '/tissue',
              name: "тканини"
            },
            {
              link: '/systems',
              name: "систем"
            },
            {
              link: '/systems/heard',
              name: "серцева"
            },
            {
              link: '/systems/heard/heard',
              name: "серце"
            },
            {
              link: '/test',
              name: "тест"
            }



          ];

          for (var i = 0; i < $scope.atlas.length; i++) {
            var name = $scope.atlas[i].name;
            if (userQuery.toLowerCase().search(name.toLowerCase()) != -1) {
              $location.path($scope.atlas[i].link);
              return;
            }
          }
          alert('Not found');
        };


    $rootScope.getResult = function(){
      $rootScope.scorePersent = window.localStorage.getItem("scorePersent");
      $rootScope.questNumb = window.localStorage.getItem("questNumb");
      $rootScope.score = window.localStorage.getItem("score");
    };

    $rootScope.getResult();

  });
