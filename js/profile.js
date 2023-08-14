let userName = localStorage.getItem("username");
let email = localStorage.getItem("email");
let allMyProducts = JSON.parse(localStorage.getItem("productsIn")) || products;
let ourProducts = allMyProducts.filter(i => i.isMe === 'Y');

let user = document.querySelector("#username span");
let emailDom = document.querySelector("#email span");
let productsLength = document.querySelector("#productsLength span");
let myImage = document.getElementById("srcImage");


user.innerHTML = userName;
emailDom.innerHTML = email;
productsLength.innerHTML = ourProducts.length;
myImage.src = localStorage.getItem('userImg')
