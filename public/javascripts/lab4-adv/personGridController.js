(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope', '$http', 'PersonService'];

    /////////////////////////
    function PersonGridController($scope, $http, PersonService) {

        $scope.show = {
            add: false,
            update: false,
            delete: false
        };
        $scope.person = {};
        $scope.query = '';
        $scope.phoneType = 'home';
        $scope.reverse = false;
        $scope.arrowsCls = {
            bottom: 'glyphicon glyphicon-triangle-bottom',
            top: 'glyphicon glyphicon-triangle-top'
        };

        $scope.addNewPerson = function () {
            var emptyPerson =  {
                "firstName": "",
                "lastName": "",
                "age": null,
                "address": {
                    "streetAddress": "",
                    "city": "",
                    "state": "",
                    "postalCode": ""
                },
                "phoneNumber": [
                    {
                        "type": "home",
                        "number": ""
                    },
                    {
                        "type": "fax",
                        "number": ""
                    }
                ]
            };
            $scope.toggleModal('add', emptyPerson);
        };

        //TODO: move all http requests into service
        $scope.activate = function () {
            PersonService.loadPersons()
                .then(function (persons){
                    $scope.persons = persons;
                });
        };

        $scope.removePerson = function (person) {
            PersonService.removePerson(person)
                .then(function (message){
                    $scope.message = message;
                    $scope.toggleModal('delete');
                });
        };

        $scope.addPerson = function (person){
            PersonService.addPerson(person)
                .then(function (message){
                    $scope.message = message;
                    $scope.toggleModal('add');
                });
        };

        $scope.updatePerson = function (person){
            PersonService.updatePerson(person)
                .then(function (message){
                    $scope.message = message;
                    $scope.toggleModal('update');
                });
        };

        /* Methods */
        $scope.typeFilter = function (item){
            for(var i = 0; i < item.phoneNumber.length; i++){
                if(item.phoneNumber[i].type === $scope.phoneType){
                    console.log('Type: ' + $scope.phoneType);
                    return item.phoneNumber[i].number;
                }
            }
        };
        $scope.toggleModal = function (type, data) {
            if(data){
                $scope.person = data;
            }
            $scope.show[type] = !$scope.show[type];
        };
        $scope.setPredAndRev = function (predicate, reverse) {
            $scope.predicate = predicate;
            $scope.reverse = reverse;
        };
        $scope.closeMessage = function (){
            delete $scope.message;
        };

        $scope.activate();
    }
})();


