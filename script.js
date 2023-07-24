let gridSectionWidth = 960;
function createGrid(dimensions) {
    let gridWrapper = document.createElement('div')
    gridWrapper.classList.add("gridWrapper");
    for (let i = 0; i < dimensions; i++){
        let row = document.createElement('div');
        for (let k = 0; k < dimensions; k++){
            let elem = document.createElement('div');
            elem.style.width = 960/dimensions.toString() + "px";
            elem.style.height = 960/dimensions.toString() + "px";
            elem.classList.add("square");
            row.appendChild(elem);
            row.classList.add("grid-row");
        }
        gridWrapper.appendChild(row);
    }
    return gridWrapper;
}

function displayGrid(grid){
    let leftSection = document.querySelector('div[class=left]');
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