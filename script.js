const boardContainer = document.getElementById("board");
const button = document.querySelector(".size");
const emptyDiv = document.querySelector(".divContainer");
const clearButton = document.querySelector(".clear");
const random = document.querySelector(".random");
const white = document.querySelector(".white");
const black = document.querySelector(".black");

let boardArray = [];
let userInput = 256;
let size = 16;
let rgb = "rgb(255, 255, 255)"

function createDivArray(){
    const div = document.createElement("div");
    div.classList.add("divContainer")
    //div.style.background = "transparent";
    boardArray.push(div);
    boardArray.forEach(div => boardContainer.appendChild(div));
}

function sizeBoard(){
    boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boardContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
sizeBoard();


// globally add divs to array
for (i = 0; i < userInput; i++){
    createDivArray();
}


// change the div colour
function changeColour(div, selectedColor){
    div.style.background = selectedColor;
}


// add event listner within a for each loop.
function loopColour(color){
    boardArray.forEach(div => div.addEventListener("mouseover", () => {
        changeColour(div, color);
    }))
}

loopColour(rgb);

// prompt for new board size
function promptUser(){
    while (true) {
        input = prompt("Enter size:")
        if (input > 4 && input < 100){
            size = input;
            //clearColour();
            clearArray(input);
            break;
        }
        else {
            alert("Please enter a valid number between 4 and 100.")
        }
    }
    return input;
}


// while there are divs in container
// remove the first div
// until there are no divs
function removeDiv(){
    while (boardContainer.hasChildNodes()){
        boardContainer.removeChild(boardContainer.firstChild)
    }
}

// empty array and reassign new input length
function clearArray(input){
    removeDiv();
    boardArray.length = 0;
    userInput = input * input;
    for (i = 0; i < userInput; i++){
        createDivArray();
    }
}

function clearColour(){
    //emptyDiv.removeAttribute("style");
    boardArray.forEach(div => div.style.background = "transparent");
}



button.addEventListener("click", function(){
    promptUser();
    sizeBoard();
    loopColour();
})


clearButton.addEventListener("click", function(){
    clearColour();
})

function rainbowColour(){
    boardArray.forEach(div => div.addEventListener("mouseover", () => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        rgb = `rgb(${x}, ${y}, ${z})`;
        changeColour(div, rgb);
    }))
}


random.addEventListener("click", function(){
    rainbowColour();
})



function whiteButton(){
    rgb = "rgb(255, 255, 255)"
    loopColour(rgb);
}


white.addEventListener("click", function(){
    whiteButton();
})


function blackButton(){
    rgb = "rgb(0, 0, 0)"
    loopColour(rgb);
}

black.addEventListener("click", function(){
    blackButton();
})