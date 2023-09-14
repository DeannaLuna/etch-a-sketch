const boardContainer = document.querySelector(".board");

let boardArray = [];

// function to create div and add to array
function createDiv(){
    const div = document.createElement("div");
    div.classList.add("divContainer")
    div.setAttribute("style", "background: blue; border: solid 1px black");
    boardArray.push(div);
}


// function to add 256 divs to array 
function loopDiv(){
    for (i = 0; i < 256; i++){
        createDiv();
    }
}

// sets colour for div 


// for each to add each div in array to dom. add it to current empty div container
function addToDom(){
    boardArray.forEach(div => boardContainer.appendChild(div));
}

function addDiv(){
    loopDiv();
    addToDom();
}

addDiv();