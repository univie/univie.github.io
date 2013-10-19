var ref = new Firebase('https://bi-reader.firebaseio.com/');

var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    window.postMessage({ type: "FROM_PAGE", text: user.firebaseAuthToken}, "*");
  } else {
    // user is logged out
  }
});

var logmein = function() {
	auth.login('password', {
		email: 'smack.it@gmail.com',
		password: 'smackit'
	});
} ;

var initElement = function() {	
	var button = document.getElementById("login");
	button.onclick = logmein;
};

