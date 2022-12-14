// 2D array that will create the playing board with fixed values
const rows = 4;
const cols = 5;
const grid = [
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0],
]

let freeSpace;
let bomb;
let display;
let outcome = '';
let board = document.getElementById('board');

function createBoard() { // creates 50px block buttons in relation to the values of 'rows' and 'cols'
    board.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if (grid[i][j]===1) {
                bomb = document.createElement('button');
                bomb.className = 'bomb';
                bomb.style.top = i*50 + 'px';
                bomb.style.left = j*50 + 'px';
                board.appendChild(bomb);
                bomb.addEventListener('click', playRound); // Click a square in the grid
                display.minesRemaining += 1;
            } else {
                freeSpace = document.createElement('button');
                freeSpace.className = 'freeSpace';
                freeSpace.style.top = i*50 + 'px';
                freeSpace.style.left = j*50 + 'px';
                board.appendChild(freeSpace);
                freeSpace.addEventListener('click', playRound);  // Click a square in the grid
                display.spacesRemaining += 1;
            }
        }
    }
}

function playRound(e){
    const btnClickedEl = e.target;
    if(btnClickedEl.className === 'bomb'){
        let showAll = document.querySelectorAll('.bomb');
        let endGame = document.querySelectorAll('.freeSpace')
        
        endGame.forEach(function(el) {
            el.removeEventListener('click', playRound)
        })
        
        showAll.forEach(function(el) {
            el.innerHTML="<img src='img/bomb.png' />";
            el.classList.add('blowup'); // If you hit a mine, show all the mine locations in a different color/image
            el.removeEventListener('click', playRound)
           });
        
        displayEls.outcome.innerHTML = "You went boom :("
        return;
    } else {
        btnClickedEl.className = 'clicked';
        if (btnClickedEl.className = 'clicked') btnClickedEl.removeEventListener('click', playRound)
    }

    display.score += 1
    display.spacesRemaining -= 1
    render()
}

const displayEls = {
    score: document.querySelector('#p-score'),
    minesRemaining: document.querySelector('#mines-num'),
    spacesRemaining: document.querySelector('#spaces-num'),
    outcome: document.querySelector('#p-outcome')
}

// Reset button to refresh the page and play again
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', init);

init() 
// Set initial state of game
function init() {
    
    display = {
        score: 0,
        minesRemaining: 0,
        spacesRemaining: 0,
        outcome: ''
    };
    
    createBoard();
    render()
}

function render(){
    displayEls.score.innerText = display.score;
    displayEls.minesRemaining.innerText = display.minesRemaining;
    displayEls.spacesRemaining.innerText = display.spacesRemaining;

    if(display.spacesRemaining === 0) {
        displayEls.outcome.innerText = 'You Win!';
    }  else if (display.score === 0) {
        displayEls.outcome.innerText = 'If you hit a mine, you go boom!';
    } else {
      displayEls.outcome.innerText = 'Watch out for that mine!';
    } 
}