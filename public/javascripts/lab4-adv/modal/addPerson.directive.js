(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.directive('addPersonModal', addPersonModal);

	///////////////////////////////////////
	function addPersonModal(){
		return {
			templateUrl: '../templates/addPersonModal.html',
			restrict: 'EA',
			replace: true,
			scope: {
				showAdd: '=',
				toggleAddModal: '&',
				addPerson: '&',
				newPerson: '='
			},
			link: function (scope, element, attrs) {
				scope.person = scope.newPerson;
				scope.submit = function (){
					scope.addPerson(scope.person);
				};
				scope.cancel = function (){
					scope.toggleAddModal();
				};
			}
		};
	}
})();