let username = document.getElementById('username'),
    email    = document.getElementById('email'),
    password = document.getElementById('password'),
    signUp   = document.getElementById('signup');

    
signUp.addEventListener('click', register);

function register(e) {
    e.preventDefault();
    if(username.value === '' || email.value === '' || password.value === '') {
        alert('Kindly ensure all required fields are completed to proceed, as missing information may hinder the processing of your request. Thank you for your cooperation.')
    } else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);

        setTimeout(() => {location = 'login.html'}, 1500);
    }
};