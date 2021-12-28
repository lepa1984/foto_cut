let img1 = document.querySelector(".cut__img-1");
let img2 = document.querySelector(".cut__img-2");
window.addEventListener("scroll", (e) => {
    img1.style.left = -window.pageYOffset + "px";
    img2.style.left = window.pageYOffset + "px";
});
