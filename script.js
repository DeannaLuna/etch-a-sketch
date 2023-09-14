const boardContainer = document.querySelector(".board");

let boardArray = [];

const div = document.createElement("div");
div.classList.add("divContainer")
div.setAttribute("style", "background: transparent; border: solid 1px black");
boardArray.push(div);



// function to create div and add to array
function createDiv(){
    const div = document.createElement("div");
    div.classList.add("divContainer")
    div.setAttribute("style", "background: transparent; border: solid 1px black");
    boardArray.push(div);
}


// function to add 256 divs to array 
function loopDiv(){
    for (i = 0; i < 255; i++){
        createDiv();
    }
}



// for each to add each div in array to dom. add it to current empty div container
function addToDom(){
    boardArray.forEach(div => boardContainer.appendChild(div));
}

function addDiv(){
    loopDiv();
    addToDom();
    loopColour();
}

addDiv();




// change the div colour
function changeColour(div){
    div.setAttribute("style", "background: green; border: solid 1px black");
}


// add event listner within a for each loop.

function loopColour(){
    boardArray.forEach(div => div.addEventListener("click", () => {
        console.log("hi");
    }))
}