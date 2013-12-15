angular.module('LoginPage', [])
.controller('AdminCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	var ref = new Firebase('https://bi-reader.firebaseio.com/users');
	ref.on('value', function(usersSnapshot) {
		console.log('value!');
		console.log(userSnapshot.val());
	});
}]);