'use strict';
angular.module('clientApp')
  .controller('TestCtrl', ['$scope','$route','$rootScope', function ($scope, $route, $rootScope) {
    var info = $route.current.$$route.info;
    $scope.questionsName = info.questionsName;
    $scope.questions = info.questions;

    $scope.yourAns = new Array;
    $scope.score = 0;
    $scope.currentIndex = 0;

    $scope.engine = function(question, answer) {
      $scope.yourAns[question]=answer;
    }


    $scope.showRes = function(){
      $rootScope.scorePersent = 0;
      $rootScope.score = 0;
      $rootScope.questNumb = 0;
      var yourAnswers = $scope.yourAns;
      var questNumb = $scope.questions.length;

      for(var i=0; i < yourAnswers.length; i++ ){
        if(yourAnswers[i] == $scope.questions[i].correctAnswer){
          $scope.score++;
        }
      }
      $rootScope.scorePersent = Math.round(($scope.score * 100)/questNumb);
      $rootScope.score = $scope.score;
      $rootScope.questNumb = questNumb;
      alert($scope.score + "/"+ questNumb + " правильних відповідей, це " +  $rootScope.scorePersent + " % правильних відповідей")
    }

    function clearForm(name) {
      var f = document.forms[name];
      for(var i = 0; i < f.elements.length; ++i) {
        if(f.elements[i].checked)
          f.elements[i].checked = false;
      }
    }

  }]);
