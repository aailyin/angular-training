(function () {
    'use strict';

    angular
        .module('personLibraryApp')
        .controller('PersonGridController', PersonGridController);

    PersonGridController.$inject = ['$scope', '$filter', 'PersonService'];

    //////////////////////////////////////////////////////////////////
    function PersonGridController($scope, $filter, PersonService) {
        $scope.show = false;
        $scope.persons = PersonService.getItems();
        $scope.phoneType = 'home';

        /* UI Grid properties */
        $scope.headerTemplate = '<select class="form-control" ng-model="grid.appScope.phoneType">' +
								    '<option value="home">Home Phone Number</option>' +
								    '<option value="fax">Fax Number</option>' +
                                '</select>';
        $scope.phoneCellTemplate = '<span ng-repeat="phone in row.entity.phoneNumber" ng-show="phone.type == grid.appScope.phoneType">{{phone.number}}</span>';
        $scope.actionCellTemplate = '<div class="action-wrapper">' +
                                        '<button type="button" class="form-control glyphicon glyphicon-edit" ng-click="grid.appScope.toggleModal(row.entity)"></button>' +
                                    '</div>';
        $scope.columns = [
                {field: 'firstName', displayName: 'Firstname'},
                {field: 'lastName', displayName: 'Lastname'},
                {field: 'age', displayName: 'Age'},
                {field: 'address.city', displayName: 'City'},
                {field: '', displayName: '', name: 'phone',
                            cellTemplate: $scope.phoneCellTemplate,
                            headerCellTemplate: $scope.headerTemplate,
                            headerCellClass: 'grid-header-selectbox',
                            cellClass: 'grid-cell-template'},
                {field: '', displayName: 'Actions', name: 'action',
                            cellTemplate: $scope.actionCellTemplate,
                            headerCellClass: 'grid-header-action',
                            cellClass: 'grid-cell-template'}
            ];
        $scope.searchText = '';
        $scope.gridOptions = {
            columnDefs: $scope.columns,
            rowHeight: 40,
            minRowsToShow: 4
        };


        /* Methods of controller */
        $scope.toggleModal = function (data) {
            if(data){
                $scope.data = data;
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
        };
        $scope.cancelFn = function () {
            console.log('cancel');
        };
        $scope.submitFn = function () {
            console.log('submit');
        };
        $scope.refreshData = function() {
            $scope.gridOptions.data = $filter('filter')($scope.persons, $scope.searchText, undefined);
        };
    };
})();


