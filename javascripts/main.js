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
      ref.auth(user.firebaseAuthToken, function(error, result) {
        if (error) {console.log('Error logging in: ', error);}
        console.log('Auth success: ');
        console.log(result.auth);
        var provider = result.auth.provider === 'password' ? 'email' : result.auth.provider;
        ref.child('users').child(result.auth.uid).once('value', function(userSnapshot) {
          if (!signup && !userSnapshot.val()) { // if logging in and no user found
            window.alert('A user with this ' + provider + ' account does not exist. Please try a different log in method or Sign up instead.');
            return;
          }
          if (signup && userSnapshot.val()) { // if signing up and user already exists
            window.alert('A user with this ' + provider + ' account already exists. Please Log in instead.');
            return;
          }
          auth.logout(); // page logs out so that the extension can log in
          window.postMessage({
           'type': "HERES_TOKEN",
           'token': user.firebaseAuthToken,
           'userId': result.auth.uid
         }, "*");
        });
      });
  } else {
    // user is logged out
    console.log('logged out');
  }
});

var signup;
$(document).ready(function() {
  $('#passwordVerifyDiv').hide(); // hide password verify by default

  $('#signupButton').click(function() { // show password verify when singup button clicked
    if (signup) return; // don't repeat the following code if already done
    signup = true;
    // $('#nonEmailDiv').hide();
    $('#signupButton').unwrap();
    $('#loginButton').wrap('<a href="#"></a>');
    $('#passwordVerifyDiv').show();
    $('#submitButton').text('Sign up');
  });
  $('#loginButton').click(function() { // hide password verify when login button clicked
    if (!signup) return; // don't repeat the following code if already done
    signup = false;
    // $('#nonEmailDiv').show();
    $('#loginButton').unwrap();
    $('#signupButton').wrap('<a href="#"></a>');
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
      if (passwordVerify !== password) {alert('Passwords don\'t match.'); return;}
      auth.createUser(email, password, function(error, user) {
        if (error && error.code === 'INVALID_EMAIL') {alert('Please enter a valid email address.'); return;}
        if (error && error.code === 'EMAIL_TAKEN') {alert('A user with this email is already registered.'); return;}
        console.log('User Id: ' + user.id + ', Email: ' + user.email);
        loginEmail(email, password, rememberMe);
      });
    } else {
      loginEmail(email, password, rememberMe);
    }
  });
  
});