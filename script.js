let reset = document.querySelector(".reset");
let board = document.querySelector(".board");
let cell = document.createElement("div");

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

    console.log(size);
    return size;
}

reset.addEventListener("click", getSize);


// 'reset' stores the HTML reset button.
// 'board' stores the HTML div that will contain the grid.
// 'cell' creates and stores a new div element. 
// 'getSize' prompts for and returns 'size'.
// 'createGrid' 1. deletes previous grid 2. appends 'size' x 'size' ammount of 'cell' elements into 'board', 3. adds class 'gridItem' to elements. 
// 'styleGrid' function styles every 'cell' element. 
// Click event listener for 'reset'. On click, execute functions 'getSize', 'createGrid' and 'styleGrid'. 
// 'colorGrid' changes the color of every grid element when mouse hovers over it.  
