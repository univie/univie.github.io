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
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth.login('password', {
    email: email,
    password: password
  });
} ;

var initElement = function() {  
  var button = document.getElementById("login");
	button.onclick = logmein();
};