let gridSectionWidth = 500;
let gridSectionHeight = 500;
let defaultColor = "#FF8B3D";
let rainbowMode = false;
let eraserMode = false;
let colorMode = true;

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
            //border fix
            if (k === dimensions - 1){
                elem.classList.add("last-column");
            }
        }
        //border fix
        if (i === dimensions - 1){
            row.classList.add("last-row");
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
    addEventListenersToSquares();
})

//give squares event listeners
function addEventListenersToSquares() {
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", () => {
            // color mode
            if (mouseDown > 0 && colorMode) {
                square.style.backgroundColor = defaultColor;
            }

            //rainbow mode
            if (mouseDown > 0 && rainbowMode) {
                square.style.backgroundColor = getRandColor();
            }

            //eraser mode
            if (mouseDown > 0 && eraserMode) {
                square.style.backgroundColor = "white";
            }
        })
    })
}
addEventListenersToSquares();

//COLOR BUTTON
let colorButton = document.getElementById("colorBtn");
colorButton.addEventListener("click", () => {
    rainbowMode = false;
    eraserMode = false;
    colorMode = true;
    defaultColor = document.querySelector("input[type=color]").value;
    resetButtonsBackground();
    colorButton.style.backgroundColor = "darkorange";
})
colorButton.click();

//COLOR PICKER
let colorChanger = document.querySelector(".colorpicker ");
colorChanger.addEventListener("input", () => {
    defaultColor = document.querySelector("input[type=color]").value;
})

function getRandColor() {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}
//RAINBOW BUTTON
let rainbowButton = document.getElementById("rainbowBtn");
rainbowButton.addEventListener("click", () => {
    eraserMode = false;
    colorMode = false;
    rainbowMode = true;
    resetButtonsBackground();
    rainbowButton.style.backgroundColor = "darkorange";
})

//ERASER BUTTON
let eraserBtn = document.getElementById("eraserBtn");
eraserBtn.addEventListener("click", () => {
    rainbowMode = false;
    colorMode = false;
    eraserMode = true;
    resetButtonsBackground();
    eraserBtn.style.backgroundColor = "darkorange";
})

//CLEAR BUTTON
let clearButton = document.getElementById("clearBtn");
clearButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach( (square) => {
        square.style.backgroundColor = "white";
    })
})

function resetButtonsBackground() {
    document.querySelectorAll("button").forEach((button) => {
        button.style.backgroundColor = "white";
    })
}