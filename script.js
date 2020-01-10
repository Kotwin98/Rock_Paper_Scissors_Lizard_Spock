const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lizard = document.querySelector('#lizard');
const spock = document.querySelector('#spock');

const output = document.querySelector('#round-output');
const playerCounter = document.querySelector('#player-sc');
const pcCounter = document.querySelector('#pc-sc');
let playerScore = 0;
let pcScore = 0;

function computerMove(){
    return Math.round(Math.random() * 4) + 1;
}


function playerMove(playerMove){
    const pcMove = computerMove();
    console.log(pcMove);
    if(playerMove == "rock" && pcMove == 1){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "rock" && pcMove == 2){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "rock" && pcMove == 3){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "rock" && pcMove == 4){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "rock" && pcMove == 5){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } 
    else if(playerMove == "paper" && pcMove == 1){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "paper" && pcMove == 2){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "paper" && pcMove == 3){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "paper" && pcMove == 4){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "paper" && pcMove == 5){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } 
    else if(playerMove == "scissors" && pcMove == 1){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "scissors" && pcMove == 2){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "scissors" && pcMove == 3){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "scissors" && pcMove == 4){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "scissors" && pcMove == 5){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } 
    else if(playerMove == "lizard" && pcMove == 1){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "lizard" && pcMove == 2){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "lizard" && pcMove == 3){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "lizard" && pcMove == 4){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "lizard" && pcMove == 5){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } 
    else if(playerMove == "spock" && pcMove == 1){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "spock" && pcMove == 2){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "spock" && pcMove == 3){
        output.innerHTML = 'YOU WON THIS ROUND';
        playerCounter.innerHTML = ++playerScore;
    } else if(playerMove == "spock" && pcMove == 4){
        output.innerHTML = 'YOU LOST THIS ROUND';
        pcCounter.innerHTML = ++pcScore;
    } else if(playerMove == "spock" && pcMove == 5){
        output.innerHTML = 'YOU TIED THIS ROUND';
    }
}

rock.addEventListener('click', function() {
    playerMove("rock");
});

paper.addEventListener('click', function() {
    playerMove("paper");
});

scissors.addEventListener('click', function() {
    playerMove("scissors");
});

lizard.addEventListener('click', function() {
    playerMove("lizard");
});

spock.addEventListener('click', function() {
    playerMove("spock");
});