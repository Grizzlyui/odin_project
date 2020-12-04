function playerSelection() {
    console.log('Choose your weapon:');
    console.log('1. Rock');
    console.log('2. Paper');
    console.log('3. Scissors');
    let choice = prompt('Choice: ')    
    let player_choice = '';
    switch (choice) {
        case 1:
        case 'R':
        case 'Rock':
        case 'r':
        case 'rock':
            player_choice = 'Rock';
            break;
        case 2: 
        case 'P':
        case 'Paper':
        case 'p':
        case 'paper':
            player_choice = 'Paper';
            break;
        case 3:
        case 'S':
        case 'Scissors':
        case 's':
        case 'scissors':
            player_choice = 'Scissors';
            break;
    } 
    return player_choice;
};


function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    let comp = '';
    switch (num) {
        case 1:
            comp = 'Rock';
            break;
        case 2: 
            comp = 'Paper';
            break;
        case 3:
            comp = 'Scissors';
            break;
    }    
    return comp;
};


function playRound() {
    let player = playerSelection();
    let computer = computerPlay();
    if (player === 'Rock' && computer === 'Scissors') {
        console.log(`Computer played ${computer}`)
        console.log('You Win!')
    } else if (player === 'Rock' && computer === 'Paper') {
        console.log(`Computer played ${computer}`)
        console.log('You Lose!')   
    } else if (player === 'Rock' && computer === 'Rock') {
        console.log(`Computer played ${computer}`)
        console.log('Tie Game.')   
    } else if (player === 'Paper' && computer === 'Scissors') {
        console.log(`Computer played ${computer}`)
        console.log('You Lose.')   
    } else if (player === 'Paper' && computer === 'Paper') {
        console.log(`Computer played ${computer}`)
        console.log('Tie Game.')   
    } else if (player === 'Paper' && computer === 'Rock') {
        console.log(`Computer played ${computer}`)
        console.log('You Win!')   
    } else if (player === 'Scissors' && computer === 'Scissors') {
        console.log(`Computer played ${computer}`)
        console.log('Tie Game.')   
    } else if (player === 'Scissors' && computer === 'Paper') {
        console.log(`Computer played ${computer}`)
        console.log('You Win!')   
    } else if (player === 'Scissors' && computer === 'Rock') {
        console.log(`Computer played ${computer}`)
        console.log('You Lose.')   
    }
};


function game() {
    for (let round = 0; round < 4; round++) {
        playRound()
    }
};

