'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let playing = true;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const main = function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input

    if (!guess) {
      // document.querySelector('.message').textContent = 'No number!';
      displayMessage('No number!');
      // when player win the game
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = 'correct Number!';
      displayMessage('correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        playing = false;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        //   document.querySelector('.message').textContent =
        //     guess > secretNumber ? 'Too High' : 'Too low';
        displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        //   document.querySelector('.message').textContent = 'you lost';
        displayMessage('you lost');
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  // player choose a high number
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // player choose a low  number
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost';
  //       document.querySelector('.score').textContent = 0;
  //     }
};

document.querySelector('.check').addEventListener('click', main);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    main();
  }
});
