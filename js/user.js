let userInfo = document.getElementById('user-info'),
    userDom = document.getElementById('user'),
    links = document.getElementById('links'),
    logOut = document.getElementById('logout');
    

let username = localStorage.getItem('username');
if(username) {
    links.remove();
    userInfo.style.display = 'flex';
    userDom.innerHTML = username;
}

logOut.addEventListener('click', () => {
    localStorage.clear();
    setTimeout(() => {location = 'register.html'}, 1500)
})