var readline = require("readline-sync");

var word = readline.question("Type your word: ");
var wordArray = [];

var LocationLetter = function (letter) {
    this.hit = false;
    this.display = "_";
    this.letter = letter;
}

function pushLetter(word) {
    var arr = word.split('');
    for (var i = 0; i < arr.length; i++) {
        var newLocation = new LocationLetter(arr[i]);
        wordArray.push(newLocation);
    }
}
pushLetter(word);

var displayWord = '';

function printWord() {
    for (var i = 0; i < wordArray.length; i++) {
        var currentLetter = wordArray[i];
        displayWord += currentLetter.display;
    }
    console.log(displayWord);
}
printWord();

function type() {
    var newLetter = readline.question("Guess a letter: ");
    if (newLetter === LocationLetter.letter) {
        currentLetter.display += currentLetter.letter;
    }
}
type();