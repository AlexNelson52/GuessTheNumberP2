'use strict';

const inputNum = document.querySelector('#userNumber')
const numberButton = document.querySelector('.checkButton')
const userNumber = document.querySelector('#formContainer')
const displayWinner = document.querySelector('.correctNumber')
const scoreNumber = document.querySelector('.score')


numberButton.addEventListener('click', (event) => {
  event.preventDefault()
  return GuessNumberGame(Number(inputNum.value))
})

let randomNumber = Math.round(Math.random() * 19 + 1)

numberButton.addEventListener('click', (event) => {
  event.preventDefault()
  return GuessNumberGame(Number(inputNum.value))
})

console.log(randomNumber);

let count = 0;

function GuessNumberGame(userNumber) {

  if (userNumber === randomNumber) {
    return ((displayWinner.style.display = 'flex') +
      (displayWinner.textContent = "Congratuolations you win!") + (numberButton.disabled = true) + (scoreNumber.textContent = count++))

  }
  if (userNumber > randomNumber) {
    displayWinner.style.display = 'flex';
    displayWinner.textContent = "Lower!"
  }
  if (userNumber < randomNumber) {
    displayWinner.style.display = 'flex';
    displayWinner.textContent = "Higher!"
  }

}



GuessNumberGame()