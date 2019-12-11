var challOneName = document.querySelector('.name1');
var challOneGuess = document.querySelector('.guess1');
var challTwoName = document.querySelector('.name2');
var challTwoGuess = document.querySelector('.guess2');
var guessBoxes = document.querySelectorAll('.guess-boxes');
var rangeBoxes = document.querySelectorAll('.range-boxes');
var guessComment1 = document.querySelector('.guess-comment1');
var guessComment2 = document.querySelector('.guess-comment2');
var randomNum = Math.floor(Math.random()* 100 + 1);
var count = 0;


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
 increaseCount();
 checkGuess();

}

var resetButton = document.querySelector('.reset-button');

function disableFormButtons() {
  submitGuess.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;
}

var minRange = document.querySelector('.set-min-range');
var maxRange = document.querySelector('.set-max-range');
var minRangeText = document.querySelector('.min-range-text-box');
var maxRangeText = document.querySelector('.max-range-text-box');
var updateButton = document.querySelector('.range-button');


minRangeText.addEventListener('input', checkRangeStatus);
maxRangeText.addEventListener('input', checkRangeStatus);

function checkRangeStatus() {
  if(minRangeText.value < maxRangeText.value) {
    updateButton.disabled = false;
  } else{
    updateButton.disabled = true;
  }
}

updateButton.addEventListener('click', updateRange);

function updateRange() {
  var minRangeValue = minRangeText.value;
  var maxRangeValue = maxRangeText.value;
  minRange.innerText = minRangeText.value;
  maxRange.innerText = maxRangeText.value;



  randomInRange(parseInt(minRangeValue), parseInt(maxRangeValue));
}

function randomInRange(mini, maxi) {
  randomNum = Math.floor(Math.random() * (maxi - mini + 1) + mini);
}

function checkGuess() {
  if (randomNum == guessOne.innerText){
  createWinCard(nameOne.innerText, count);
  eraseInputs();
  newNum();
  resetCount();
}
 else if (randomNum == guessTwo.innerText) {
   createWinCard(nameTwo.innerText, count)
   eraseInputs();
   newNum();
   resetCount();
}
}

function createWinCard(winnerName, count) {
  const div = document.createElement('div');
  div.className = 'winner-card';
  div.innerHTML = `
  <div class="win-card-header">
    <p class="win-top-row name-span">${nameOne.innerText}</p>
    <p class="win-top-row vs-span">VS</p>
    <p class="win-top-row name-span">${nameTwo.innerText}</p>
  </div>
  <div class="winner-box">
    <h2 class="win-card-name">${winnerName}</h2>
    <h2 class="win-status">WINNER</h2>
  </div>
  <div class="winner-stats">
    <p class="win-card-footer"><span class="changed-nums">${count}</span> GUESSES</p>
    <p class="win-card-footer"><span class="changed-nums">1 </span>MINUTE <span class="changed-nums">35 </span>SECONDS</p>
    <button type="button" class="close-button">x</button>
  </div>
  `;
  document.querySelector('.right-column').appendChild(div);
}

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

function increaseCount() {
  count = count + 1;
}

function resetCount() {
  count = 0;
}

function newNum() {
  randomNum = Math.floor(Math.random()* 100 + 1);
  minRange.innerText = 1;
  maxRange.innerText = 100;
  for (var i = 0; i < rangeBoxes.length; i++) {
    rangeBoxes[i].value = '';
}
}
