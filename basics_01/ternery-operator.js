// THE TERNARY OPERATOR IN JAVASCRIPT
//
// The ternary operator is a short way to choose between two values based on a condition.
// It is called "ternary" because it uses three parts:
//
// condition ? valueIfTrue : valueIfFalse
//
// JavaScript checks the condition first. If it is true, the expression produces
// the value after ?. If it is false, it produces the value after :.
//
// The result can be saved in a variable or used directly:
//
// const message = condition ? "Yes" : "No";
// console.log(condition ? "Yes" : "No");
//
// Conditions commonly use comparison operators:
//   ===  equal in value and type       !==  not equal in value or type
//   >    greater than                  <     less than
//   >=   greater than or equal to      <=    less than or equal to
//
// Logical operators can combine checks:
//   && means AND: both conditions must be true.
//   || means OR: at least one condition must be true.
//
// A ternary is best when choosing between two simple results.
// For several different outcomes, an if / else if / else statement is usually clearer.
// Ternary expressions produce a value; they do not automatically display it.
// Use console.log() to display a result in the console.

// EXAMPLE 1: Choose a message based on whether a number is positive.
const number = 7;

// number > 0 is the condition; the two strings are the true and false results.
const numberMessage = number > 0 ? "Positive" : "Not positive";
console.log(numberMessage);

// EXAMPLE 2: Choose whether someone may enter based on their age.
const age = 20;

// If age is at least 18, the expression produces "You may enter.";
// otherwise it produces "You may not enter."
const entryMessage = age >= 18 ? "You may enter." : "You may not enter.";
console.log(entryMessage);

// EXAMPLE 3: Use a ternary directly inside console.log().
const hasTicket = true;

// The condition is already a boolean value: true selects the first message,
// and false selects the second message.
console.log(hasTicket ? "Ticket accepted." : "A ticket is required.");

// PRACTICE EXERCISES
//
// For each exercise, replace the empty string after the TODO comment with a
// ternary expression. Use the provided variables and console.log() the result.
//
// 1. Even or odd
//    Use the remainder operator (%) to choose "Even" or "Odd".
//
// 2. Age check
//    Choose "Adult" when the age is 18 or older, or "Minor" otherwise.
//
// 3. Password check
//    Compare the entered and correct passwords with ===.
//    Choose "Correct password" or "Try again".
//
// 4. Number range
//    Choose "In range" if the number is from 1 through 100 inclusive,
//    or "Out of range" otherwise. Use && to check both limits.
//
// 5. Weekend planner
//    Choose "Day off!" for Saturday or Sunday, or "It's a weekday." otherwise.
//    Use || to check both day names.
//
// 6. Login decision
//    Choose "Login successful" only if the username is correct and the account
//    is active. Use && to check both requirements.
//
// 7. Temperature message
//    Choose "Bring a jacket" if the temperature is below 15, or "No jacket needed"
//    otherwise.
//
// 8. Discount check
//    Choose "Discount applies" if the purchase total is at least 50,
//    or "No discount" otherwise.

//++++++++++++++++++++++++++++++ PRACTICE CODE ++++++++++++++++++++++++++++++

// Exercise 1: Replace the empty string with a ternary expression for even / odd.
const evenOddValue = 14;
const evenOddResult = evenOddValue % 2 == 0 ? "it is an even number" : "it is an odd number";
console.log(evenOddResult);

// Exercise 2: Replace the empty string with a ternary expression for adult / minor.
const ageToCheck = 16;
const ageResult = ageToCheck >= 18 ? "Adult" : "Minor";
console.log(ageResult);

// Exercise 3: Replace the empty string with a ternary expression comparing the passwords.
const enteredPassword = "open-sesame";
const correctPassword = "open-sesame";
const passwordResult = enteredPassword === correctPassword ? "Correct password" : "Try again";
console.log(passwordResult);

// Exercise 4: Replace the empty string with a ternary expression checking both range limits.
const rangeValue = 42;
const rangeResult = rangeValue > 1 && rangeValue < 100 ?"In range": "Out of range";
console.log(rangeResult);

// Exercise 5: Replace the empty string with a ternary expression checking both weekend days.
const day = "Saturday";
const weekendResult = day === "Saturday" && day === "Sunday" ? "Day off!": " Weekday ";
console.log(weekendResult);

// Exercise 6: Replace the empty string with a ternary expression checking both login requirements.
const enteredUsername = "student";
const expectedUsername = "student";
const isAccountActive = true;
const loginResult = enteredUsername === expectedUsername && isAccountActive == true ? "Login successful": "Login failed";
console.log(loginResult);

// Exercise 7: Replace the empty string with a ternary expression for the temperature message.
const temperatureToCheck = 12;
const temperatureResult = temperatureToCheck <= 15 ? "Bring a jacket" :"No jacket needed";
console.log(temperatureResult);

// Exercise 8: Replace the empty string with a ternary expression for the discount message.
const purchaseTotal = 65;
const discountResult = purchaseTotal >= 50 ? "Discount applies" : "No discount";
console.log(discountResult);
