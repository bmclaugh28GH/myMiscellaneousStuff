var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var countdown = document.querySelector(".countdown");
var nextWord = document.querySelector (".nextWord"); 
console.log (countdown); 
var secondsLeft = 6; 

function prepareRead() {
  // Create the countdown timer.
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countdown.textContent = secondsLeft + " seconds til speed reading starts";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}

function speedRead() {

  var wordList = poem.split(" "); 
  console.log (wordList); 
  secondsLeft = wordList.length; 

  var timerInterval = setInterval(function() {

    nextWord.textContent = wordList[wordList.length - secondsLeft]; 
    secondsLeft--;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 500);
}

// **********************************************

prepareRead();
