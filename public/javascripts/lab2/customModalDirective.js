(function (){
    'use strict';

    angular
        .module('personLibraryApp')
        .directive('customModal', customModal);

    //////////////////////
    function customModal() {
        return {
            templateUrl: '../templates/modal.html',
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: true,
            link: function (scope, element, attrs) {
                scope.header = attrs.header || "Header";
                scope.okText = attrs.okText || "OK";
                scope.cancelText = attrs.cancelText || "Cancel";
                scope.hideModal = function () {
                    if(this.outerScopeFn){
                        this.outerScopeFn();
                    }
                    scope.toggleModal();
                };
                scope.submitModal = function () {
                    if(this.outerScopeFn){
                        this.outerScopeFn();
                    }
                    scope.lastViewed = scope.person;
                    scope.toggleModal();
                };
                if(attrs.oncancel){
                    scope.hideModal.outerScopeFn = attrs.oncancel;
                }
                if(attrs.onsubmit){
                    scope.submitModal.outerScopeFn = attrs.onsubmit;
                }
            }
        };
    }
})();
