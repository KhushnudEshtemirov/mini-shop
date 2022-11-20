const menuItem = document.querySelectorAll(".menu-item");
const menuItems = document.querySelector(".menu-items");
const pages = document.querySelector(".pages").querySelectorAll("div");
const barIcon = document.querySelector(".mobile-version");

menuItem.forEach((item, id) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < menuItem.length; i++) {
      if (i === id) {
        pages[i].style.display = "block";
        menuItem[i].classList.add("active");
      } else {
        pages[i].style.display = "none";
        menuItem[i].classList.contains("active")
          ? menuItem[i].classList.remove("active")
          : null;
      }
    }

    menuItems.classList.toggle("show");
  });
});

barIcon.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});

$(".plus-icon").click(() => {
  $(".plus-icon").toggleClass("rotate");
  $(".modal-window").toggleClass("show");
  $(".products").toggleClass("overflow");
});

$(".calc-icon").click(() => {
  $(".calculator-body").toggleClass("show_calc");
  $(".black-window").show();
});

$(".black-window").click(() => {
  $(".calculator-body").toggleClass("show_calc");
  $(".black-window").hide();
});

let audio = new Audio();
audio.src = "./src/music.mp3";

$(".bell-icon").click(() => {
  audio.play();
});
