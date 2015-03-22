(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.controller('PersonDetailController', PersonDetailController);

	PersonDetailController.$inject = ['$scope', '$routeParams', 'PersonService'];

	function PersonDetailController($scope, $routeParams, PersonService){
		$scope.personId = $routeParams.personId;
		$scope.person = PersonService.getUserById($scope.personId);
		$scope.personOld = $scope.person; //TODO: need to create new object

		/* Methods */
		$scope.cancel = function (){
			window.location.hash = '/list';
			$scope.person = $scope.personOld;
		};
		$scope.update = function (){
			window.location.hash = '/list';
			PersonService.updateUser($scope.person);
		};
	}
})();