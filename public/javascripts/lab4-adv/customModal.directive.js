(function (){
    'use strict';

    angular
        .module('personLibraryApp')
        .directive('customModal', customModal);

    //////////////////////////////////////////////
    function customModal() {
        return {
            templateUrl: '../templates/modal.html',
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: {
                header: '@',
                show: '=',
                person: '=',
                onsubmit: '&',
                oncancel: '&'
            },
            link: function (scope, element, attrs, ctrl) {
                scope.okText = attrs.okText || "Submit";
                scope.cancelText = attrs.cancelText || "Cancel";
                scope.hideModal = function () {
                    scope.oncancel();
                    scope.show = false;
                };
                scope.submitModal = function () {
                    scope.onsubmit();
                };
                scope.check = function (a, b, c){
                    console.log('herererer');
                }
            }
            /*controller: function ($scope){
                $scope.$watch('edit_form.$valid', function (newVal, oldVal){
                    $scope.isInfoValid = newVal;
                    console.log('here: ' + $scope.edit_form);
                });
            }*/

        };
    }
})();
