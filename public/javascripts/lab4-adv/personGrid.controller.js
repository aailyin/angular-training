(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope','PersonService'];

    /////////////////////////
    function PersonGridController($scope, PersonService) {
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

        $scope.activate = function () {
            PersonService.loadPersons()
                .then(function (persons){
                    $scope.persons = persons;
                });
        };

        //it should works -_-
        /*$scope.$watch('PersonService.persons', function (newVal, oldVal){
            console.log('here');
            $scope.persons = newVal;
        });*/

        $scope.isInfoValid = function () {
            if($scope.edit_form){
                return $scope.edit_form.$valid;
            }
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
        $scope.removePerson = function () {
            PersonService.removePerson($scope.person)
                .then(function (message){
                    $scope.message = message;
                    //TODO: find way how to watch PersonService.persons to update every time after response
                    $scope.persons = PersonService.persons;
                    $scope.toggleModal('delete');
                });
        };

        $scope.addPerson = function (){
            PersonService.addPerson($scope.person)
                .then(function (message){
                    $scope.message = message;
                    $scope.persons = PersonService.persons;
                    $scope.toggleModal('add');
                });
        };

        $scope.updatePerson = function (){
            PersonService.updatePerson($scope.person)
                .then(function (message){
                    $scope.message = message;
                    $scope.persons = PersonService.persons;
                    $scope.toggleModal('update');
                });
        };
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


