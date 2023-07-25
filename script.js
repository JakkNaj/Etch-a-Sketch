let gridSectionWidth = 500;
let gridSectionHeight = 500;
let defaultColor = "#FF8B3D";

let mouseDown = 0;
document.querySelector(".gridSection").onmousedown = function () {
    mouseDown++;
}
document.querySelector(".gridSection").onmouseup = function () {
    mouseDown--;
}

function styleGridElem(elem, dimensions){
    elem.style.width = gridSectionWidth/dimensions.toString() + "px";
    elem.style.height = gridSectionHeight/dimensions.toString() + "px";
    elem.classList.add("square");
    return elem;
}

function createGrid(dimensions) {
    let gridWrapper = document.createElement('div')
    gridWrapper.classList.add("gridWrapper");
    for (let i = 0; i < dimensions; i++){
        let row = document.createElement('div');
        for (let k = 0; k < dimensions; k++){
            let elem = document.createElement('div');
            row.appendChild(styleGridElem(elem, dimensions));
            row.classList.add("grid-row");
        }
        gridWrapper.appendChild(row);
    }
    return gridWrapper;
}

function displayGrid(grid){
    let leftSection = document.querySelector('div[class=gridSection]');
    leftSection.width = gridSectionWidth;
    leftSection.innerHTML = grid.innerHTML;
}

//make 16 by 16 for the beginning
displayGrid(createGrid(16));


let adjustButton = document.getElementById("adjustBtn");
adjustButton.addEventListener("click", () => {
    let newDimensions = prompt("Please enter new grid dimensions!");
    if (newDimensions != null){
        if (newDimensions > 100 || newDimensions <= 0) {
            newDimensions = prompt("please enter dimensions between 1 - 100!");
        }
        displayGrid(createGrid(newDimensions));
    }
})

let colorButton = document.getElementById("colorBtn");
colorButton.addEventListener("click", () => {
    defaultColor = document.querySelector("input[type=color]").value;
})

let colorChanger = document.querySelector(".colorpicker ");
colorChanger.addEventListener("input", () => {
    defaultColor = document.querySelector("input[type=color]").value;
})

let gridSquares = document.querySelectorAll(".square");
gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (mouseDown > 0) {
            square.style.backgroundColor = defaultColor;
        }
    })
})

let clearButton = document.getElementById("clearBtn");
clearButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach( (square) => {
        square.style.backgroundColor = "white";
    })
})

