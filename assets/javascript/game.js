// NEEDS TOTAL SCORE!
// COUNTER DOES NOT UPDATE ON SCREEN
// VARIABLES
var targetNumber = 0;
var counter = 0;


//Game Counters
var wins = 0;
var losses = 0;

// FUNCTIONS =================================================

function startGame() {
    // set targetNumber = number between 19-129
  targetNumber = [Math.floor(Math.random() * 120) + 19];
 
// testing / debugging
//   console.log(targetNumber);

// change HTML to reflect round conditions
$("#number-to-guess").text(targetNumber);
$("#counter-number").text(counter);
}

// Create 4 crystals each with their own number value:

// creates an array of length = 4 filled with random values ranging from 1-12
var crystalValues = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);

console.log(crystalValues);

// suffixes used to differentiate b/w the 4 images
var images = [1,2,3,4];

// use a nested for loop to make each image different
for (var i = 0; i < crystalValues.length; i++) {
    for (var i = 0; i < images.length; i++) { 
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal-" + images[i] + ".png");
    imageCrystal.attr("data-crystalvalue", crystalValues[i]);
    $("#crystals").append(imageCrystal);
    }
}


// MAIN PROCESS ===============================================

// INITIATE THE CODE THE FIRST TIME
startGame();

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    console.log(counter);
    // check if user won
    if (counter == targetNumber) {
        alert("You win!"); 
        wins++;
        $('#wins').text(wins);
        startGame();
    } else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $('#losses').text(losses);
        startGame();
    }

});
