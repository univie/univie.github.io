angular.module('LoginPage', ['googlechart'])
.controller('ChartsCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
	console.log('v10');
	window.addEventListener("message", function(event) {
	    // We only accept messages from ourselves
	    if (event.source != window)
	      return;

	    if (event.data.type && (event.data.type == "HERES_TOKEN")) {
			var userId = event.data.userId,
				authToken = event.data.token,
				refUser = new Firebase('https://bi-reader.firebaseio.com/users').child(userId),
				refUserLangs = refUser.child('serverSide/userLangs'),
				refTimeLog = refUser.child('timelog');

			refUserLangs.auth(authToken);

			refUserLangs.on('value', function(userLangsSpanshot) {
				refTimeLog.on('value', function(timeLogSnapshot) {
					var userLangs = userLangsSpanshot.val(),
						timeLog = timeLogSnapshot.val();
					if (userLangs === null || timeLog === null) {return;}
					$scope.years = Object.keys(timeLog).sort(function(a, b) {return parseInt(a, 10) - parseInt(b, 10);}); // sort keys numerically
					$scope.$watch('selectedYear', function(selectedYear) {
						if (!selectedYear) {return;}
						chart1.data = {"cols": [
							{id: "month", label: "Month", type: "string"}
						], "rows": []};
						angular.forEach(userLangs, function(langName, langCode) {
							chart1.data.cols.push({
							  'id': langCode,
							  'label': langName,
							  'type': 'number'
							});
						});
						angular.forEach(timeLog[selectedYear], function(entry, month) {
							// console.log(month);						    
						    var array = [{
						      'v': monthNames[month],
						    }];
						    angular.forEach(userLangs, function(langName, langCode) {
						      array.push({
						        'v': entry.langs[langCode] ? entry.langs[langCode] : 0,
						        'f': (entry.langs[langCode] ? entry.langs[langCode] : 0).toString() + ' hour' + (entry.langs[langCode] !== 1 ? 's' : '')
						      });
						    });
						    chart1.data.rows.push({'c': array});
						  });

						  chart1.options = {
						      "title": "Monthly activity",
						      "isStacked": "true",
						      "fill": 20,
						      "displayExactValues": true,
						      "vAxis": {
						          "title": "Hours", "gridlines": {"count": 4}
						      },
						      "hAxis": {
						          "title": "Month"
						      }
						  };
						$timeout(function() {$scope.chart = chart1;}, 0);
					});
					$scope.$apply(function() {
						$scope.selectedYear = $scope.years[$scope.years.length - 1];
					});
				});
			});
	    }
	});

	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var chart1 = {};
	chart1.type = "ColumnChart";
	chart1.displayed = false;
	chart1.cssStyle = "height:600px; width:100%;";
	chart1.data = {"cols": [
	    {id: "month", label: "Month", type: "string"}
	], "rows": []};


}]);