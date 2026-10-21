// The Math object provides built-in constants and methods for mathematical calculations.

let x = 3.6;
let y = 2;
let z;

// Math.round(x) rounds x to the nearest integer.
// For x = 3.6, it returns the number 4.
z = Math.round(x);
console.log("Rounded:", z);

// Math.floor(x) rounds x down to the greatest integer less than or equal to x.
// For x = 3.6, it returns the number 3.
z = Math.floor(x);
console.log("Rounded down:", z);

// Math.ceil(x) rounds x up to the least integer greater than or equal to x.
// For x = 3.6, it returns the number 4.
z = Math.ceil(x);
console.log("Rounded up:", z);

// Math.trunc(x) removes the fractional part of x without rounding.
// For x = 3.6, it returns the number 3.
z = Math.trunc(x);
console.log("Truncated:", z);

// Math.pow(x, y) raises x to the power of y.
// For x = 3.6 and y = 2, it returns the number 12.96.
z = Math.pow(x, y);
console.log("Power:", z);

// Math.sqrt(x) returns the non-negative square root of x.
// For x = 3.6, it returns a number (approximately 1.897).
z = Math.sqrt(x);
console.log("Square root:", z);

// Math.log(x) returns the natural logarithm of x (the logarithm with base e).
// For x = 3.6, it returns a number (approximately 1.281).
z = Math.log(x);
console.log("Natural logarithm:", z);

// Math.sin(x) returns the sine of an angle x measured in radians.
// It returns a number between -1 and 1; here, x is 3.6 radians.
z = Math.sin(x);
console.log("Sine:", z);

// Math.cos(x) returns the cosine of an angle x measured in radians.
// It returns a number between -1 and 1; here, x is 3.6 radians.
z = Math.cos(x);
console.log("Cosine:", z);

// Math.tan(x) returns the tangent of an angle x measured in radians.
// It returns a number; here, x is 3.6 radians.
z = Math.tan(x);
console.log("Tangent:", z);

// Math.abs(x) returns the non-negative absolute value of x as a number.
// For x = 3.6, it returns 3.6; a negative input would become positive.
z = Math.abs(x);
console.log("Absolute value:", z);

// Math.sign(x) indicates the sign of x: -1 for negative, 0 for zero, or 1 for positive.
// For x = 3.6, it returns the number 1.
z = Math.sign(x);
console.log("Sign:", z);

// Math.max(x, y, 1) returns the largest of the supplied numbers as a number.
// With these values, it returns 3.6.
let largest = Math.max(x, y, 1);
console.log("Largest:", largest);

// Math.min(x, y, 1) returns the smallest of the supplied numbers as a number.
// With these values, it returns 1.
let smallest = Math.min(x, y, 1);
console.log("Smallest:", smallest);

// Practice Exercises
// 1. Rounding practice: Pick a decimal number and print the results of Math.round(),
//    Math.floor(), Math.ceil(), and Math.trunc() so you can compare how they behave.
// 2. Number toolkit: Ask for a positive number and display its square, square root,
//    natural logarithm, and absolute value using Math.pow(), Math.sqrt(), Math.log(),
//    and Math.abs().
// 3. Angle calculator: Convert an angle from degrees to radians, then use Math.sin(),
//    Math.cos(), and Math.tan() to display its trigonometric values. (Radians = degrees * Math.PI / 180.)
// 4. Sign checker: Try positive, negative, and zero values with Math.sign(), then use
//    Math.max() and Math.min() to find the largest and smallest values in a group.


// Answers:

/* 1. */ let aizu = 23.7;
        console.log(Math.round(aizu));
        console.log(Math.floor(aizu));
        console.log(Math.ceil(aizu));
        console.log(Math.trunc(aizu));

/* 2. */ 
// prompt() displays a question in the browser and returns the user's input as text.
// If the user presses Cancel, prompt() returns null instead.
const input = prompt("Enter a positive number:");

// Number() converts the text entered by the user into a JavaScript number.
const number = Number(input);

// This condition checks that the user did not cancel, did not enter only whitespace,
// entered a finite number, and entered a number greater than zero.
// The checks run from left to right; if an earlier check fails, later checks are skipped.
if (input !== null && input.trim() !== "" && Number.isFinite(number) && number > 0) {
  // Math.pow(number, 2) squares the number; log the result with a helpful label.
  console.log("Square:", Math.pow(number, 2));

  // Math.sqrt(number) calculates the non-negative square root of the positive number.
  console.log("Square root:", Math.sqrt(number));

  // Math.log(number) calculates the number's natural logarithm (base e).
  console.log("Natural logarithm:", Math.log(number));

  // Math.abs(number) returns the number's non-negative absolute value.
  console.log("Absolute value:", Math.abs(number));
} else {
  // alert() displays an error message when the input is not a valid positive number.
  alert("Please enter a valid positive number.");
}
