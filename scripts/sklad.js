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
  $("body").toggleClass("overflow-plus");
});

$(".calc-icon").click(() => {
  $(".calculator-body").addClass("show_calc");
  $(".black-window").show();
  $("body").addClass("overflow");
});

$(".black-window").click(() => {
  $(".calculator-body").removeClass("show_calc");
  $(".bell-modal").removeClass("show");
  $(".comment-modal").removeClass("show");
  $(".black-window").hide();
  $("body").removeClass("overflow");
});

let audio = new Audio();
audio.src = "./src/music.mp3";

$(".bell-icon").click(() => {
  audio.play();
  $(".bell-modal").addClass("show");
  $(".black-window").show();
  $("body").addClass("overflow");
});

$(".comment-icon").click(() => {
  audio.play();
  $(".comment-modal").addClass("show");
  $(".black-window").show();
  $("body").addClass("overflow");
});
