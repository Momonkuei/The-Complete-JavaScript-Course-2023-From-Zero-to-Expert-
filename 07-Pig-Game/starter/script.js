'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score1EL = document.querySelector('#score--0');
const score2EL = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//違建初始化
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//違建初始化
const init = function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  score1EL.textContent = 0;
  current1El.textContent = 0;
  score2EL.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// 摋骰子
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.生隨機骰子

    const dice = Math.trunc(Math.random() * 6 + 1);
    // console.log(dice);

    // 產生骰子按鈕
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 確認是否摋到數值一
    if (dice !== 1) {
      // Add dice to current score
      // currentScore = currentScore + dice;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 把當前分數加到當前玩家分數上
    scores[activePlayer] += currentScore;
    console.log(scores[0], scores[1]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // scores[1] = score[1] + currentScore

    // 檢查分數是否為１００
    if (scores[activePlayer] >= 20) {
      // 結束比賽
      playing = false;
      console.log('winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // 換下一位選手
      switchPlayer();
    }
  } else {
  }
});

btnNew.addEventListener('click', init);
