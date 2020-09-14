"use strict";

const image = document.getElementById("imageCover");
const left = document.getElementById("left");
const right = document.getElementById("right");
const toolbox = document.getElementById("toolbox");
let count = 0;
let listImages = ["./images/bg.jpg", "./images/images.jpg"];

right.addEventListener("click", () => {
  scrollImage(1);
});
left.addEventListener("click", () => {
  scrollImage(-1);
});

function scrollImage(syn) {
  if (syn > 0) {
    if (count === listImages.length - 1) {
      count = 0;
    } else {
      count += syn;
    }
  } else {
    if (count == 0) {
      count = listImages.length - 1;
    } else {
      count += syn;
    }
  }
  image.style.backgroundImage = `url('${listImages[count]}')`;
  document.getElementsByClassName("active")[0].classList.remove("active");
  toolbox.children[count].className = "active";
}

setInterval(() => {
  scrollImage(1);
}, 2000);
