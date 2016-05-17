'use strict';
angular.module('clientApp')
   .factory('BodySystem', function ($resource, $q) {
     'use strict';

     var bodySystemResource = $resource('/api/body-systems', {}, {
       all: {method: 'GET'}
     });

     function getAll() {
       var deferred = $q.defer();
       bodySystemResource.all({},{},
         function (response) {
           deferred.resolve(response);
         },
         function (response) {
           deferred.reject(response);
         });

       return deferred.promise;
     }

      return{
        getAll: getAll
      }
   });
