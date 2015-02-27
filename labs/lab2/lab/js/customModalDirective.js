(function (){
    'use strict';

    angular
        .module('personLibraryApp')
        .directive('customModal', customModal);

    //////////////////////
    function customModal() {
        return {
            template: '<div class="custom-modal" ng-show="showModal()">' +
                            '<div class="overlay">'+
        '<span class="modal-close-x" ng-click="hideModal()"></span></div>' +
    '<div class="modal-dialog"><div class="modal-content"><header>{{header}}</header>' +
            '<div class="content"><ul>' +
                    '<li ng-repeat="(key, prop) in person" if="key != \'firstName\' && key !=\'lastName\'">'+
                        '<b>{{key}}:</b><span>{{prop}}</span></li></ul>' +
            '</div></div>' +
        '<div class="modal-buttons">'+
            '<div class="buttons-wrap">'+
                '<button type="button" class="modal-close btn-default" ng-click="hideModal()">{{cancelText}}</button>' +
                '<button type="button" class="modal-submit btn-primary" ng-click="submitModal()">{{okText}}</button>'+
            '</div></div></div></div>',
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: true,
            link: function (scope, element, attrs) {
                scope.data = scope.data;
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
                    scope.lastViewed = scope.header;
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
