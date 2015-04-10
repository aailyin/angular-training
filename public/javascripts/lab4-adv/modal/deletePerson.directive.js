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
				toggleDeleteModal: '&'
			},
			link: function (scope, element, attrs) {
				scope.delete = function (){
					//TODO: ajax-request to remove person from list
				};
				scope.cancel = function (){
					scope.toggleDeleteModal();
				};
			}
		};
	}
})();