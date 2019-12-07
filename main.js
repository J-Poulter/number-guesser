var challOneName = document.querySelector('.name1');
var challOneGuess = document.querySelector('.guess1');
var challTwoName = document.querySelector('.name2');
var challTwoGuess = document.querySelector('.guess2');
var guessBoxes = document.querySelectorAll('.guess-boxes');

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

var nameOne = document.querySelector('.card-name1');
var guessOne = document.querySelector('.card-guess1');
var nameTwo = document.querySelector('.card-name2');
var guessTwo = document.querySelector('.card-guess2');

submitGuess.addEventListener('click', latestGuess);

function latestGuess(){
 nameOne.innerText = challOneName.value;
 nameTwo.innerText = challTwoName.value;
 guessOne.innerText = challOneGuess.value;
 guessTwo.innerText = challTwoGuess.value;
}
