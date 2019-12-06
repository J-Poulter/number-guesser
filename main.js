var challOneName = document.querySelector('.name1');
var challOneGuess = document.querySelector('.guess1');
var challTwoName = document.querySelector('.name2');
var challTwoGuess = document.querySelector('.guess2');

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
