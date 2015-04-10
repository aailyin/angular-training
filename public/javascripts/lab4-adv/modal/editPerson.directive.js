(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.directive('editPersonModal', editPersonModal);

	////////////////////////////////////
	function editPersonModal() {
		return {
			templateUrl: '../templates/editPersonModal.html',
			restrict: 'EA',
			replace: true,
			scope: {
				showEdit: '=',
				editPerson: '=',
				toggleEditModal: '&'
			},
			link: function (scope, element, attrs){
				scope.person = angular.copy(scope.editPerson);
				scope.submit = function (){
					//TODO: ajax-request to update person data
				};
				scope.cancel = function (){
					scope.toggleEditModal();
				};

				scope.$watch('editPerson', function (newValue, oldValue){
					scope.person = angular.copy(newValue);
				});
			}
		};
	}
})();