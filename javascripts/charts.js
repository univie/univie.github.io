angular.module('LoginPage', ['googlechart'])
.controller('ChartsCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
	console.log('v9');
	window.addEventListener("message", function(event) {
	    // We only accept messages from ourselves
	    if (event.source != window)
	      return;

	    if (event.data.type && (event.data.type == "HERES_TOKEN")) {
			console.log('github page received: ', event.data.userId, event.data.token);
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
				  chart1.data = {"cols": [
				      {id: "month", label: "Month", type: "string"}
				  ], "rows": []};
				  if (userLangs === null || timeLog === null) {return;}
				  angular.forEach(userLangs, function(langName, langCode) {
				    chart1.data.cols.push({
				      'id': langCode,
				      'label': langName,
				      'type': 'number'
				    });
				  });
				  timeLog.forEach(function(entry) {
				    var array = [{
				      'v': monthNames[entry.month],
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