(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope', '$http', 'PersonService'];

    /////////////////////////
    function PersonGridController($scope, $http, PersonService) {
        $scope.show = false;
        $scope.showEdit = false;
        $scope.showDelete = false;
        $scope.showAdd = false;
        $scope.editPerson = {};
        $scope.deletePerson = {};
        $scope.newPerson = {};
        $scope.query = '';
        $scope.phoneType = 'home';
        $scope.reverse = false;
        $scope.arrowsCls = {
            bottom: 'glyphicon glyphicon-triangle-bottom',
            top: 'glyphicon glyphicon-triangle-top'
        };

        //TODO: move all http requests into service
        $scope.activate = function () {
            var req = {
                method: 'GET',
                url: '/users'
            };
            $http(req)
                .then(function (resp){
                    $scope.persons = resp.data;
                })
                .catch(function (e){});
        };

        $scope.removePerson = function (person) {
            var url = '/users/' + person.id;
            var req = {
                method: 'DELETE',
                url: url
            };
            $http(req)
                .then(function (resp){
                    $scope.persons = resp.data;
                    $scope.message = {'action': 'remove', type: 'success'};
                    $scope.toggleDeleteModal();
                })
                .catch(function (e){
                    $scope.toggleDeleteModal();
                });
        };

        $scope.addPerson = function (person){
            var req = {
                method: 'POST',
                url: '/users',
                data: person
            };
            $http(req)
                .then(function (resp){
                    $scope.persons = resp.data;
                    $scope.message = {'action': 'add', type: 'success'};
                    $scope.toggleAddModal();
                })
                .catch(function (e){
                    $scope.toggleDeleteModal();
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
        $scope.toggleModal = function (data) {
            if(data){
                $scope.person = data;
            }
            $scope.show = !$scope.show;
        };
        $scope.toggleAddModal = function () {
            $scope.showAdd = !$scope.showAdd;
        };
        $scope.toggleEditModal = function (person) {
            if(person){
                $scope.editPerson = person;
            }
            $scope.showEdit = !$scope.showEdit;
        };
        $scope.toggleDeleteModal = function (person) {
            if(person){
                $scope.deletePerson = person;
            }
            $scope.showDelete = !$scope.showDelete;
        };
        $scope.hideModal = function () {
            $scope.toggleModal({show: false});
        };
        $scope.setPredAndRev = function (predicate, reverse) {
            $scope.predicate = predicate;
            $scope.reverse = reverse;
        };
        $scope.cancelFn = function () {
            console.log('cancel');
        };
        $scope.submitFn = function () {
            console.log('submit');
        };

        $scope.activate();
    }
})();


