// An if statement runs different code depending on whether a condition is true.

// Find the age input field, the button, and the element where the message will appear.
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

// This variable will hold the age entered by the user as a number.
let age;

// This function runs when the user clicks the submit button.
mySubmit.onclick = function(){

    // Read the text from the input field.
    age = myText.value;

    // Input values arrive as text, so convert the age to a number for comparisons.
    age = Number(age);
    
    // Conditions are checked from top to bottom. The first true condition runs,
    // and the remaining else-if and else branches are skipped.
    if(age >= 100){
        // Show this message for ages 100 or above.
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        // If the age is exactly 0, show the special message for a newborn.
        resultElement.textContent = `You can't enter. You were just born.`
    }
    else if(age >= 18){
        // If the age is 18 or above (and less than 100), allow entry.
        resultElement.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        // Reject negative ages because an age cannot be less than 0.
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        // Any age not handled above is under 18, so show the age requirement.
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}