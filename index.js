'use strict';

const inputNum = document.querySelector('#userNumber')
const numberButton = document.querySelector('.checkButton')
const userNumber = document.querySelector('#formContainer')
const displayWinner = document.querySelector('.correctNumber')
const scoreNumber = document.querySelector('.score')
const displayNumber = document.querySelector('.theNumberDiv')

let scoreCount = 20;

numberButton.addEventListener('click', (event) => {
  event.preventDefault()
  if (inputNum.value > 20 || inputNum.value <= 0){
    return alert('Please Pick a Number 1 - 20');
  }
  return GuessNumberGame(Number(inputNum.value), scoreCount)
})

let randomNumber = Math.round(Math.random() * 19 + 1)

numberButton.addEventListener('click', (event) => {
  event.preventDefault()
  return GuessNumberGame(Number(inputNum.value), scoreCount)
})

console.log(randomNumber);



function GuessNumberGame(userNumber, score) {
  if (userNumber === randomNumber) {
    displayWinner.style.display = 'flex';
    displayWinner.textContent = "Congratulations, you win!";
    numberButton.disabled = true;
    score++;
  } else if (userNumber > randomNumber) {
    displayWinner.style.display = 'flex';
    displayWinner.textContent = "Lower!";
  } else if (userNumber < randomNumber) {
    displayWinner.style.display = 'flex';
    displayWinner.textContent = "Higher!";
  }

  // Update the scoreNumber text content after handling the guess
  scoreNumber.textContent = score;

  // Return the updated score value
  return score;
}
