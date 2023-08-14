
let productsDom = document.querySelector(".products");
let noProducts = document.querySelector('.noProducts');

function drawProductsUI(allProducts = []) {

    if(JSON.parse(localStorage.getItem('products')).length === 0) noProducts.innerHTML = "There are no items!!";

    let products = JSON.parse(localStorage.getItem('products')) || allProducts;
    let productsUI = products.map(item => {
        return `
        <div class="product-item">
            <img src="${item.imageUrl}" class="product-item-img" alt="arrival1">
            <div class="product-item-desc">
            <a href="cartDetails.html">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size : ${item.size}</span>
                <span>Quantity : ${item.qty}</span>               
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Cart</button>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML = productsUI.join("")
}
drawProductsUI()

function removeFromCart(id) {
    let productsInCart = localStorage.getItem('products');
    if(productsInCart) {
        let items = JSON.parse(productsInCart);
        let filtredItems = items.filter(item => item.id !== id);
        localStorage.setItem("products", JSON.stringify(filtredItems))
        drawProductsUI(filtredItems);
    }
}