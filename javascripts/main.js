'use strict';
/* globals Firebase */
var signup, submitted;
var ref = new Firebase('https://bi-reader.firebaseio.com/');

var onLogin = function onLogin (error, authData) {
  if (!submitted) {return;}
  if (error) {console.log('Error logging in: ', error);}
  console.log('Auth success: ');
  console.log(authData);
  var provider = authData.provider === 'password' ? 'email' : authData.provider;
  ref.child('users').child(authData.auth.uid).once('value', function(userSnapshot) {
    if (!signup && !userSnapshot.val()) { // if logging in and no user found
      window.alert('A user with this ' + provider + ' account does not exist. Please try a different log in method or Sign up instead.');
      return;
    }
    if (signup && userSnapshot.val()) { // if signing up and user already exists
      window.alert('A user with this ' + provider + ' account already exists. Please Log in instead.');
      return;
    }
    if (signup) {
      userSnapshot.ref().child('authinfo').set({
        'userId': authData.uid,
        'provider': authData.provider,
        'username': authData.provider === 'password' || authData.provider === 'facebook' ? authData[authData.provider].email : authData[authData.provider].username,
        'pending': Date.now()              
      });
    }
    // auth.logout(); // page logs out so that the extension can log in
    window.postMessage({
     'type': 'HERES_TOKEN',
     'token': authData.token,
     'userId': authData.auth.uid
   }, '*');
  });
};

$(document).ready(function() {
  $('#passwordVerifyDiv').hide(); // hide password verify by default

  $('#signupButton').click(function() { // show password verify when singup button clicked
    if (signup) {return;} // don't repeat the following code if already done
    signup = true;
    // $('#nonEmailDiv').hide();
    $('#signupButton').unwrap();
    $('#loginButton').wrap('<a href="#"></a>');
    $('#passwordVerifyDiv').show();
    $('#submitButton').text('Sign up');
  });
  $('#loginButton').click(function() { // hide password verify when login button clicked
    if (!signup) {return;} // don't repeat the following code if already done
    signup = false;
    // $('#nonEmailDiv').show();
    $('#loginButton').unwrap();
    $('#signupButton').wrap('<a href="#"></a>');
    $('#passwordVerifyDiv').hide();
    $('#submitButton').text('Log in');
  });
  $('#facebookLoginButton').click(function() {
    submitted = true;
    ref.authWithOAuthPopup('facebook', onLogin, {
      'scope': 'email'
    });
  });
  $('#twitterLoginButton').click(function() {
    submitted = true;
    ref.authWithOAuthPopup('twitter', onLogin);
  });

  $('#submitButton').click(function(event) {
    var email = $('#inputEmail').val(),
        password = $('#inputPassword').val(),
        passwordVerify = $('#passwordVerify').val(),
        // rememberMe = $('#rememberMe').is(':checked'),
        loginEmail = function(email, password) {
          submitted = true;
          ref.authWithPassword({
            'email': email,
            'password': password
          }, onLogin);
        };
    event.preventDefault();
    if (email.length === 0) {return window.alert('Please enter your email and try again.');}
    if (password.length === 0) {return window.alert('Please enter your password and try again.');}
    if (signup) {
      if (passwordVerify !== password) {window.alert('Passwords don\'t match.'); return;}
      ref.createUser({
        email: email,
        password: password
      }, function(error) {
        if (error && error.code === 'INVALID_EMAIL') {window.alert('Please enter a valid email address.'); return;}
        if (error && error.code === 'EMAIL_TAKEN') {window.alert('A user with this email is already registered.'); return;}
        loginEmail(email, password);
      });
    } else {
      loginEmail(email, password);
    }
  });
  
});