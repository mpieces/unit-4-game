// VARIABLES
var targetNumber = 0;
var counter = 0;


//Game Counters
var wins = 0;
var losses = 0;

// FUNCTIONS =================================================

function startGame() {
    // set targetNumber = number between 19-120
  targetNumber = [Math.floor(Math.random() * 102) + 19];
  counter = 0;
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
        // create new image div
    var imageCrystal = $("<img>");
        // add class of crystal-image to each image
    imageCrystal.addClass("crystal-image");
        // set source of each image to correct path
    imageCrystal.attr("src", "assets/images/crystal-" + images[i] + ".png");
        // add data attribute to each crystal value
    imageCrystal.attr("data-crystalvalue", crystalValues[i]);
        // append each image to the crystals div
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
    $("#counter-number").text(counter);

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
