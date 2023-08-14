let cartProductDivDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let cartProductMenu = document.querySelector(".carts-products");
let shoppingCartIcon = document.querySelector(".shoppingCart");
shoppingCartIcon.addEventListener("click", openCrtMenu);

// Check if there is data in localStorage
let addedItems = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
if (addedItems) {
  addedItems.map((item) => {
    cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItems.length;
}


function openCrtMenu() {
    if(cartProductDivDom.innerHTML != "") {
        cartProductMenu.classList.toggle('show');
    }
};