let productsDom = document.querySelector(".products");
let noProducts = document.querySelector(".noProducts");

function drawFavProductsUI(allProducts = []) {
  if (
    !JSON.parse(localStorage.getItem("favoriteProduct")) ||
    JSON.parse(localStorage.getItem("favoriteProduct")).length === 0
  )
    noProducts.innerHTML = "There are no items!!";
  let products =
    JSON.parse(localStorage.getItem("favoriteProduct")) || allProducts;
  let productsUI = products.map((item) => {
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
                <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Favorites</button>
            </div>
        </div>
        `;
  });
  productsDom.innerHTML = productsUI.join("");
}
drawFavProductsUI();

function removeFromCart(id) {
  let favoriteProduct = localStorage.getItem("favoriteProduct");
  if (favoriteProduct) {
    let items = JSON.parse(favoriteProduct);
    let filtredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("favoriteProduct", JSON.stringify(filtredItems));
    drawFavProductsUI(filtredItems);
  } else {
  }
}
