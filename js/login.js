// Checking validation.
document.getElementById('submit-button').addEventListener('click', function(){
    // Getting email and password values.
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;

    // Check email and password.
    if(email == 'ilovenisat@gmail.com' && password == 'asdfjkl'){
        console.log('Email and password is correct.');
        window.location.href = 'banking.html'
    }
    else{
        alert('Invalid email or password.');
    }
})