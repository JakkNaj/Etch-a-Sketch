let dimensions = 16;
for (let i = 0; i < dimensions; i++){
    let row = document.createElement('div');
    for (let k = 0; k < dimensions; k++){
        let elem = document.createElement('div');
        elem.style.width = "50px";
        elem.style.height = "50px";
        elem.classList.add("square");
        row.appendChild(elem);
        row.style.display = "flex";
    }
    document.body.appendChild(row);
}