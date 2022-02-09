document.getElementById('login-submit').addEventListener('click', function () {

    //get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassowrd = passwordField.value;
    if (userEmail == 'mehedi@gmail.com' && userPassowrd == 'secret') {
        console.log("valid password");
        window.location.href = 'banking.html';
    }




})