'use strict';

// console.log(document.querySelector('.message').textContent);

// //取 html內容

// document.querySelector('.message').textContent = '🔮 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  // const guess = document.querySelector('.guess').value;
  const guess = Number(document.querySelector('.guess').value);
  //但是接收到的資料是 Sstring 需要把字串轉為數字
  console.log(guess, typeof guess); //

  //因為轉換為數字，當數字為０時，就會等同於 boolean 的 false

  // 當沒有填寫數字時
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO number!';
    displayMessage('NO number!');

    // 當玩家猜對數字時
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 當數字錯誤時
  } else if (guess !== secretNumber) {
    // 當猜的數字太高時

    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';

      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
    // } else if (guess > secretNumber) {
    //   // 當猜的數字太低時
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.background = '#222';
});
