(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope', 'PersonService'];

    /////////////////////////
    function PersonGridController($scope, PersonService) {
        /* Variables */
        $scope.forms = {};
        $scope.person = {};
        $scope.query = '';
        $scope.phoneType = 'home';
        $scope.reverse = false;
        $scope.arrowsCls = {
            bottom: 'glyphicon glyphicon-triangle-bottom',
            top: 'glyphicon glyphicon-triangle-top'
        };
        $scope.show = {
            add: false,
            update: false,
            delete: false
        };

        /* Methods */
        $scope.watchPersonsModel = watchPersonsModel;
        $scope.addNewPerson = addNewPerson;
        $scope.addPerson = addPerson;
        $scope.removePerson = removePerson;
        $scope.updatePerson = updatePerson;
        $scope.toggleModal = toggleModal;
        $scope.setPredAndRev = setPredAndRev;
        $scope.closeMessage = closeMessage;

        activate();


        //////////////////////////////////////////////
        /**
         * Activate PersonGridController loading all persons from server
         */
        function activate() {
            $scope.watchPersonsModel();
            PersonService.loadPersons()
                .then(function (persons){
                    $scope.persons = persons;
                });
        }

        /**
         * Start watch loaded persons model in PersonService.persons
         */
        function watchPersonsModel(){
            $scope.$watch(
                function(){ return PersonService.persons; },
                function (newVal, oldVal){
                    $scope.persons = newVal;
            });
        }

        /**
         * Open "Add person" modal creating an empty model
         */
        function addNewPerson() {
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
        }

        /**
         * Remove person from server
         */
        function removePerson() {
            PersonService.removePerson($scope.person)
                .then(function (message){
                    $scope.message = message;
                    $scope.toggleModal('delete');
                });
        }

        /**
         * Add new person on server
         */
        function addPerson(){
            PersonService.addPerson($scope.person)
                .then(function (message){
                    $scope.message = message;
                    $scope.toggleModal('add');
                });
        }

        /**
         * Update existing person on server
         */
        function updatePerson(){
            PersonService.updatePerson($scope.person)
                .then(function (message){
                    $scope.message = message;
                    $scope.toggleModal('update');
                });
        }

        /**
         * Open modal by type
         * @param {string} type - Type of modal window
         * @param {string} person - Person data for modal
         */
        function toggleModal(type, person) {
            if(person){
                $scope.person = person;
            }
            $scope.show[type] = !$scope.show[type];
        }

        /**
         * Set predicate and reverse for filtering
         * @param {string} predicate - Predicate
         * @param {string} reverse - Reverse
         */
        function setPredAndRev(predicate, reverse) {
            $scope.predicate = predicate;
            $scope.reverse = reverse;
        }

        /**
         * Close success/error message
         */
        function closeMessage(){
            delete $scope.message;
        }
    }
})();


