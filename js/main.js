let productsDom = document.querySelector('.products');
let productsIn = products;

let drawProductsUI;
(drawProductsUI = function (productsIn = []) {
  let productsUI = productsIn.map((item) => {
    return `
        <div class="product-item" style="border: ${
          item.isMe === "Y" ? "2px solid #fb8500" : ""
        }">
            <img src="${item.imageUrl}" class="product-item-img" alt="arrival1">
            <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size : ${item.size}</span>
                ${
                  item.isMe === "Y"
                    ? "<button class='edit-product' onclick='editProduct(" +
                      item.id +
                      ")'> Edit Product </button>"
                    : ""
                }
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${
                  item.id
                })">Add To Cart</button>
                <i class="${
                  item.liked == true
                    ? "favorite fas fa-heart"
                    : "favorite fa-regular fa-heart"
                }" style="color: ${
      item.liked == true ? "red" : ""
    }" onclick="addToFavorite(${item.id})"></i>
            </div>
        </div>
        `;
  });
  productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("productsIn")) || products);

function addedToCart(id) {
    if(localStorage.getItem('username')) {

        let productsIn =
          JSON.parse(localStorage.getItem("productsIn")) || products;

        let product = productsIn.find(item => item.id === id); 
    
        let isProductInCart = addedItems.some((i) => i.id === product.id);

        if (isProductInCart) {
          addedItems = addedItems.map(p => {
            if (p.id === product.id) p.qty += 1;
                return p;
            });
        } else {
          addedItems.push(product);
        };

        cartProductDivDom.innerHTML = "";
           
        addedItems.forEach((item) => {
          cartProductDivDom.innerHTML += `<p class="inCartProduct">${item.title} <span class='item-qty'>${item.qty}</span></p>`;
        });

        localStorage.setItem("products", JSON.stringify(addedItems));

        badgeDom.style.display = 'block';

        badgeDom.innerHTML =  document.querySelectorAll('.carts-products div p').length;

    } else {
        location = 'login.html';
    }
};

function getUniqueArr(arr, filterType) {
    let unique = arr
        .map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter(item => arr[item])
        .map(item => arr[item])

        return unique
}

function saveItemData(id) {
    localStorage.setItem('productId', id);
    location = 'cartDetails.html'
}

// search Function
let input = document.getElementById("search");

input.addEventListener("keyup", (e) => {
    search(e.target.value, JSON.parse(localStorage.getItem('productsIn')));
    if(e.target.value.trim() === '') {
        drawProductsUI(JSON.parse(localStorage.getItem('productsIn')))
    }
})

function search(title, arrOfData) {
    let arr = arrOfData.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr)
}

let favoriteItems = localStorage.getItem("favoriteProduct")
  ? JSON.parse(localStorage.getItem("favoriteProduct"))
  : [];
function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = productsIn.find((item) => item.id === id);
    choosenItem.liked = true;

    favoriteItems = [...favoriteItems, choosenItem];
    let uniqueProducts = getUniqueArr(favoriteItems, "id");
    localStorage.setItem("favoriteProduct", JSON.stringify(uniqueProducts));

    productsIn.map((item) => {
      if (item.id === choosenItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("productsIn", JSON.stringify(productsIn));
    drawProductsUI(productsIn);
  } else {
    location = "login.html";
  }
};


// filter products by size 

let sizeFilter = document.getElementById('size-filter');

sizeFilter.addEventListener('change', getProductFilteredBySize);

function getProductFilteredBySize(e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("productsIn")) || productsIn;

    if(val === 'all') {
        drawProductsUI(products);
    } else {
        products = products.filter((p) => p.size === val);
        drawProductsUI(products);
    }
}
// Edit Product
function editProduct(id) {
    localStorage.setItem('editProduct', id);
    location = 'editProduct.html';
}




