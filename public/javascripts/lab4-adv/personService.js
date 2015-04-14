(function (){
    'use strict';

    angular
        .module('personLibraryApp')
        .service('PersonService', PersonService);

    PersonService.$inject = ['$http'];

    //////////////////////////////
    function PersonService($http) {
        var me = this;
        this.persons = null;
        this.getPersons = function () {
            if(this.persons === null){
                return this.loadPersons();
            }
            return this.persons;
        };
        this.loadPersons = function () {
            var req = {
                method: 'GET',
                url: '/users'
            };
            $http(req)
                .then(this.requestComplete)
                .catch(this.requestFailed);
        };
        this.getUserById = function (personId) {
            for(var i = 0; i < this.persons.length; i++){
                if(this.persons[i].id == personId){
                    return this.persons[i];
                }
            }
        };
        this.updateUser = function (user){
            for(var i = 0; i < this.persons.length; i++){
                if(this.persons[i].id == user.id){
                    this.persons[i] = user;
                    return;
                }
            }
        };
        this.requestComplete = function (resp){
            me.persons = resp.data;
            console.log('SUCCESS: '+ resp);
            return me.persons;
        };
        this.requestFailed = function (resp){
            console.log('FAIL: '+ resp);
        };
    }
})();
