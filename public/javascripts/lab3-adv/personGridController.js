(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope', 'PersonService'];

    /////////////////////////
    function PersonGridController($scope, PersonService) {
        $scope.show = false;
        $scope.query = '';
        $scope.persons = PersonService.getItems();
        $scope.phoneType = 'home';
        $scope.reverse = false;
        $scope.arrowsCls = {
            bottom: 'glyphicon glyphicon-triangle-bottom',
            top: 'glyphicon glyphicon-triangle-top'
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
                $scope.data = data;
            }
            $scope.show = !$scope.show;
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
    }
})();


