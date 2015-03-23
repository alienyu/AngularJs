function MyController($scope, $timeout) {
	var updateLock = function() {
		$scope.clock = new Date();
		$timeout(function() {
			updateLock();
		},1000);
	};
	updateLock();
};