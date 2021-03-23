// Computer looks for when something with an id of button is clicked which causes the random function to activate.
document.getElementById('button').addEventListener('click', random)
let randomNum = 0
let playerChoice = 0

// This function will look for the player to input a value inside something with an id of num-input which will store the value, parse Int converts it to a int.
function random () {
  playerChoice = document.getElementById('num-input').value
  playerChoice = parseInt(playerChoice)
  //  This will get a random number between 1 and 6.

  randomNum = Math.floor(Math.random() * 6) + 1
  //  This will look to see if the numbers equal the same which will play an alert.

  if (randomNum === playerChoice) {
    alert('You Win!!!')
}
}
