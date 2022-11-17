const mobileIcon = document.querySelectorAll(".mobile-icon");
const productsPage = document.querySelector(".products");
const calculatorPage = document.querySelector(".calculator");
const checkPage = document.querySelector(".check");
const icons = document.querySelector(".icons");
const iconBar = document.querySelector(".burger-icon");
const productItem = document.querySelectorAll(".product-item");
const tr = document.querySelector("#tbody").querySelectorAll("tr");
const empty = document.querySelector(".empty");

productItem.forEach((item, id) => {
  item.addEventListener("click", () => {
    const title = item.querySelector(".title");
    const cost = item.querySelector(".cost");

    addData = `
      <tr>
        <td>${title.innerHTML}</td>
        <td><input type="number" value="1" min="0" onchange="onChange(0.1)" /></td>
        <td><input type="number" class="large-input" value=${cost.innerHTML} /></td>
        <td><input type="number" class="large-input" value=${cost.innerHTML} disabled /></td>
        <td><a href="#"><i class="fa-solid fa-trash-can"></i></a></td>
      </tr>
    `;

    $(addData).appendTo("#tbody");

    empty.style.display = "none";
  });
});

function onChange(num) {
  $(".total-weight-input").val(
    parseInt($(".total-weight-input").val()) + 10 * num
  );
}

iconBar.addEventListener("click", () => {
  icons.classList.toggle("to-top");
});

mobileIcon.forEach((item, id) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      if (mobileIcon[i] === item) {
        item.classList.add("active");
      } else {
        mobileIcon[i].classList.contains("active")
          ? mobileIcon[i].classList.remove("active")
          : null;
        mobileIcon[i].classList.contains("active")
          ? mobileIcon[i].classList.remove("active")
          : null;
      }
    }

    if (id === 0) {
      productsPage.style.display = "block";
      calculatorPage.style.display = "none";
      checkPage.style.display = "none";
    } else if (id === 1) {
      productsPage.style.display = "none";
      calculatorPage.style.display = "block";
      checkPage.style.display = "none";
    } else {
      productsPage.style.display = "none";
      calculatorPage.style.display = "none";
      checkPage.style.display = "block";
    }
    item.style.transform = "translateX(" - id * 50 + "%)";
  });
});
