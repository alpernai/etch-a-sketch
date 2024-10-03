let reset = document.querySelector(".reset");
let board = document.querySelector(".board");

function getSize(){
    let size;
    
    do {
        size = prompt("Please select an integer from 1 - 100");

        if (size === null){ 
            return null;
        }

        size = Number(size);

        if (isNaN(size) || size < 1 || size > 100 || !Number.isInteger(size)) {
            alert("Invalid input. Please choose an integer between 1 - 100")
        }

    } while (isNaN(size) || size < 1 || size > 100 || !Number.isInteger(size));

    createGrid(size);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
  }

function createGrid(size) {
    board.innerHTML = ''; 
    
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            let cellSize = 600 / size; 
            cell.style.height = `${cellSize}px`
            cell.style.width = `${cellSize}px`
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getRandomColor();
            });
            row.appendChild(cell); 
        }

        board.appendChild(row);
    }
}

createGrid(16);
reset.addEventListener("click", getSize);

