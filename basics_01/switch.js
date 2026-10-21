// THE SWITCH STATEMENT IN JAVASCRIPT
//
// A switch statement chooses which block of code to run by comparing one value
// with several possible case values. It is often useful when one variable can
// have several known values, such as a day name or menu choice.
//
// Basic structure:
//
// switch (valueToCheck) {
//     case possibleValue:
//         // Runs when valueToCheck strictly matches possibleValue.
//         break;
//     case anotherPossibleValue:
//         // Runs when valueToCheck strictly matches anotherPossibleValue.
//         break;
//     default:
//         // Runs when no case matches.
// }
//
// JavaScript compares the switch value with each case using strict equality (===).
// Case values must be constants or expressions; they are not places to put conditions.
// break exits the switch after a matching case. Without break, execution continues
// into the following case(s), which is called fall-through.
// default is optional and handles values that do not match any case.
// A switch is useful for exact value matches. Use if / else for ranges such as
// "score is greater than 80" or for more complex conditions.

// EXAMPLE 1: Choose a message based on an exact day name.
const day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        // These two cases share the same result; no break between them lets
        // Saturday fall through to this shared code.
        console.log("It's the weekend!");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.");
        break;
    default:
        // This runs if day does not match any listed name.
        console.log("That is not a recognized day.");
}

// EXAMPLE 2: Use a numeric value to select one menu action.
const menuChoice = 2;

switch (menuChoice) {
    case 1:
        console.log("Starting a new game.");
        break;
    case 2:
        console.log("Opening the settings.");
        break;
    case 3:
        console.log("Showing help.");
        break;
    default:
        console.log("Please choose 1, 2, or 3.");
}

// EXAMPLE 3: A switch can also use a string to choose an operation.
const operation = "add";
const firstNumber = 8;
const secondNumber = 3;

switch (operation) {
    case "add":
        console.log(firstNumber + secondNumber);
        break;
    case "subtract":
        console.log(firstNumber - secondNumber);
        break;
    default:
        console.log("Unknown operation.");
}

// PRACTICE EXERCISES
//
// 1. Traffic light
//    Use a switch on the color. Print what a driver should do for "red",
//    "yellow", or "green". Use default for an unknown color.
//
// 2. Number to word
//    Use a switch on a number from 1 through 5. Print its name as a word.
//
// 3. Simple calculator
//    Use a switch on the operator ("+", "-", "*", or "/") to calculate and print
//    the result using two provided numbers.
//
// 4. Month names
//    Use a switch on a month number from 1 through 12 and print the month name.
//    Use default if the number is not in that range.
//
// 5. Grade feedback
//    Use a switch on a letter grade ("A", "B", "C", "D", or "F") and print
//    a feedback message. Make the switch handle lowercase letters too, or explain
//    which letter case your program expects.
//
// 6. Vowel checker
//    Use a switch on a single lowercase letter. Group the cases for a, e, i, o,
//    and u so they share one message; use default for a consonant.
//
// 7. Menu selection
//    Use a switch on a number choice (1, 2, or 3) to print a different action.
//    Use default for an invalid selection.
//
// 8. Day type
//    Use a switch on a day name. Group Saturday and Sunday into one weekend
//    result, group the weekdays into another, and use default for an invalid day.

//++++++++++++++++++++++++++++++ PRACTICE CODE ++++++++++++++++++++++++++++++

// For each exercise, replace the empty string in each case with the correct
// case value. Add the output text inside each case, and remember to use break.

// Exercise 1: Traffic light
const trafficColor = "red";

switch (trafficColor) {
    case "red":
        console.log("Stop the vehicle");
        break;
    case "yelloq":
        console.log("Slow down the vehicle");
        break;
    case "green":
        console.log("GO GO GO ");
        break;
    default:
        console.log("Unknown traffic light color.");
}

// Exercise 2: Number to word
const digit = 3;

switch (digit) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
    default:
        console.log("Choose a number from 1 to 5.");
}

// Exercise 3: Simple calculator
const calculatorOperator = "+";
const calculatorFirstNumber = 12;
const calculatorSecondNumber = 4;

switch (calculatorOperator) {
    case "+":
        console.log(calculatorFirstNumber + calculatorSecondNumber);
        break;
    case "-":
        console.log(calculatorFirstNumber - calculatorSecondNumber);
        break;
    case "*":
        console.log(calculatorFirstNumber * calculatorSecondNumber);
        break;
    case "/":
        console.log(calculatorFirstNumber / calculatorSecondNumber);
        break;
    default:
        console.log("Unknown operator.");
}

// Exercise 4: Month names
const monthNumber = 8;

switch (monthNumber) {
    case 1:
        console.log("janauary");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
       console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default:
        console.log("Choose a month number from 1 to 12.");
}

// Exercise 5: Grade feedback
const grade = "B";

switch (grade) {
    case "":
        // TODO: Print feedback for an A grade.
        break;
    case "":
        // TODO: Print feedback for a B grade.
        break;
    case "":
        // TODO: Print feedback for a C grade.
        break;
    case "":
        // TODO: Print feedback for a D grade.
        break;
    case "":
        // TODO: Print feedback for an F grade.
        break;
    default:
        console.log("Unknown grade.");
}

// Exercise 6: Vowel checker
const letter = "e";

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("letter is a vowel.");
        break;
    default:
        console.log("The letter is a consonant or is not recognized.");
}

// Exercise 7: Menu selection
const choice = 2;

switch (choice) {
    case 1:
        console.log("Starting a new game.");
        break;
    case 2:
        console.log("Opening the settings.");
        break;
    case 3:
        console.log("Showing help.");
        break;
    default:
        console.log("Please choose 1, 2, or 3.");
}

// Exercise 8: Day type
const dayToCheck = "Sunday";

switch (dayToCheck) {
    case "Sunday":
    case "Saturay":
        console.log("weekend party");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thrusday":
    case "Friday":
        console.log("Slave day");
        break;
    default:
        console.log("That is not a recognized day.");
}