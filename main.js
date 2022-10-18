let color = "black";
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
let click = true;
let colorChoice = document.querySelector(".colorChoice");

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr`;

  let sizing = size * size;

  for (let i = 0; i < sizing; i++) {
    let square = document.createElement("div");

    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 60) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
  // let colorPicker = document.querySelector(".colorPicker");
  if (click) {
    if (color === "random") {
      this.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    } else if (color === "picker") {
      this.style.backgroundColor = colorChoice.value;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Drawing enabled";
    } else {
      document.querySelector(".mode").textContent = "Drawing disabled";
    }
  }
});
