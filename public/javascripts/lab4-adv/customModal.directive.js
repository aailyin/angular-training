(function (){
    'use strict';

    angular
        .module('personLibraryApp')
        .directive('customModal', customModal);

    //////////////////////////////////////////////
    function customModal() {
        return {
            templateUrl: '../templates/lab4-templates/modal.html',
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: {
                header: '@',
                show: '=',
                person: '=',
                onsubmit: '&',
                oncancel: '&',
                form: '='
            },
            link: function (scope, element, attrs) {
                scope.okText = attrs.okText || "Submit";
                scope.cancelText = attrs.cancelText || "Cancel";
                scope.hideModal = function () {
                    scope.oncancel();
                    scope.show = false;
                };
                scope.submitModal = function () {
                    scope.onsubmit();
                };
            }
        };
    }
})();
