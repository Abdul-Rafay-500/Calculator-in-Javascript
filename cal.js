let btns = document.querySelectorAll(".nums");
let allClear = document.querySelector("#all-clear");
let clear = document.querySelector("#clear");
let equalTo = document.querySelector("#equals-to");
const screen = document.querySelector(".screen");

let locked = false;

const del = () => {
  if (!locked && screen.innerText.length > 0) {
    screen.innerText = screen.innerText.slice(0, -1);
  } else if (!locked) {
    screen.innerText = "";
  }
};

const clearAll = () => {
  screen.innerText = "";
  locked = false;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (locked) return;
    const btnValue = btn.getAttribute("data-value");
    screen.innerText += btnValue;
    screen.style.color = "white";
  });
});

equalTo.addEventListener("click", () => {
  try {
    const expression = screen.innerText;
    const result = eval(expression);
    screen.innerText = result;
    locked = true;
  } catch (error) {
    screen.innerText = "Error";
    locked = true;
  }
});

clear.addEventListener("click", del);
allClear.addEventListener("click", clearAll);
