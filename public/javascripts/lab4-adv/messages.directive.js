(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.directive('messages', messages);

	///////////////////////////////////////////
	function messages(){
		return {
			templateUrl: '../templates/messages.html',
			restrict: 'EA',
			replace: true,
			scope: {
				message: '='
			},
			link: function (scope){
				scope.closeMessage = function (){
					delete scope.message;
				}
			}
		}
	}
})();