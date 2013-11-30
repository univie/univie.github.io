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

$(document).ready(function() {
  var logmein = function() {
    console.log('logmein');
    auth.login('password', {
      'email': document.getElementById("username").value,
      'password': document.getElementById("password").value,
      'rememberMe': true
    });
    return false;
  };
  $('#passwordVerifyDiv').hide(); // hide password verify by default

  $('#signupButton').click(function() { // show password verify when singup button clicked
    $('#nonEmailDiv').hide();
    $('#passwordVerifyDiv').show();
    $('#submitButton').text('Sign up');
  });
  $('#loginButton').click(function() { // hide password verify when login button clicked
    $('#nonEmailDiv').show();
    $('#passwordVerifyDiv').hide();
    $('#submitButton').text('Log in');
  });
  $('#facebookLoginButton').click(function() {
    auth.login('facebook', {
      'rememberMe': true,
      'scope': 'email'
    });
  });
  $('#twitterLoginButton').click(function() {
    auth.login('twitter');
  });

  $('#submitButton').click(function() {

  });
  
});