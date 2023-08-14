let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createFrom = document.getElementById("create-form");
let inputFile = document.getElementById("uploadImgFile");
let productSizeValue;
let productImg;

productSizeSelect.addEventListener('change', getProductSizeValue);
createFrom.addEventListener('submit', createProductFunc)
inputFile.addEventListener("change", uploadImage);

function getProductSizeValue(e) {
    productSizeValue = e.target.value;
}   
function createProductFunc(e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("productsIn")) || products;
    let nameValue = productName.value;
    let descValue = productDesc.value;

    if (nameValue && descValue) {
      let obj = {
        id: allProducts ? allProducts.length + 1 : 1,
        title: nameValue,
        size: productSizeValue,
        qty: 1,
        imageUrl: productImg,
        desc: descValue,
        isMe: 'Y',
      };

      let newProducts = allProducts ? [...allProducts, obj] : [obj];
      localStorage.setItem("productsIn", JSON.stringify(newProducts));

      productName.value = "";
      productDesc.value = "";
      productSizeSelect.value = "";
      inputFile.value = "";

      setTimeout(()=>{
            location = 'index.html'
      }, 500);

    } else {
      alert("Enter data");
    }
}

function uploadImage() {
    let file = this.files[0]
    getImageBase64(file);
    let types = ["image/jpeg", "image/png"];

    if(types.indexOf(file.type) == -1) {
        alert('Type not supported');
        return;
    }

    if(file.size > 2 * 1024 * 1024) {
        alert('Image not Exced 2MG');
        return;
    }

    // productImg = URL.createObjectURL(file);
}
function getImageBase64(file) {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        productImg = reader.result;
    }
    reader.onerror = () => {
        alert('Error!!')
    }
}