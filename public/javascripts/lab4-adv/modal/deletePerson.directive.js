(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.directive('deletePersonModal', deletePersonModal);

	///////////////////////////////////////
	function deletePersonModal(){
		return {
			templateUrl: '../templates/deletePersonModal.html',
			restrict: 'EA',
			replace: true,
			scope: {
				showDelete: '=',
				deletePerson: '=',
				toggleDeleteModal: '&',
				removePerson: '&'
			},
			link: function (scope, element, attrs) {
				scope.delete = function (){
					scope.removePerson();
				};
				scope.cancel = function (){
					scope.toggleDeleteModal();
				};
			}
		};
	}
})();