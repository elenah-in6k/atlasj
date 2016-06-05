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
    var musclesTest = {
      templateUrl: 'app/views/tests/test.html',
      controller: 'TestCtrl',
      info: {
        questionsName: "М'язова система ",
        questions: [
          {
            text: "Як називається тканина, що утворена волокнами з багатьма ядрами?",
            answers: [
              "сполучна",
              "нервова",
              "м'язова",
              "епітеліальна"
            ],
          correctAnswer: 2
          },
          {
            text: "Маса м'язової тканини у новонародженого складає:",
            answers: ["10-15%",
              "20-23 %",
              "30-35 %",
              "50-70%"
            ],
          correctAnswer: 2
          },
          {
            text: "Червоний колір м'язів зумовлений присутністю в них білка:",
            answers: ["міоальбуміну",
              "тропоніну",
              "актину і міозину",
              "міоглобіну"
            ],
          correctAnswer: 2},
          {
            text: "Які характерні особливості непосмугованої м'язової тканини?",
            answers: ["складається з веретеноподібних клітин",
              "клітини одноядерні, щільно прилягаючи одна до одної",
              "клітини багатоядерні",
              "утворює скелетну мускулатуру"
            ],
          correctAnswer: 2},
          {
            text: "Що характерно для м'язів внутрішніх органів?",
            answers: ["побудовані з гладенької тканини",
              "побудовані з посмугованої тканини",
              "здатні до швидкого скорочення"

            ],
          correctAnswer: 2},
          {
            text: "М'язове волокно скелетного м'яза складається з спеціалізованих скоротливих органоїдів, які називаються:",
            answers: [
              "протофібрилами",
              "нейрофібрилами",
              "міофібрилами",
              "саркомерами"
            ],
          correctAnswer: 2},
        {
          text: "Символ есть:",
          answers: ["образ, видоизмененный переживанием",
            "отражение личных представлений художника",
            "образ - точная копия окружающей действительности"],
          correctAnswer: 2
        }
      ]
      }
    };
    var skeletonTest = {
      templateUrl: 'app/views/tests/test.html',
      controller: 'TestCtrl',
      info: {
        questionsName: "Опорно-руховий апарат",
        questions: [
          {
            text: "	Середня частина кістки (тіло) має назву …",
            answers: [
              " проксимальний епіфіз;",
              " діафіз;",
              " апофіз;",
              " метафіз;",
              " дистальний епіфіз."],
            correctAnswer: 1
          },

          {
            text: "	Кістковий виступ поблизу епіфізу, що має самостійну точку скостеніння, має назву …",
            answers: [
              "проксимальний епіфіз;",
              "діафіз;",
              "апофіз;",
              "метафіз;",
              "дистальний епіфіз."],
            correctAnswer: 2
          },

          {
            text: "	Потовщений кінець кістки, розташований ближче до тулуба, має назву …",
            answers: [
              "проксимальний епіфіз;",
              "діафіз;",
              "апофіз;",
              "метафіз;",
              "дистальний епіфіз."],
            correctAnswer: 0
          },

          {
            text: "	Потовщений кінець кістки, розташований  далі  від  тулуба,  має назву …",
            answers: [
              "проксимальний епіфіз;",
              "діафіз;",
              "апофіз;",
              "метафіз;",
              "дистальний епіфіз."],
            correctAnswer: 4
          },

          {
            text: "	Проміжна частина кістки має назву …",
            answers: [
              "проксимальний епіфіз;",
              "діафіз;",
              "апофіз;",
              "метафіз;",
              "дистальний епіфіз."],
            correctAnswer: 3
          }

        ]
      }
    };
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
      .when('/muscles/head/supracranial-neck', {
        templateUrl: 'app/views/muscles/head/supracranial-neck.html'
      })
      .when('/muscles/head/supracranial-frontal', {
        templateUrl: 'app/views/muscles/head/supracranial-frontal.html'
      })
      .when('/muscles/head/temporalis', {
        templateUrl: 'app/views/muscles/head/temporalis.html'
      })
      .when('/muscles/head/anterior-auricular', {
        templateUrl: 'app/views/muscles/head/anterior-auricular.html'
      })
      .when('/muscles/head/superior-auricular', {
        templateUrl: 'app/views/muscles/head/superior-auricular.html'
      })
      .when('/muscles/head/posterior-auricular', {
        templateUrl: 'app/views/muscles/head/posterior-auricular.html'
      })
      // .when('/muscles/head/supracranial-neck', {
      //   templateUrl: 'app/views/muscles/head/supracranial-neck.html'
      // })
      // .when('/muscles/head/supracranial-neck', {
      //   templateUrl: 'app/views/muscles/head/supracranial-neck.html'
      // })

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
      .when('/test', {
        templateUrl: 'app/views/tests/all-tests.html'
      })
      .when('/test/muscles', musclesTest)
      .when('/test/skeleton', skeletonTest)

      .when('/not', {
        templateUrl: 'app/views/not-impl.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
