let username = document.getElementById('username'),
    password = document.getElementById('password'),
    signIn   = document.getElementById('signin'),
    getUser = localStorage.getItem('username'),
    getPassword = localStorage.getItem('password');

signIn.addEventListener('click', login);

function login(e) {
    e.preventDefault();
    if(username.value === '' ||  password.value === '') {
        alert('Kindly ensure all required fields are completed to proceed, as missing information may hinder the processing of your request. Thank you for your cooperation.')
    } else {
        if((getUser && getUser.trim() === username.value) && (getPassword && getPassword === password.value)) {
            setTimeout(() => {location = 'index.html'}, 1500)
        } else {
            alert('username or password is incorrect!!')
        }
    }
};