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
        $scope.predicate = '';
        $scope.reverse = false;
        $scope.arrowsCls = {
            bottom: 'glyphicon glyphicon-triangle-bottom',
            top: 'glyphicon glyphicon-triangle-top'
        };

        /* Methods */
        $scope.toggleModal = function (context) {
            if(context){
                $scope.data = context.person;
            }
            $scope.show = !$scope.show;
        };
        $scope.lastViewed = {
            person: null
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
                $scope.lastViewed.person = null;
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
        $scope.cancelFn = function () {
            console.log('cancel');
        };
        $scope.submitFn = function () {
            console.log('submit');
        };
        $scope.phone = $scope.phoneType == 'home' ? 'phoneNumber[0].number' : 'phoneNumber[1].number';
        $scope.headerTemplate = '<select class="form-control" ng-model="phoneType">' +
										  '<option value="home">Home Phone Number</option>' +
										  '<option value="fax">Fax Number</option></select>';
        $scope.columns = [
                {field: 'firstName', displayName: 'Firstname'},
                {field: 'lastName', displayName: 'Lastname'},
                {field: 'age', displayName: 'Age'},
                {field: 'address.city', displayName: 'City'},
                {field: $scope.phone, displayName: '',
                            headerCellTemplate: $scope.headerTemplate}
            ];
        $scope.myExternalScope = $scope;
        $scope.gridOptions = {
            data: 'persons',
            columnDefs: $scope.columns
        };
    };
})();


