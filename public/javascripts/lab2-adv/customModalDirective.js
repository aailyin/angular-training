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
            scope: true,
            link: function (scope, element, attrs) {
                scope.header = attrs.header || "Header";
                scope.okText = attrs.okText || "OK";
                scope.cancelText = attrs.cancelText || "Cancel";
                if(attrs.oncancel){
                    scope.hideOutFn = scope[attrs.oncancel];
                }
                if(attrs.onsubmit){
                    scope.submitOutFn = scope[attrs.onsubmit];
                }
                scope.hideModal = function () {
                    if(this.hideOutFn){
                        this.hideOutFn();
                    }
                    scope.toggleModal();
                };
                scope.submitModal = function () {
                    if(this.submitOutFn){
                        this.submitOutFn();
                    }
                    scope.lastViewed.person = scope.data;
                    scope.toggleModal();
                };
            }
        };
    }
})();
