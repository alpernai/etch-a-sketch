let reset = document.querySelector(".reset");
let board = document.querySelector(".board");
let gridSize;

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

    gridSize = size;
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell); 
        }

        board.appendChild(row);
    }
}

// 'reset' stores the HTML reset button.
// 'board' stores the HTML div that will contain the grid.
// 'row' creates and stores a new div element. 
// 'cell' creates and stores a new div element. 
// 'gridSize' will store the input of getSize. 
// 'getSize' prompts user for input and returns 'size'.
// 'createGrid' deletes previous grid and appends 'size' ammount of 'row' elements into 'board' and 'size' ammount of 'cell' elements into every 'row'. 
// 'styleGrid' function styles every 'cell' element. 
// 'colorGrid' changes the color of every grid element.
// Click event listener for 'reset'. On click, execute functions 'getSize', 'createGrid' and 'styleGrid'. 
// Hover event listener for grid elements that executes 'colorGrid'.
