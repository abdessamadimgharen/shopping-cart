let products = JSON.parse(localStorage.getItem('productsIn'));
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-details');

let productDetails = products.find(item => item.id == productId);

itemDom.innerHTML = `
    <img src="${productDetails.imageUrl}" alt=""/>
    <h2>${productDetails.title}</h2>
    <p>${productDetails.desc}</p>
    <span>Size: ${productDetails.size}</span>
    <p>Quantity: ${productDetails.qty}</p><br>
    <button class="edit-product" onclick="editProduct(${productDetails.id})">Edit Product</button>
`;


function editProduct(id) {
  localStorage.setItem("editProduct", id);
  location = "editProduct.html";
}