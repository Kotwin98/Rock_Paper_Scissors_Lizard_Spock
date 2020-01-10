const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lizard = document.querySelector('#lizard');
const spock = document.querySelector('#spock');

const output = document.querySelector('#round-output');


const pcMove = Math.round(Math.random() * 4) + 1;
console.log(pcMove);

function playerMove(playerMove){
    if(playerMove == "rock" && pcMove == 1){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "rock" && pcMove == 2){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "rock" && pcMove == 3){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "rock" && pcMove == 4){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "rock" && pcMove == 5){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } 
    else if(playerMove == "paper" && pcMove == 1){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "paper" && pcMove == 2){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "paper" && pcMove == 3){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "paper" && pcMove == 4){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "paper" && pcMove == 5){
        output.innerHTML = 'YOU WON THIS ROUND';
    } 
    else if(playerMove == "scissors" && pcMove == 1){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "scissors" && pcMove == 2){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "scissors" && pcMove == 3){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "scissors" && pcMove == 4){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "scissors" && pcMove == 5){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } 
    else if(playerMove == "lizard" && pcMove == 1){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "lizard" && pcMove == 2){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "lizard" && pcMove == 3){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "lizard" && pcMove == 4){
        output.innerHTML = 'YOU TIED THIS ROUND';
    } else if(playerMove == "lizard" && pcMove == 5){
        output.innerHTML = 'YOU WON THIS ROUND';
    } 
    else if(playerMove == "spock" && pcMove == 1){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "spock" && pcMove == 2){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "spock" && pcMove == 3){
        output.innerHTML = 'YOU WON THIS ROUND';
    } else if(playerMove == "spock" && pcMove == 4){
        output.innerHTML = 'YOU LOST THIS ROUND';
    } else if(playerMove == "spock" && pcMove == 5){
        output.innerHTML = 'YOU TIED THIS ROUND';
    }
}

rock.addEventListener('click', function() {
    playerMove("rock");
});