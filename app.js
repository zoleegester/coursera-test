//alert ("hello");
(function () {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.list = '';
		$scope.msg = '';

		$scope.checkItems = function () {
			if($scope.list !== '') {
				var arr = $scope.list.split(',');
				var count =0;
				for(var i =0; i<arr.length; i++){
					if(arr[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3){
						$scope.msg = 'Enjoy!';
					}
					else if(count > 3){
						$scope.msg = 'Too much!'
					}
				}
				else {
					enterItems();
				}
			}
			else {
				enterItems();
			}
		}
		var enterItems = function() {
			$scope.msg = 'Please enter data first';
		};
	}
})();
