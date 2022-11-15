// 2D array that will create the playing board with fixed values at this point
const rows = 4;
const cols = 5;
const grid = [
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,0,1],
];

let playerScore = 0;
let bombCount = 0;
let freeSpaceCount = 0;
let board = document.getElementById('board');

function createBoard() { // creates 50px block buttons in relation to the values of 'rows' and 'cols'
    for (let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if (grid[row][col]===1) {
                let bomb = document.createElement('button');
                bomb.className = 'bomb';
                bomb.style.top = row*50 + 'px';
                bomb.style.left = col*50 + 'px';
                board.appendChild(bomb);
                bomb.addEventListener('click', playRound);
                console.log(grid.cellIndex) // Click a square in the grid
                // can we count the amount of bombs here to display?
            } else {
                let freeSpace = document.createElement('button');
                freeSpace.className = 'freeSpace';
                freeSpace.style.top = row*50 + 'px';
                freeSpace.style.left = col*50 + 'px';
                board.appendChild(freeSpace);
                freeSpace.addEventListener('click', playRound); // Click a square in the grid
                // count the amount of freeSpace so we know when we win?
            // }
            }
        }
    }
}

function playRound(e){
    const btnClickedEl = e.target;
    if(btnClickedEl.className === 'bomb'){
        let showAll = document.querySelectorAll('.bomb');

        showAll.forEach(function(el) {
            el.classList.add('blowup'); // If you hit a mine, show all the mine locations in a different color
            el.innerHTML = 'Bye Bye';
           });
        alert ('Game over, try again!');
    } else {
        btnClickedEl.className = 'clicked';
        btnClickedEl.innerHTML = `I'm Alive`;
        console.dir(btnClickedEl)
    }
    render()
}

// Reset button to refresh the page and play again
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', init);

init() 
// Set initial state of game
function init() {
    createBoard();
    render()
}

function render(){

}
// Use randomization so they move each time it is reset

// Display outcome - either a score or a message saying they were blown up


/// Possible functionality:

// Show numbers of how many mines are touching the clicked square
// Pictures for the mines
// Header picture that changes when you hit a mine
// Displaying multiple non bomb squares at once when you 
    // click if there is not a bomb in the grid
// Timer
// Leaderboard that stays for the current session