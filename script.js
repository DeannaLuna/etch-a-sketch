const boardContainer = document.querySelector(".board");

let boardArray = [];



function createDivArray(){
    const div = document.createElement("div");
    div.classList.add("divContainer")
    div.setAttribute("style", "background: transparent; border: solid 1px black");
    boardArray.push(div);
    boardArray.forEach(div => boardContainer.appendChild(div));
}

// globally add divs to array
for (i = 0; i < 256; i++){
    createDivArray();
}


// change the div colour
function changeColour(div){
    div.setAttribute("style", "background: green; border: solid 1px black");
}


// add event listner within a for each loop.
function loopColour(){
    boardArray.forEach(div => div.addEventListener("mouseover", () => {
        changeColour(div);
    }))
}

loopColour();