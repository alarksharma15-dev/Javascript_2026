// IF / ELSE STATEMENTS IN JAVASCRIPT
//
// An if statement lets a program choose what to do based on a condition.
// A condition is an expression that evaluates to true or false.
//
// Basic structure:
//
// if (condition) {
//     // Runs when condition is true.
// } else {
//     // Runs when condition is false.
// }
//
// Use else if when you want to check another condition after the first one fails:
//
// if (firstCondition) {
//     // Runs if firstCondition is true.
// } else if (secondCondition) {
//     // Runs if firstCondition is false and secondCondition is true.
// } else {
//     // Runs if none of the earlier conditions were true.
// }
//
// Conditions can use comparison operators:
//   ===  equal in value and type       !==  not equal in value or type
//   >    greater than                  <     less than
//   >=   greater than or equal to      <=    less than or equal to
//
// Logical operators combine conditions:
//   && means AND: both conditions must be true.
//   || means OR: at least one condition must be true.
//   !  means NOT: reverses true to false, or false to true.
//
// JavaScript checks an if / else if / else chain from top to bottom.
// It runs the first matching branch, then skips the rest of that chain.
// Use braces {} around each branch so it is clear which statements belong together.

// EXAMPLE 1: A simple if / else decision.
const temperature = 12;

if (temperature < 15) {
    console.log("Bring a jacket.");
} else {
    console.log("The weather is warm enough.");
}

// EXAMPLE 2: An if / else if / else chain with several possible outcomes.
const score = 82;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Keep practicing.");
}

// EXAMPLE 3: Combining conditions with &&.
const age = 20;
const hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("You may enter.");
} else {
    console.log("You may not enter.");
}

// PRACTICE EXERCISES
//
// 1. Positive, negative, or zero
//    Create a number variable. Use if / else if / else to print whether it is
//    positive, negative, or zero.
//
// 2. Even or odd
//    Use the remainder operator (%) and an if / else statement to determine
//    whether a whole number is even or odd. Hint: an even number % 2 is 0.
//
// 3. Age group
//    Store an age and print "child" for ages under 13, "teen" for ages 13–17,
//    "adult" for ages 18–64, and "senior" for ages 65 and above.
//
// 4. Password check
//    Store a password string and use a strict equality check (===) to compare it
//    with a password you choose. Print whether the password is correct.
//
// 5. Number range
//    Store a number and check whether it is between 1 and 100 inclusive.
//    Use && to combine the lower and upper bound conditions.
//
// 6. Weekend planner
//    Store a day name. Use || to print "Day off!" for Saturday or Sunday,
//    and print "It's a weekday." for other days.
//
// 7. FizzBuzz
//    For a number from 1 to 30, print "FizzBuzz" if it is divisible by both 3
//    and 5, "Fizz" if divisible by 3, "Buzz" if divisible by 5, and the number
//    otherwise. Check the both-divisible case first.
//
// 8. Login decision
//    Create variables for a username and whether the account is active.
//    Use && to allow login only when the username is correct and the account
//    is active; otherwise print a helpful message.

//++++++++++++++++++++++++++++++ ANSWERS +++++++++++++++++++++++++++++++

 let number = -7 ;

   if(number > 0){
    console.log("Number is positive", number);
   }
   else if(number === 0){
    console.log("number is zero", number);
   }
   else{
    console.log("number is negative", number);
   }

// Exercise 2: Even or odd
const evenOddNumber = 14;

// Replace false with a condition that checks whether evenOddNumber is even.
if (evenOddNumber % 2 === 0) {
    console.log(evenOddNumber, "is even");
} else {
    console.log(evenOddNumber, "is odd");
}

// Exercise 3: Age group
const ageToCheck = 16;

// Replace each false with the condition for that age group.
if (ageToCheck < 13 ) {
    console.log("child");
} else if (ageToCheck >= 13 && ageToCheck <= 17) {
    console.log("teen");
} else if (ageToCheck >= 18 && ageToCheck <= 64) {
    console.log("adult");
} else {
    console.log("senior");
}

// Exercise 4: Password check
const enteredPassword = "open-sesame";
const correctPassword = "open-sesame";

// Replace false with a strict comparison of the two password variables.
if (enteredPassword === correctPassword) {
    console.log("Password is correct");
} else {
    console.log("Password is incorrect");
}

// Exercise 5: Number range
const numberToCheck = 42;

// Replace false with a condition using && to check whether the number is 1–100 inclusive.
if (numberToCheck > 1 && numberToCheck < 100) {
    console.log("The number is in the range");
} else {
    console.log("The number is outside the range");
}

// Exercise 6: Weekend planner
const day = "Saturday";

// Replace false with a condition using || to check for Saturday or Sunday.
if (day === "Saturday" || day === "Sunday") {
    console.log("Day off!");
} else {
    console.log("It's a weekday.");
}

// Exercise 7: FizzBuzz
// The loop visits every integer from 1 through 30.
for (let fizzBuzzNumber = 1; fizzBuzzNumber <= 30; fizzBuzzNumber++) {
    // Check divisibility by both numbers first, before checking each one separately.
    if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
        console.log("FizzBuzz");
    } else if (fizzBuzzNumber % 3 === 0) {
        console.log("Fizz");
    } else if (fizzBuzzNumber % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(fizzBuzzNumber);
    }
}

// Exercise 8: Login decision
const enteredUsername = "student";
const expectedUsername = "student";
const isAccountActive = true;

// Replace false with a condition using && that checks both the username
// and whether the account is active.
if (enteredUsername === expectedUsername && isAccountActive === true) {
    console.log("Login successful");
} else {
    console.log("Login failed: check your username and account status.");
}