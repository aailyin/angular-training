(function (){
    'use strict';

    angular
        .module('personLibraryApp')
        .factory('PersonService', PersonService);

    PersonService.$inject = ['$http', '$filter'];

    function PersonService($http, $filter) {

        var service = {
            persons: [],
            loadPersons: loadPersons,
            addPerson: addPerson,
            updatePerson: updatePerson,
            removePerson: removePerson,
            getPersonById: getPersonById
        };

        return service;


        ////////////////////////////
        /**
         * Load all persons from server and add data in persons
         */
        function loadPersons() {
            var req = {
                method: 'GET',
                url: '/users'
            };
            return $http(req)
                .then(requestComplete)
                .catch(requestFailed);
        }
        /**
         * Add new person data
         * @param {object} person - New person data
         * @return {object} message - Object with message of status of request
         */
        function addPerson(person){
            var req = {
                method: 'POST',
                url: '/users',
                data: person
            };
            return $http(req)
                .then(function (resp){
                    service.persons = resp.data;
                    return {'action': 'add', type: 'success'};
                })
                .catch(function (e){
                    return {'action': 'add', type: 'danger'};
                });
        }
        /**
         * Update existing person
         * @param {object} person - Data of updating person
         * @return {object} message - Object with message of status of request
         */
        function updatePerson(person){
            var url = '/users/' + person.id;
            var req = {
                method: 'POST',
                url: url,
                data: person
            };
            return $http(req)
                .then(function (resp){
                    service.persons = resp.data;
                    return {'action': 'update', type: 'success'};
                })
                .catch(function (e){
                    return {'action': 'update', type: 'danger'};
                });
        }
        /**
         * Remove person
         * @param {object} person - Removed person
         * @return {object} message - Object with message of status of request
         */
        function removePerson(person){
            var url = '/users/' + person.id;
            var req = {
                method: 'DELETE',
                url: url
            };
            return $http(req)
                .then(function (resp){
                    service.persons = resp.data;
                    return {'action': 'delete', type: 'success'};
                })
                .catch(function (e){
                    return {'action': 'delete', type: 'danger'};
                });
        }
        function getPersonById(id){
            return $filter('filter')(service.persons, {id: id})[0];
        }
        /**
         * Handle success request
         */
        function requestComplete(resp){
            service.persons = resp.data;
            return service.persons;
        }
        /**
         * Handle error request
         */
        function requestFailed(resp){
            console.error('FAILED REQUEST: '+ resp);
        }
    }
})();
