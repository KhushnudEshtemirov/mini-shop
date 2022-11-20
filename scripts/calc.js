document.getElementById("answer").readOnly = true; //set this attribute in Html file
let screen = document.getElementById("answer");
buttons = document.querySelectorAll(".same-btn");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      checkForBracketMulti(); // automatically evaluates if no brackets
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

$(".backspace").click(() => {
  screenValue = screenValue.slice(0, -1);
  screen.value = screenValue;
});

document.addEventListener("keydown", function (event) {
  if (event.shiftKey == 57) {
    event.key = "(";
  } else if (event.shiftKey == 48) {
    event.key = ")";
  }
  if (event.keyCode == 88) {
    screenValue += "*";
    screen.value = screenValue;
  }
  if (
    event.key <= 9 ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "." ||
    event.key == "/" ||
    event.key == "(" ||
    event.key == ")"
  ) {
    screenValue += event.key;
    screen.value = screenValue;
  }
  if (event.keyCode == 13 || event.keyCode == 187) {
    checkForBracketMulti(); // automatically evaluates if no brackets
  } else if (event.keyCode == 46) {
    screenValue = "";
    screen.value = screenValue;
    console.clear();
  } else if (event.keyCode == 8) {
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
  } else if (event.keyCode == 67) {
    screenValue = "";
    screen.value = screenValue;
    console.clear();
  } else if (event.keyCode == 82) {
    location.reload();
  }
});

window.onerror = function () {
  alert("Noto'g'ri format kiritildi!");
  screenValue = "";
  screen.value = screenValue;
  console.clear();
};

window.onBracketMultiplication = function () {
  screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
  screen.value = eval(screenValue);
};

function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}

function checkForBracketMulti() {
  if (
    screen.value.includes("(") &&
    !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
  ) {
    window.onBracketMultiplication();
    return;
  } else {
    screen.value = eval(screenValue);
  }
}
