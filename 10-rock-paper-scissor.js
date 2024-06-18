let score = JSON.parse(localStorage.getItem('score'));

if (score === null){
  score = {
    wins :0,
    losses:0,
    ties:0
  };
}

updateScoreElement();

//used functions
function playGame(playerMove) {
  
const computerMove = (pickComputerMove());


let result = '';
if(playerMove === 'scissors'){

if(computerMove === 'rock') {
  result = 'you lose';
} else if (computerMove === 'paper') {
  result = 'you win'
} else if (computerMove === 'scissors') {
  result = 'Tie';
}

} else if(playerMove === 'paper') {
if(computerMove === 'rock') {
  result = 'you win';
} else if (computerMove === 'paper') {
  result = 'Tie'
} else if (computerMove === 'scissors') {
  result = 'you lose';
}

} else if(playerMove === 'rock'){

if(computerMove === 'rock') {
result = 'Tie';
} else if (computerMove === 'paper') {
result = 'you lose'
} else if (computerMove === 'scissors') {
result = 'you win';
}
}

if(result === 'you win'){
score.wins += 1;
} else if(result === 'you lose'){
score.losses +=1;
} else if(result === 'Tie'){
score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-results').innerHTML = result;

document.querySelector('.js-moves').innerHTML=`you
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
computer`;
}

/*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
}*/

function updateScoreElement(){
document.querySelector('.js-score').innerHTML=
`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1 /3){
computerMove = 'rock';
} else if(randomNumber >0 && randomNumber < 2 /3){
computerMove = 'paper';
} else {
computerMove = 'scissors';
}
return computerMove;
}