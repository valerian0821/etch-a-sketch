
function createSquares() {
    for (let i = 0; i < (16 * 16); i++) {
        squaresArray.push(document.createElement("div"));
    }
}

function addClass() {
    for (let i = 0; i < (16 * 16); i++) {
        squaresArray[i].classList.add("default-square");
    }
}

function printSquares() {
    for (let i = 0; i < (16 * 16); i++) {
        container.appendChild(squaresArray[i]);
    }
}

function activateSquares() {
    for (let i = 0; i < (16 * 16); i++) {
        squaresArray[i].addEventListener("mouseenter", () => {
            squaresArray[i].classList.add("background-color");
        });
    }
}

function createHover(i) {
    // squaresArray[i].classList.add("default-square:hover");
    squaresArray[i].classList.add("background-color");
}

const container = document.querySelector("#container");
let squaresArray = [];
createSquares();
addClass();
printSquares();
activateSquares();