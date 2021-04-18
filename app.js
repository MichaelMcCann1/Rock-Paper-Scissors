let roundNumber = document.querySelector('.roundNumber');
let ties = document.querySelector('.tiesCounter');
let playerScore = document.querySelector('.humanCounter');
let compScore = document.querySelector('.computerCounter');
let humanRock = document.querySelector('.humanRock');
let compRock = document.querySelector('.compRock');
let roundCounter = 0;

const play = (playerSelection) => {
  roundNumber.textContent = 'Round ' + ++roundCounter;                    //update round number
  clearImages();                                                          //clear the images on the screen
  shake();                                                                //animate the fists
  let compSelection = Math.floor(Math.random() * Math.floor(3));          //get computer's selection
  setTimeout(() => {                                                      //wait until animation is complete
    updateImages(playerSelection, compSelection);                         //update images to reflect selections
    getWinner(playerSelection, compSelection)                             //get winner and update points
  }, 1400);                                                              
}

const clearImages = () => {
  notRock = document.querySelectorAll('.notRock'); //select all images that are not rock
  notRock.forEach((item) => {item.style.display = 'none'}); //set display to none
}

const shake = () => {
  humanRock.style.display = 'inline'; //set display to inline
  humanRock.style.animation = "shakePlayer .5s 3" //begin animation
  compRock.style.display = 'inline';
  compRock.style.animation = "shakeComp .5s 3"
}

const updateImages = (player, comp) => {
  humanRock.style.animation = 'none'; //set animation to none to prevent another animation
  compRock.style.animation = 'none';
  humanRock.style.display = 'none'; //hide rock
  compRock.style.display = 'none'

  switch(player){
    case 0: 
      humanRock.style.display = 'inline'; //hide rock
      break;
    case 1:
      document.querySelector('.humanPaper').style.display = 'inline'; //show paper
      break;
    case 2:
      document.querySelector('.humanScissors').style.display = 'inline'; //show Scissors
      break;
  }
 
  switch(comp){
    case 0: 
      compRock.style.display = 'inline'; //hide rock
      break;
    case 1:
      document.querySelector('.compPaper').style.display = 'inline'; //show paper
      break;
    case 2:
      document.querySelector('.compScissors').style.display = 'inline'; //show Scissors
      break;
  }
}

const getWinner = (player, comp) => {
  var diff = Math.abs(player - comp);
  if (diff === 1) {
    (player > comp)? (playerScore.textContent = parseInt(playerScore.textContent) + 1) : (compScore.textContent = parseInt(compScore.textContent) + 1);
  }
  else if (diff > 1) {
    (player < comp)? (playerScore.textContent = parseInt(playerScore.textContent) + 1) : (compScore.textContent = parseInt(compScore.textContent) + 1);
  }
  else {
    ties.innerHTML = parseInt(ties.textContent) + 1;
  }
}
