# Rock-Paper-Scissors

**Live Link to project:** https://mm-rockpaperscissors.web.app/

The classic Rock Paper Scissors game made with HTML, CSS, and vanilla JavaScript. Play against the computer and the game will keep track of the score. This game has a responsive interface and will work with any screen size.


<img src="https://github.com/MichaelMcCann1/Rock-Paper-Scissors/blob/main/RockPaperScissorsScreenshot.png" height="400px">


## Code Explanation

### Starting the game
Event listeners are added to the Rock, Paper, and Scissors buttons to listen for a click by the user. The click event calls the "play" function which starts the game. The parameter passed to the "play" function indicates what the user selected. For this game a selection of Rock has a value of 0, Paper has a value of 1, and Scissors has a value of 2. 

```javascript
Rock.addEventListener('click', () => play(0))
Paper.addEventListener('click', () => play(1))
Scissors.addEventListener('click', () => play(2))
```

### The play function

The "play" function is effectively a main function where all other functions needed to play the game are called. The "play" function begins be first checking if there is currently a round in progress. If there is a round in progress it won't start a new round. This prevents a user from clicking one of the buttons multiple times and starting a new round before the current round has finished. 
```javascript
const play = (playerSelection) => {
  if (gameInProgress === false){                                           
    gameInProgress = true;
    roundNumber.textContent = `Round ${++roundCounter}`                   
    clearImages()                                                          
    shake()                                                                
    let compSelection = Math.floor(Math.random() * 3)         
    setTimeout(() => {                                                     
      updateImages(playerSelection, compSelection)
      getWinner(playerSelection, compSelection)
      gameInProgress = false
    }, 1400)
  }                         
}
```
Once a game has started the round number will be updated with a string literal and a roundCounter variable. A preincrement operator is used on roundCounter to update the round number immediately ``` roundNumber.textContent = `Round ${++roundCounter}` ```.

Next the "clearImages" function is called. This function's purpose is to change all images back to the Rock image. This is needed to set up the shaking animation that is shown after a selection is made by the user. The function works by setting the display property of all images to 'none' except the Rock image.

Next the "shake" function is called. This function sets the animation of the images `humanRock.style.animation = "shakePlayer .5s 3"`. The animation is defined by a keyframes rule in the CSS file called 'shakePlayer'. There is also a shakeComputer animation used for the computer's images. The animation applies a rotation transformation to the images to create the appearance of a player shaking their fist. The animation is played 3 times.

```css
@keyframes shakeComp {
  0% {
    transform: rotate(90deg) scaleY(-1);
  }
  50% {
    transform: rotate(110deg) scaleY(-1) translateX(-10vh);
  }
  100% {
    transform: rotate(90deg) scaleY(-1);
    display: none;
  }
}
```

The computer's selection is then made randomly by using Math.random() `let compSelection = Math.floor(Math.random() * 3)`. Since the numbers 0,1, or 2 need to be picked the result is multiplied by 3 and it is rounded down using Math.floor().

### Picking the winner
The code waits for the shake animation to finish by using SetTimeout(). Once the animation is over the correct image of either rock, paper, or scissors is displayed for the player and the computer by setting the appropriate images display property to inline via the "updateImages()" function. Next the "getWinner" function is called which calculates who won the round. 

```javascript
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
```

Using the rules that Rock=0, Paper=1, and Scissors=2 we can determine who won the round. Remember that Scissors beats Paper which beats Rock which beats Scissors. By using the number values we assigned earlier 2 beats 1 which beats 0 which beats 2.  We start by finding the absolute value of the difference between the player and the computer's selection.  There are three possible outcomes for the difference, namely 0,1, and 2.

* For the case where the difference is 0, this means that both the player and the computer made the same selection and the game is a tie.
* If the difference is 1, then the player who had the bigger number was the winner. 
* If the difference is 2, then the player who had the smaller number was the winner. 

Once the winner is determined the scores are updated and the round is over. The game then waits until the player makes another selection.
