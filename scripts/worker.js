const products = document.querySelectorAll(".product-cart");

products.forEach((product) => {
  const addBtn = product.querySelector("button");
  addBtn.addEventListener("click", () => {
    const title = product.querySelector(".product-name");
    const cost = product.querySelector(".product-cost").querySelector("span");

    addData = `
      <tr>
        <td>${title.innerHTML}</td>
        <td><input type="number" value="1" min="0" /></td>
        <td><input type="number" class="large-input" value="${parseFloat(
          cost.innerHTML
        )}" disabled /></td>
        <td><a href="#"><i class="fa-solid fa-trash-can"></i></a></td>
      </tr>
    `;

    $(addData).appendTo("#tbody2");

    $(".empty-message").css({ display: "none" });
  });
});

$(".btn-success").click(() => {
  $(".modal-window1").addClass("show-modal1");
  $(".black-window").addClass("show-black");
});

$(".black-window").click(() => {
  $(".modal-window1").removeClass("show-modal1");
  $(".black-window").removeClass("show-black");
});
