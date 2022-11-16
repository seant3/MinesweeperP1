// 2D array that will create the playing board with fixed values at this point
const rows = 4;
const cols = 5;
const grid = [
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0],
];

let display;
let outcome;
// let bombCount = 0;
// let freeSpaceCount = 0;
let board = document.getElementById('board');


function createBoard() { // creates 50px block buttons in relation to the values of 'rows' and 'cols'
    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if (grid[i][j]===1) {
                let bomb = document.createElement('button');
                bomb.className = 'bomb';
                bomb.style.top = i*50 + 'px';
                bomb.style.left = j*50 + 'px';
                board.appendChild(bomb);
                bomb.addEventListener('click', playRound); // Click a square in the grid
                // can we count the amount of bombs here to display?
            } else {
                let freeSpace = document.createElement('button');
                freeSpace.className = 'freeSpace';
                freeSpace.style.top = i*50 + 'px';
                freeSpace.style.left = j*50 + 'px';
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
        btnClickedEl.innerHTML = 1;
        // let countMines = 0;
        // let rowIndex = grid[rows]
        // let colIndex = grid[cols]
        // for(i = 0; i < 3; i++) {
        //     for(j = 0; j < 3; j++) {

        //     }
        // }
        // console.dir(btnClickedEl)
    }
    display.score += 1

    render()
}

const displayEls = {
    score: document.querySelector('#p-score'),
    mines_remaining: document.querySelector('#mines_num'),
    spaces_remaining: document.querySelector('#spaces_num')
}

// Reset button to refresh the page and play again
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', init);

init() 
// Set initial state of game
function init() {
    createBoard();

    display = {
        score: 0,
        mines_remaining: 0,
        spaces_remaining: 0
    };

    outcome = null;
    render()
}

function render(){
    displayEls.score.innerText = display.score;
    displayEls.mines_remaining.innerText = display.mines_remaining;
    displayEls.spaces_remaining.innerText = display.spaces_remaining;
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