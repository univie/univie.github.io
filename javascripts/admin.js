angular.module('LoginPage', [])
.controller('AdminCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	window.addEventListener("message", function(event) {
	    // We only accept messages from ourselves
	    if (event.source != window)
	      return;

	    if (event.data.type && (event.data.type == "HERES_TOKEN")) {
			var authToken = event.data.token,
				ref = new Firebase('https://bi-reader.firebaseio.com/users');
			ref.auth(authToken);
			ref.once('value', function(usersSnapshot) {
				$scope.users = usersSnapshot.val();
				$scope.$apply();
				console.log($scope.users);
			});
		}
		$scope.toggleActive = function(uid) {
			var authinfo = $scope.users[uid].authinfo;
			if (authinfo.pending) {
				authinfo.pending = null;
				authinfo.active = true;
			} else {
				authinfo.active = !authinfo.active;				
			}
			ref.child(uid).child('authinfo').set(authinfo);
		};
	});

}]);
