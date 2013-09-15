var ref = new Firebase('https://bi-reader.firebaseio.com/');

var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log(user);
    window.location.hash = user.firebaseAuthToken;
  } else {
    // user is logged out
  }
});

var logmein = function() {
	auth.login('password', {
		email: 'smack.it@gmail.com',
		password: 'smackit'
	});
}

var initElement = function() {	
	var h3 = document.getElementById("login");
	h3.onclick = logmein;
}