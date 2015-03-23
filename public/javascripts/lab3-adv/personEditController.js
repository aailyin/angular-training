(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.controller('PersonDetailController', PersonDetailController);

	PersonDetailController.$inject = ['$scope', '$routeParams', 'PersonService'];

	function PersonDetailController($scope, $routeParams, PersonService){
		$scope.personId = $routeParams.personId;
		$scope.person = PersonService.getUserById($scope.personId);
		$scope.personOld = angular.copy($scope.person);

		/* Methods */
		$scope.cancel = function (){
			window.location.hash = '/list';
			PersonService.updateUser($scope.personOld);
		};
		$scope.update = function (){
			window.location.hash = '/list';
			PersonService.updateUser($scope.person);
		};
	}
})();