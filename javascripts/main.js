var ref = new Firebase('https://bi-reader.firebaseio.com/');

var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    if (error.code === 'INVALID_EMAIL') {alert('Please enter a valid email address.');}
    if (error.code === 'INVALID_USER') {alert('A user with this email does not exist.');}
    if (error.code === 'INVALID_PASSWORD') {alert('The password provided is incorrect.');}
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

var signup;
$(document).ready(function() {
  $('#passwordVerifyDiv').hide(); // hide password verify by default

  $('#signupButton').click(function() { // show password verify when singup button clicked
    signup = true;
    // $('#nonEmailDiv').hide();
    $('#passwordVerifyDiv').show();
    $('#submitButton').text('Sign up');
  });
  $('#loginButton').click(function() { // hide password verify when login button clicked
    signup = false;
    // $('#nonEmailDiv').show();
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
    auth.login('twitter', {
      'rememberMe': true/*,
      'oauth_token': '15952759-QCp4pH3tLaSF8L6e3wLDxvqlCfkpcNAAbNeHVWQFK',
      'oauth_token_secret': 'fm2RiZ2VY33Fsnx1XWMsISbjYHgnHML30NUsjAVAssm2V',*/

    });
  });

  $('#submitButton').click(function(event) {
    var email = $('#inputEmail').val(),
        password = $('#inputPassword').val(),
        passwordVerify = $('#passwordVerify').val(),
        rememberMe = $('#rememberMe').is(':checked'),
        loginEmail = function(email, password, rememberMe) {
          auth.login('password', {
            'email': email,
            'password': password,
            'rememberMe': rememberMe
          });
        };
    event.preventDefault();
    if (email.length === 0) {return alert('Please enter your email and try again.');}
    if (password.length === 0) {return alert('Please enter your password and try again.');}
    if (signup) {
      if (!(/.+@.+\..+/).test(email)) {alert('Please enter a valid email address.'); return;}
      if (passwordVerify !== password) {alert('Passwords don\'t match.'); return;}
      auth.createUser(email, password, function(error, user) {
        if (error) {console.log(error); return;}
        console.log('User Id: ' + user.id + ', Email: ' + user.email);
        loginEmail(email, password, rememberMe);
      });
    } else {
      loginEmail(email, password, rememberMe);
    }
  });
  
});