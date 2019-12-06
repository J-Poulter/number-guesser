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

// clearButton.addEventListener('click', clearForms);
//
// function clearForms() {
//   var formTwoInputs = document.querySelectorAll('.form2-input');
//   for (var i = 0; i < formTwoInputs.length; i++) {
//     formTwoInputs[i].value = '';
//   }
// }
