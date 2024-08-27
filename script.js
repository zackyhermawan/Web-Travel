// menambahkan navbar blur
const changeColor = () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY >= 50 ? navbar.classList.add("change-color") : navbar.classList.remove("change-color");
};
window.addEventListener("scroll", changeColor);

// untuk hamburger menu
const navLink = document.querySelector(".nav-link");
// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navLink.classList.toggle("active");
};

// agar bisa di menutup sidebar/di klik di mana saja
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika hamburger di klik
hamburgerMenu.onclick = () => {
  navLink.classList.toggle("active");
};

// Agar bisa menutup sidebar/di klik di mana saja
document.addEventListener("click", function (event) {
  if (!hamburgerMenu.contains(event.target) && !navLink.contains(event.target)) {
    navLink.classList.remove("active");
  }
});

hamburgerMenu.addEventListener("click", function (event) {
  // Cegah tindakan default jika hamburger menu adalah elemen <a> atau tombol dengan link
  const navbar = document.querySelector(".navbar");

  event.preventDefault();
  // Toggle class 'active' pada navbar untuk menampilkan atau menyembunyikan
  navbar.classList.toggle("active");
});

// play/pause video
let video = document.querySelector(".video-wrapper video");
document.getElementById("play-btn").addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// // popup gallery page
// const galleryImage = document.getElementsByClassName("image");
// // create element for lightbox
// const lightBoxContainer = document.createElement("div");
// // for basic area
// const lightBoxContent = document.createElement("div");
// // for images
// const lightBoxImg = document.createElement("div");
// // for prev button to change images
// const lightBoxPrev = document.createElement("div");
// // for next button
// const lightBoxNext = document.createElement("div");

// // create classlist
// lightBoxContainer.classList.add("lightbox");
// lightBoxContent.classList.add("lightbox-content");
// lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
// lightBoxNext.classList.add('fa", "fa-angle-right","lightbox-next');

// lightBoxContainer.appendChild(lightBoxContent);
// lightBoxContent.appendChild(lightBoxImg);
// lightBoxContent.appendChild(lightBoxPrev);
// lightBoxContent.appendChild(lightBoxNext);
// document.body.appendChild(lightBoxContainer);

// let index = 1;

// // create function
// function showLightBox(n) {
//   if (n > galleryImage.length) {
//     index = 1;
//   } else if (n < 1) {
//     index = galleryImage.length;
//   }

//   let imageLocation = galleryImage[index - 1].children[0].getAttribute("src");
//   lightBoxImg.setAttribute("src", imageLocation);
// }

// function currentImage() {
//   lightBoxContainer.style.display = "block";

//   let imageIndex = parseInt(this.getAttribute("data-index"));
//   showLightBox((index = imageIndex));
// }

// for (let i = 0; i < galleryImage.length; i++) {
//   galleryImage[i].addEventListener("click", currentImage);
// }

// function sliderImage(n) {
//   showLightBox((index += n));
// }

// function prevImage() {
//   sliderImage(-1);
// }

// function nextImage() {
//   sliderImage(1);
// }

// lightBoxPrev.addEventListener("click", prevImage);
// lightBoxNext.addEventListener("click", nextImage);

// // close lightbox
// function closeLightBox() {
//   if (this === event.target) {
//     lightBoxContainer.style.display = "none";
//   }
// }

// lightBoxContainer.addEventListener("click", closeLightBox);
