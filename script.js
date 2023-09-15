const boardContainer = document.getElementById("board");
const button = document.querySelector(".btn");
const emptyDiv = document.querySelector(".divContainer");

let boardArray = [];
let userInput = 256;
let size = 16;


function createDivArray(){
    const div = document.createElement("div");
    div.classList.add("divContainer")
    div.setAttribute("style", "background: transparent; border: solid 0.5px black");
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
function changeColour(div){
    div.setAttribute("style", "background: black; border: solid 1px black");
}


// add event listner within a for each loop.
function loopColour(){
    boardArray.forEach(div => div.addEventListener("mouseover", () => {
        changeColour(div);
    }))
}

loopColour();


// prompt for new board size
function promptUser(){
    while (true) {
        input = prompt("Enter size:")
        if (input > 4 && input < 100){
            size = input;
            clearArray(input);
            break;
        }
        else {
            alert("Please enter a valid number between 4 and 100.")
            continue;
        }
    }
    return input;
}




// empty array and reassign new input length
function clearArray(input){
    boardArray.length = 0;
    userInput = input * input;
    for (i = 0; i < userInput; i++){
        createDivArray();
    }
}


// function clearColour(div){
//     div.setAttribute("style", "background: transparent; border: solid 1px black");
// }



button.addEventListener("click", function(){
    promptUser();
    sizeBoard();
    loopColour();
})

