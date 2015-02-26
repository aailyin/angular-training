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
            scope: {
                show: '=',
                lastViewed: '='
            },
            link: function (scope, element, attrs) {
                scope.header = attrs.header || "Header";
                scope.okText = attrs['ok-text'] || "OK";
                scope.cancelText = attrs['cancel-text'] || "Cancel";
                scope.hideModal = function () {
                    if(this.outerScopeFn){
                        this.outerScopeFn();
                    }
                    scope.show = false;
                };
                scope.submitModal = function () {
                    if(this.outerScopeFn){
                        this.outerScopeFn();
                    }
                    scope.lastViewed = scope.header;
                    scope.show = false;
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
