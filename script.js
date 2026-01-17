'use strict';

// defines all vars

let checkBtn = document.querySelector('.check');
let message = document.querySelector('.message');
let trueNum = document.querySelector('.number').textContent;
let rest = document.querySelector('.again');
let lose = document.querySelector('.losing');
let win = document.querySelector('.winning');
let lostBtn = document.querySelector('.losing button');
// let score = Number(document.querySelector('.score').textContent);
let score = 20;

// ? remember u have many things like score by dom and two ways of reset

// start the function

// lostBtn.addEventListener('click', function () {
//   window.location.reload();
// });
trueNum = Math.trunc(Math.random() * 20 + 1);
checkBtn.addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);
  if (!guessNum) {
    message.textContent = `There is no number to guess`;
    message.className = 'message-edit';
  } else if (guessNum === trueNum) {
    message.textContent = `🙌 Correct`;
    document.querySelector('.highscore').textContent = score;
    localStorage.setItem(
      'highScore',
      (document.querySelector('.highscore').textContent = score)
    );
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = trueNum;
    // setTimeout(function(){
    //     win.style.display = 'grid'
    //     win.style.backgroundColor = '#000000'
    // }, 500)
  } else if (guessNum > trueNum) {
    if (score > 0) {
      message.textContent = `Too high`;
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        message.textContent = 'You lost bombclat';
        //     message.textContent = `You suck`;
        //     lose.style.display = 'grid';
      }
    }
  } else if (guessNum < trueNum) {
    if (score > 0) {
      message.textContent = `Too low`;
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        message.textContent = 'You lost bombclat';
        //     message.textContent = `You suck`;
        //     lose.style.display = 'grid';
      }
    }
  }
});

// local storage

document.querySelector('.highscore').textContent =
  localStorage.getItem('highScore');

// reload

rest.addEventListener('click', function () {
  window.location.reload();
});
