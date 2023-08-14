let productsBe = JSON.parse(localStorage.getItem('productsIn')) || products;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = productsBe.find((i) => i.id === productId);

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let updateFrom = document.getElementById("update-form");
let inputFile = document.getElementById("uploadImgFile");
let productSizeValue;
let productImg;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImg = getProduct.imageUrl

productSizeSelect.addEventListener("change", getProductSizeValue);
updateFrom.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);

function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}
function updateProductFun(e) {
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeSelect.value;
    getProduct.imageUrl = productImg;

    localStorage.setItem("productsIn", JSON.stringify(productsBe));

    setTimeout(() => {
        location = 'index.html'
    }, 500)
}

function uploadImage() {
  let file = this.files[0];
  getImageBase64(file);
  let types = ["image/jpeg", "image/png"];

  if (types.indexOf(file.type) == -1) {
    alert("Type not supported");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image not Exced 2MG");
    return;
  }

  // productImg = URL.createObjectURL(file);
}
function getImageBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    productImg = reader.result;
  };
  reader.onerror = () => {
    alert("Error!!");
  };
}
