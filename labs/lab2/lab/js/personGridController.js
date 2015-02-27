(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope', 'PersonService'];

    /////////////////////////
    function PersonGridController($scope, PersonService) {
        $scope.lastViewed = '';
        $scope.show = false;
        $scope.query = '';
        $scope.persons = PersonService.getItems();
        $scope.currentPerson = $scope.persons[0];
        $scope.phoneType = 'home';
        $scope.predicate = '';
        $scope.reverse = false;
        $scope.arrowsCls = {
            bottom: 'glyphicon glyphicon-triangle-bottom',
            top: 'glyphicon glyphicon-triangle-top'
        };
        $scope.toggleModal = function (context) {
            if(context){
                $scope.data = context.person;
            }
            $scope.show = !$scope.show;
        };
        $scope.showButton = {
            'text': 'Show Lesson Content',
            'btnClass': 'btn-default',
            'isShow': false
        };

        $scope.changeBtn = function () {
            if($scope.showButton.isShow){
                $scope.showButton.btnClass = 'btn-default';
                $scope.showButton.text = 'Show Lesson Content';
                $scope.showButton.isShow = false;
            } else {
                $scope.showButton.btnClass = 'btn-primary';
                $scope.showButton.text = 'Hide Lesson Content';
                $scope.showButton.isShow = true;
            }
            $scope.predicate = '';
        };
        $scope.setPredAndRev = function (predicate, reverse) {
            $scope.predicate = predicate;
            $scope.reverse = reverse;
        };
    };
})();


