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
				toggleAddModal: '&'
			},
			link: function (scope, element, attrs) {
				scope.person = {
					"firstName": "",
					"lastName": "",
					"age": null,
					"address": {
						"streetAddress": "",
						"city": "",
						"state": "",
						"postalCode": ""
					},
					"phoneNumber": [
						{
							"type": "home",
							"number": ""
						},
						{
							"type": "fax",
							"number": ""
						}
					]
				};
				scope.delete = function (){
					scope.removePerson();
				};
				scope.cancel = function (){
					scope.toggleAddModal();
				};
			}
		};
	}
})();