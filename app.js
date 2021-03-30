let roundNumber = document.querySelector('.round h1');
let ties = document.querySelector('.ties p');
let playerScore = document.querySelector('.human p');
let compScore = document.querySelector('.computer p');
let humanRock = document.querySelector('.humanRock');
let compRock = document.querySelector('.compRock');
let i = 0;

const play = (playerSelection) => {
  roundNumber.innerHTML = 'Round ' + ++i;                                 //update round number
  clearImages();                                                          //clear the images on the screen
  shake();                                                                //animate the fists
  compSelection = Math.floor(Math.random() * Math.floor(3));              //get computer's selection
  setTimeout(() => {updateImages(playerSelection, compSelection);         //wait until animation is complete
    getWinner(playerSelection, compSelection)}, 1400);                    //get winner and update points
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

  if (player === 0) {
    humanRock.style.display = 'inline'; //hide rock
  } else if (player === 1) { //if selection is paper
    document.querySelector('.humanPaper').style.display = 'inline'; //show paper
  } else { //if selection is scissors
    document.querySelector('.humanScissors').style.display = 'inline'; //show Scissors
  }
 
  compRock.style.display = 'none'
  if (comp === 0) {
    compRock.style.display = 'inline'; //hide rock
  } else if (comp === 1) { //if selection is paper
     document.querySelector('.compPaper').style.display = 'inline'; //show paper
  } else { //if selection is scissors
     document.querySelector('.compScissors').style.display = 'inline'; //show Scissors
  } 
}

const getWinner = (player, comp) => {
  var diff = Math.abs(player - comp);

  if (diff === 1) {
    (player > comp)? (playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1) : (compScore.innerHTML = parseInt(compScore.innerHTML) + 1);
  }
  else if (diff > 1) {
    (player < comp)? (playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1) : (compScore.innerHTML = parseInt(compScore.innerHTML) + 1);
  }
  else {
    ties.innerHTML = parseInt(ties.innerHTML) + 1;
  }
}