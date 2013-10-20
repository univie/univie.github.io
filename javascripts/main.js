var ref = new Firebase('https://bi-reader.firebaseio.com/');

var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log(user);
    window.postMessage({ type: "FROM_PAGE", text: user.firebaseAuthToken}, "*");
  } else {
    // user is logged out
  }
});

var logmein = function() {
  console.log('logmein');
  auth.login('password', {
    email: document.getElementById("username").value,
    password: document.getElementById("password").value,
    rememberMe: true
  });
  return false;
} ;

/*var initElement = function() {  
  var button = document.getElementById("login");
	button.onclick = logmein;
};*/