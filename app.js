//Selectors
const roundNumber = document.querySelector('.roundNumber');
const tiesCounter = document.querySelector('.tiesCounter');
const playerScore = document.querySelector('.humanCounter');
const computerScore = document.querySelector('.computerCounter');
const humanRock = document.querySelector('.humanRock');
const humanPaper = document.querySelector('.humanPaper');
const humanScissors = document.querySelector('.humanScissors');
const computerRock = document.querySelector('.compRock');
const computerPaper = document.querySelector('.compPaper');
const computerScissors = document.querySelector('.compScissors');
const Rock = document.querySelector('.rock');
const Paper = document.querySelector('.paper');
const Scissors = document.querySelector('.scissors');

//Variables
let roundCounter = 0;
let gameInProgress = false;


//Main function. Gets invoked when player clicks on button
const play = (playerSelection) => {
  if (!gameInProgress) { //prevents player from clicking buttons before current round has finished
    gameInProgress = true;
    roundNumber.textContent = `Round ${++roundCounter}`;
    clearImages();
    shake();
    const compSelection = Math.floor(Math.random() * 3);
    setTimeout(() => {
      updateImages(playerSelection, compSelection);
      getWinner(playerSelection, compSelection);
      gameInProgress = false;
    }, 1400);
  }                         
}

const clearImages = () => {
  const notRock = document.querySelectorAll('.notRock');
  notRock.forEach(item => item.style.display = 'none');
}

const shake = () => {
  humanRock.style.display = 'inline';
  humanRock.style.animation = "shakePlayer .5s 3";
  computerRock.style.display = 'inline';
  computerRock.style.animation = "shakeComp .5s 3";
}

const updateImages = (player, comp) => {
  humanRock.style.animation = 'none';
  computerRock.style.animation = 'none';
  humanRock.style.display = 'none';
  computerRock.style.display = 'none';

  if (player === 0) humanRock.style.display = 'inline';
  else if (player === 1) humanPaper.style.display = 'inline';
  else humanScissors.style.display = 'inline';

  if (comp === 0) computerRock.style.display = 'inline';
  else if (comp === 1) computerPaper.style.display = 'inline';
  else computerScissors.style.display = 'inline';
}

const getWinner = (player, comp) => {
  const diff = Math.abs(player - comp);
  if (diff === 1) {
    (player > comp)? (playerScore.textContent = parseInt(playerScore.textContent) + 1) : (computerScore.textContent = parseInt(computerScore.textContent) + 1);
  }
  else if (diff === 2) {
    (player < comp)? (playerScore.textContent = parseInt(playerScore.textContent) + 1) : (computerScore.textContent = parseInt(computerScore.textContent) + 1);
  }
  else {
    tiesCounter.textContent = parseInt(tiesCounter.textContent) + 1;
  }
}

Rock.addEventListener('click', () => play(0))
Paper.addEventListener('click', () => play(1))
Scissors.addEventListener('click', () => play(2))