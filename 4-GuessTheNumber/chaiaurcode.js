let randomNumber = parseInt(Math.random() * 100 + 1);

console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });

  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      if (numGuess === 11) {
        displayMessage(`you have reached the max limit thnk you`);

        endGame();
      } else {
        checkGuess(guess);
        displayGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`you guessed is right`);
      endGame();
    } else if (guess <= randomNumber + 10 && guess > randomNumber) {
      displayMessage(`you guessed a little high`);
    } else if (guess > randomNumber) {
      displayMessage(`you guessed too high`);
    } else if (guess >= randomNumber - 10 && guess < randomNumber) {
      displayMessage(`you guessed a little low`);
    } else if (guess < randomNumber) {
      displayMessage(`you guessed too low`);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = 11 - numGuess;
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<H2>${message}</H2>`;
  }

  function endGame() {
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<H2 id='newGame'>Start a new Game</H2>`;

    startOver.appendChild(p);
    playgame = false;
    newGame();
  }

  function newGame() {
    const newgamenow = document.querySelector(`#newGame`);
    newgamenow.addEventListener(`click`, function (e) {
      userInput.value = '';
      guessSlot.innerHTML = '';
      numGuess = 1;
      remaining.innerHTML = 11 - numGuess;
      userInput.removeAttribute('disabled', '');
      randomNumber = parseInt(Math.random() * 100 + 1);

      startOver.removeChild(p);
      lowOrHi.innerHTML = '';
      playgame = true;
    });
  }
}
