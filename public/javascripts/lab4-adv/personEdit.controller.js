(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.controller('PersonDetailController', PersonDetailController);

	PersonDetailController.$inject = ['$scope', '$routeParams', 'PersonService'];

	function PersonDetailController($scope, $routeParams, PersonService){
		$scope.personId = $routeParams.personId;
		$scope.person = PersonService.getPersonById($scope.personId) || {};
		$scope.personOld = angular.copy($scope.person);
		$scope.cancel = cancel;
		$scope.update = update;

		//////////////////////////////////////
		/**
		 * Cancel current person detail page
		 */
		function cancel(){
			window.location.hash = '/list';
		}

		/**
		 * Update person data on server
		 */
		function update(){
			PersonService.updatePerson($scope.person);
			$scope.cancel();
		}
	}
})();