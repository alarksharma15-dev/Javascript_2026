// RANDOM NUMBER GENERATOR: rolls three independent six-sided dice.

// Find the button and result labels in the HTML so JavaScript can use them.
const myButton = document.getElementById("myButton");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");

// The possible result of each six-sided die starts at 1 and ends at 6.
const min = 1;
const max = 6;

// These variables hold the values generated for each of the three dice.
let randomNum1;
let randomNum2;
let randomNum3;

// This function runs every time the user clicks the roll button.
myButton.onclick = function(){
    // Math.random() gives a value from 0 up to (but not including) 1.
    // Multiplying by 6 and using Math.floor() creates an integer from 0 to 5;
    // adding min (1) shifts that range to an integer from 1 to 6.
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    // Show each die's result in its matching label on the page.
    mylabel1.textContent = randomNum1;
    mylabel2.textContent = randomNum2;
    mylabel3.textContent = randomNum3;
}