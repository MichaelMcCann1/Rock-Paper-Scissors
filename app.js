//Selectors
const roundNumber = document.querySelector('.roundNumber')
const tiesCounter = document.querySelector('.tiesCounter')
const playerScore = document.querySelector('.humanCounter')
const computerScore = document.querySelector('.computerCounter')
const humanRock = document.querySelector('.humanRock')
const humanPaper = document.querySelector('.humanPaper')
const humanScissors = document.querySelector('.humanScissors')
const computerRock = document.querySelector('.compRock')
const computerPaper = document.querySelector('.compPaper')
const computerScissors = document.querySelector('.compScissors')
const Rock = document.querySelector('.rock')
const Paper = document.querySelector('.paper')
const Scissors = document.querySelector('.scissors')

//Variables
let roundCounter = 0
let gameInProgress = false



//Main function. Gets invoked when player clicks on button
const play = (playerSelection) => {
  if (gameInProgress === false){                                           //prevents player from clicking buttons before current round has finished
    gameInProgress = true;
    roundNumber.textContent = `Round ${++roundCounter}`                    //update round number
    clearImages()                                                          //clear the images on the screen
    shake()                                                                //animate the fists
    let compSelection = Math.floor(Math.random() * Math.floor(3))          //get computer's selection
    setTimeout(() => {                                                     //wait until animation is complete
      updateImages(playerSelection, compSelection)                         //update images to reflect selections
      getWinner(playerSelection, compSelection)                            //get winner and update points
      gameInProgress = false
    }, 1400)
  }                         
}

const clearImages = () => {
  let notRock = document.querySelectorAll('.notRock') //select all images that are not rock
  notRock.forEach((item) => {item.style.display = 'none'}) //set display to none
}

const shake = () => {
  humanRock.style.display = 'inline'; //set display to inline
  humanRock.style.animation = "shakePlayer .5s 3" //begin animation
  computerRock.style.display = 'inline';
  computerRock.style.animation = "shakeComp .5s 3"
}

const updateImages = (player, comp) => {
  humanRock.style.animation = 'none'; //set animation to none to prevent another animation
  computerRock.style.animation = 'none';
  humanRock.style.display = 'none'; //hide rock
  computerRock.style.display = 'none'

  switch(player){
    case 0: 
      humanRock.style.display = 'inline'; //show rock
      break;
    case 1:
      humanPaper.style.display = 'inline'; //show paper
      break;
    case 2:
      humanScissors.style.display = 'inline'; //show scissors
      break;
  }
 
  switch(comp){
    case 0: 
      computerRock.style.display = 'inline'; //show rock
      break;
    case 1:
      computerPaper.style.display = 'inline'; //show paper
      break;
    case 2:
      computerScissors.style.display = 'inline'; //show Scissors
      break;
  }
}

const getWinner = (player, comp) => {
  let diff = Math.abs(player - comp);
  if (diff === 1) {
    (player > comp)? (playerScore.textContent = parseInt(playerScore.textContent) + 1) : (computerScore.textContent = parseInt(computerScore.textContent) + 1);
  }
  else if (diff > 1) {
    (player < comp)? (playerScore.textContent = parseInt(playerScore.textContent) + 1) : (computerScore.textContent = parseInt(computerScore.textContent) + 1);
  }
  else {
    tiesCounter.textContent = parseInt(tiesCounter.textContent) + 1;
  }
}

Rock.addEventListener('click', () => play(0))
Paper.addEventListener('click', () => play(1))
Scissors.addEventListener('click', () => play(2))