
function createSquares() {
    for (let i = 0; i < (size ** 2); i++) {
        squaresArray.push(document.createElement("div"));
    }
}

function addClass() {
    for (let i = 0; i < (size ** 2); i++) {
        squaresArray[i].classList.add("default-square");
    }
}

function printSquares() {
    for (let i = 0; i < (size ** 2); i++) {
        container.appendChild(squaresArray[i]);
    }
}

function activateSquares() {
    for (let i = 0; i < (size ** 2); i++) {
        squaresArray[i].addEventListener("mouseenter", function abc(event) {
            squaresArray[i].classList.add("background-color");
        });
    }
}

function createButton() {
    const inputButton = document.createElement("button");
    inputButton.setAttribute("id", "input-button");
    inputButton.textContent = "Re-Size Grid";
    body.insertBefore(inputButton, title);
}

function activateButton() {
    let inputButton = document.querySelector("#input-button");
    inputButton.addEventListener("click", reSizeGrid); 
}

function getValidSize() {
    let input = prompt("Number of Squares per Size for New Grid:");
    let validInput = false;
    while (validInput == false) {
        if (!isNaN(input) && Number.isInteger(Number(input)) && input >= 1 && input <= 100) {
            validInput = true;
        } else {
            input = prompt("Input is not valid. Please try again.");
        }
    }
    size = Number(input);
}

// function deactivateSquares() {
//     for (let i = 0; i < (size ** 2); i++) {
//         squaresArray[i].removeEventListener("mouseenter", abc);
//     }
// }

function deleteSquares() {
    for (let i = 0; i < (size ** 2); i++) {
        container.removeChild(squaresArray[i]);
    }
}

function deleteArray() {
    for (let i = 0; i < (size ** 2); i++) {
        squaresArray.pop();
    }
}

function changeSize() {
    cssLength = Math.floor(canvasSize / size);
    for (let i = 0; i < (size ** 2); i++) {
        squaresArray[i].setAttribute("style", `width: ${cssLength}px; height: ${cssLength}px;`);
    }
}

function reSizeCanvas() {
    canvasSize = cssLength * size;
    container.setAttribute("style", `width: ${canvasSize}px; height: ${canvasSize}px;`);
}

function initializeGrid() {
    createSquares();
    addClass();
    printSquares();
    activateSquares();
    createButton();
    activateButton();
}

function reSizeGrid() {
    // deactivateSquares();
    deleteSquares();
    deleteArray();
    getValidSize();
    createSquares();
    changeSize();
    reSizeCanvas();
    addClass();
    printSquares();
    activateSquares();
}

const body = document.querySelector("body");
const title = document.querySelector("#title");
const container = document.querySelector("#container");
let canvasSize = 704;
let size = 16;
let cssLength = (704 / 16);
let squaresArray = [];
initializeGrid();
