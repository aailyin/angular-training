(function (){
	'use strict';

	angular
		.module('personLibraryApp')
		.directive('phone', phoneValidator);

	//////////////////////////////////////////////
	function phoneValidator(){
		return {
			restrict: 'EA',
			require: 'ngModel',
			link: function(scope, element, attributes, ngModel) {
				ngModel.$validators.phone = function(modelValue) {
					return (/^([\d]{3})([.-]{1})([\d]{3})([.-]{1})([\d]{4})$/.test(modelValue));
				}
			}
		};
	}

})();
