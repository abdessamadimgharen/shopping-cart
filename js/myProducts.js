
let productsDom = document.querySelector(".products");
let noProducts = document.querySelector(".noProducts");

let drawProductsUI;
(drawProductsUI = function (products = []) {
    let filtredProducts = products.filter((i) => i.isMe === "Y");
    if(filtredProducts.length != 0) {
      let productsUI = filtredProducts.map((item) => {
        return `
        <div class="product-item" style="border: ${
          item.isMe === "Y" ? "2px solid #fb8500" : ""
        }">
            <img src="${item.imageUrl}" class="product-item-img" alt="arrival1">
            <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size : ${item.size}</span>
                <div class="buttons">
                    <button class='edit-product' onclick='editProduct(${
                      item.id
                    })'>Edit Product</button>
                    <button class='delete-product' onclick='deleteProduct(${
                      item.id
                    })'>Delete Product</button>
                </div>
            </div>

        </div>
        `;
      });
      productsDom.innerHTML = productsUI.join("");
    } else {
        noProducts.innerHTML = "There is no product!!";
    }
})(JSON.parse(localStorage.getItem("productsIn")) || products);

// Edit Product
function editProduct(id) {
    localStorage.setItem('editProduct', id);
    location = 'editProduct.html';
}

// Delete Product 
function deleteProduct(id) {
    let allProducts = JSON.parse(localStorage.getItem('productsIn')) || products;
    let filtredProducts = allProducts.filter((i) => i.isMe === "Y");
    let filtered = filtredProducts.filter(i => i.id !== id);
    let clickedItem = filtredProducts.find((i) => i.id === id);
    allProducts = allProducts.filter(i => i.id !== clickedItem.id)
    localStorage.setItem("productsIn", JSON.stringify(allProducts));
    drawProductsUI(filtered);
}