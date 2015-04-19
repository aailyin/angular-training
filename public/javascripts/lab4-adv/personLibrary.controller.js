(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.controller('LibraryController', LibraryController);

	LibraryController.$inject = ['$scope'];

	function LibraryController($scope){
		window.location.hash = '';
		$scope.predicate = '';
		$scope.showButton = {
			'text': 'Show Lesson Content',
			'btnClass': 'btn-default',
			'isShow': false
		};
		$scope.lastViewed = {
			person: null
		};

		$scope.changeBtn = function () {
			if($scope.showButton.isShow){
				window.location.hash = '/';
				$scope.showButton.btnClass = 'btn-default';
				$scope.showButton.text = 'Show Lesson Content';
				$scope.showButton.isShow = false;
				$scope.lastViewed.person = null;
			} else {
				window.location.hash = '/list';
				$scope.showButton.btnClass = 'btn-primary';
				$scope.showButton.text = 'Hide Lesson Content';
				$scope.showButton.isShow = true;
			}
			$scope.predicate = '';
		};
	}
})();