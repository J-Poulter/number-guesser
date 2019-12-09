var challOneName = document.querySelector('.name1');
var challOneGuess = document.querySelector('.guess1');
var challTwoName = document.querySelector('.name2');
var challTwoGuess = document.querySelector('.guess2');
var guessBoxes = document.querySelectorAll('.guess-boxes');
var guessComment1 = document.querySelector('.guess-comment1');
var guessComment2 = document.querySelector('.guess-comment2');

var submitGuess = document.querySelector('.sub-guess');
var clearButton = document.querySelector('.clear-button');

challOneName.addEventListener('change', activateClear);
challOneGuess.addEventListener('change', activateClear);
challTwoName.addEventListener('change', activateClear);
challTwoGuess.addEventListener('change', activateClear);

function activateClear() {
  clearButton.disabled = false;
}

challOneName.addEventListener('input', checkSubmitStatus);
challOneGuess.addEventListener('input', checkSubmitStatus);
challTwoName.addEventListener('input', checkSubmitStatus);
challTwoGuess.addEventListener('input', checkSubmitStatus);

function checkSubmitStatus() {
  if(challOneName.value != '' && challTwoName.value != '' &&
  challOneGuess.value != '' && challOneGuess.value != '') {
  submitGuess.disabled = false}
  else {
  submitGuess.disabled = true;
}
}

clearButton.addEventListener('click', eraseInputs);

function eraseInputs() {
  for (var i = 0; i < guessBoxes.length; i++) {
    guessBoxes[i].value = '';
  }
}

var nameOne = document.querySelector('.card-name1');
var guessOne = document.querySelector('.card-guess1');
var nameTwo = document.querySelector('.card-name2');
var guessTwo = document.querySelector('.card-guess2');

submitGuess.addEventListener('click', latestGuess);

var guessPair = document.querySelectorAll('.guess-pair');

function eraseGuesses() {
  for (var i = 0; i < guessPair.length; i++) {
    guessPair[i].value = '';
  }
}
function latestGuess() {
 nameOne.innerText = challOneName.value;
 nameTwo.innerText = challTwoName.value;
 guessOne.innerText = challOneGuess.value;
 guessTwo.innerText = challTwoGuess.value;

 eraseGuesses();
 disableFormButtons();
 guessResponse1();
 guessResponse2();
}

var resetButton = document.querySelector('.reset-button');

function disableFormButtons() {
  submitGuess.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;
}

var randomNum = Math.floor(Math.random() * 100);

function guessResponse1() {
  if (guessOne.innerText == randomNum) {
    guessComment1.innerText = "Boom!";
  }
  else if (guessOne.innerText < randomNum) {
    guessComment1.innerText = "That's Too Low!";
  }
  else if (guessOne.innerText > randomNum) {
    guessComment1.innerText = "That's Too High!";
  }
}
function guessResponse2() {
  if (guessTwo.innerText == randomNum) {
    guessComment2.innerText = "Boom!";
  }
  else if (guessTwo.innerText < randomNum) {
    guessComment2.innerText = "That's Too Low!";
  }
  else if (guessTwo.innerText > randomNum) {
    guessComment2.innerText = "That's Too High!";
  }
}

var minRange = document.querySelector('.set-min-range');
var maxRange = document.querySelector('.set-max-range');
var minRangeText = document.querySelector('.min-range-text-box');
var maxRangeText = document.querySelector('.max-range-text-box');
var updateButton = document.querySelector('.range-button');

updateButton.addEventListener('click', updateRange);

function updateRange() {
  minRange.innerText = minRangeText.value;
  maxRange.innerText = maxRangeText.value;
}

function randomInRange (mini, maxi) {
  return Math.floor(Math.random() * (maxi - mini +1)) + mini;
}
