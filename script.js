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
        output.innerHTML = 'YOU TIED';
    } else if(playerMove == "rock" && pcMove == 2){
        output.innerHTML = 'YOU TIED';
    } else if(playerMove == "rock" && pcMove == 3){
        output.innerHTML = 'YOU TIED';
    } else if(playerMove == "rock" && pcMove == 4){
        output.innerHTML = 'YOU TIED';
    } else if(playerMove == "rock" && pcMove == 5){
        output.innerHTML = 'YOU TIED';
    }
}

rock.addEventListener('click', function() {
    playerMove("rock");
});