(function () {
    'use strict';

    var personLibraryApp = angular.module('personLibraryApp', ['ngRoute', 'ngSanitize']);

    personLibraryApp.config(['$routeProvider', function ($routeProvider){
        $routeProvider
            .when('/list', {
                templateUrl: '/static/html/views/persons-list.html',
                controller: 'PersonGridController'
            })
            .when('/person/:personId', {
                templateUrl: '/static/html/views/person-detail-page.html',
                controller: 'PersonDetailController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
})();
