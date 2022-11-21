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
  $(".plus-icon").hasClass("rotate")
    ? $(".plus-icon").removeClass("rotate")
    : $(".plus-icon").addClass("rotate");
  $(".modal-window").hasClass("show")
    ? $(".modal-window").removeClass("show")
    : $(".modal-window").addClass("show");
  $(".black-window").hasClass("show-black")
    ? $(".black-window").removeClass("show-black")
    : $(".black-window").addClass("show-black");
  $("body").hasClass("overflow")
    ? $("body").removeClass("overflow")
    : $("body").addClass("overflow");
});

$(".calc-icon").click(() => {
  $(".calculator-body").addClass("show_calc");
  $(".black-window").addClass("show-black");
  $("body").addClass("overflow");
});

$(".black-window").click(() => {
  $(".plus-icon").hasClass("rotate")
    ? $(".plus-icon").removeClass("rotate")
    : null;
  $(".calculator-body").removeClass("show_calc");
  $(".bell-modal").removeClass("show");
  $(".comment-modal").removeClass("show");
  $(".modal-window").hasClass("show")
    ? $(".modal-window").removeClass("show")
    : null;
  $(".black-window").removeClass("show-black");
  $("body").removeClass("overflow");
});

let audio = new Audio();
audio.src = "./src/music.mp3";

$(".bell-icon").click(() => {
  audio.play();
  $(".bell-modal").addClass("show");
  $(".black-window").addClass("show-black");
  $("body").addClass("overflow");
});

$(".comment-icon").click(() => {
  audio.play();
  $(".comment-modal").addClass("show");
  $(".black-window").addClass("show-black");
  $("body").addClass("overflow");
});
