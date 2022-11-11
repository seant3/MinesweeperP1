// 2D array that will create the playing board
const grid = [
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0]
];

let display;

init() 
// Set initial state of game
function init() {
    display = {
        mines: 10,
        score: 0
    }
}
// Use randomization so they move each time it is reset

// Click a square in the grid

// Check outcomes of the clicked square - blown up or keep going
// If you hit a mine, show all the mine locations in a different color


// Reset button to refresh the page and play again

// Display outcome - either a score or a message saying they were blown up


/// Possible functionality:

// Show numbers of how many mines are touching the clicked square
// Pictures for the mines
// Header picture that changes when you hit a mine
// Displaying multiple non bomb squares at once when you 
    // click if there is not a bomb in the grid
// Timer
// Leaderboard that stays for the current session