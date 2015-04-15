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
				toggleEditModal: '&',
				updatePerson: '&'
			},
			link: function (scope, element, attrs){
				scope.person = angular.copy(scope.editPerson);
				scope.submit = function (){
					scope.updatePerson({value: scope.person});
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