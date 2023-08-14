let oldUser = localStorage.getItem("username");
let oldEmail = localStorage.getItem("email");

let newUser = document.getElementById("changeName");
let newEmail = document.getElementById("changeEmail");
let newAvatar = document.getElementById("changeImg");
let editProfileForm = document.getElementById("edit-profile-form");
let productImg;


newUser.value = oldUser;
newEmail.value = oldEmail;


newAvatar.addEventListener("change", uploadImage);
editProfileForm.addEventListener('submit', editProfileData)

function editProfileData(e) {
    e.preventDefault()
    localStorage.setItem("username", newUser.value);
    localStorage.setItem("email", newEmail.value);
    localStorage.setItem("userImg", productImg);

    newUser.value = '';
    newEmail.value = '';
    setTimeout(() => {
        location = "profile.html";
    }, 500);
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

