const menuItem = document.querySelectorAll(".menu-item");
const menuItems = document.querySelector(".menu-items");
const pages = document.querySelector(".pages").querySelectorAll(".tab");
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

    menuItems.classList.toggle("show-sklad");
  });
});

barIcon.addEventListener("click", () => {
  menuItems.classList.toggle("show-sklad");
});

$(".plus-icon").click(() => {
  $(".plus-icon").hasClass("rotate")
    ? $(".plus-icon").removeClass("rotate")
    : $(".plus-icon").addClass("rotate");
  $(".modal-window").hasClass("show-sklad")
    ? $(".modal-window").removeClass("show-sklad")
    : $(".modal-window").addClass("show-sklad");
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
  $(".bell-modal").removeClass("show-sklad");
  $(".comment-modal").removeClass("show-sklad");
  $(".modal-window").hasClass("show-sklad")
    ? $(".modal-window").removeClass("show-sklad")
    : null;
  $(".black-window").removeClass("show-black");
  $("body").removeClass("overflow");
});

let audio = new Audio();
audio.src = "./src/music.mp3";

$(".bell-icon").click(() => {
  audio.play();
  $(".bell-modal").addClass("show-sklad");
  $(".black-window").addClass("show-black");
  $("body").addClass("overflow");
});

$(".comment-icon").click(() => {
  audio.play();
  $(".comment-modal").addClass("show-sklad");
  $(".black-window").addClass("show-black");
  $("body").addClass("overflow");
});
