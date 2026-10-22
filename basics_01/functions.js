// FUNCTIONS IN JAVASCRIPT
//
// A function is a reusable block of code. You can define it once, then call it
// whenever you need that behavior.
//
// FUNCTION DECLARATION
//
// function functionName() {
//     // Code to run when the function is called.
// }
//
// Define the function first, then call it using its name and parentheses:
//
// function sayHello() {
//     console.log("Hello!");
// }
//
// sayHello(); // Calls the function.
//
// Writing a function definition does not run its body. Calling the function
// runs it. The parentheses in sayHello() mean "call this function."

// EXAMPLE 1: Define and call a function.
function showWelcomeMessage() {
    console.log("Welcome to JavaScript!");
}

showWelcomeMessage();

// PARAMETERS AND ARGUMENTS
//
// A parameter is a named input listed in the function definition.
// An argument is the actual value provided when the function is called.
//
// function greet(name) { // name is a parameter
//     console.log("Hello, " + name);
// }
//
// greet("Ari"); // "Ari" is an argument
//
// A function can have multiple parameters. Pass arguments in the same order.

// EXAMPLE 2: Pass a value into a function.
function greetPerson(name) {
    console.log("Hello,", name);
}

greetPerson("Ari");
greetPerson("Mina");

// EXAMPLE 3: Use two parameters to calculate a result.
function addNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

addNumbers(4, 6);

// RETURNING A VALUE
//
// return sends a value back to the place where the function was called.
// Save the returned value, use it in another calculation, or print it.
//
// return also ends the function immediately. Code after return in that same
// function does not run.
//
// console.log() displays a value, but it does not send that value back to
// the caller. Use return when you want the caller to use the result.

// EXAMPLE 4: Return a result and store it.
function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const multiplicationResult = multiplyNumbers(3, 5);
console.log("Multiplication result:", multiplicationResult);

// The returned result can be used in another expression.
console.log("Double the result:", multiplyNumbers(3, 5) * 2);

// EXAMPLE 5: Return a true/false result.
function isEven(number) {
    return number % 2 === 0;
}

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

// DEFAULT PARAMETERS
//
// A default parameter provides a value when the caller leaves that argument
// out (or passes undefined).

// EXAMPLE 6: Use a default value for an optional parameter.
function greetWithDefault(name = "there") {
    console.log("Hello,", name);
}

greetWithDefault("Sam");
greetWithDefault();

// SCOPE
//
// A variable declared inside a function belongs to that function. It cannot
// normally be accessed outside it. This is called local scope.
//
// Parameters are also local to the function.

// EXAMPLE 7: A function uses its own local variable.
function getRectangleArea(width, height) {
    const area = width * height;
    return area;
}

console.log("Rectangle area:", getRectangleArea(4, 3));

// FUNCTION EXPRESSIONS AND ARROW FUNCTIONS
//
// Functions can also be stored in variables. An arrow function is a shorter
// way to write many function expressions.
//
// Function expression:
// const double = function (number) {
//     return number * 2;
// };
//
// Equivalent arrow function with a block body:
// const double = (number) => {
//     return number * 2;
// };
//
// If an arrow function has one expression, it can use an implicit return:
// const double = (number) => number * 2;
//
// Start by getting comfortable with function declarations, parameters, and
// return. Arrow functions are another syntax for later practice.

// EXAMPLE 8: Store and call an arrow function.
const doubleNumber = (number) => number * 2;

console.log("Double 9:", doubleNumber(9));

// COMMON MISTAKES
//
// 1. Defining a function but forgetting to call it.
// 2. Calling it with the wrong number or order of arguments.
// 3. Printing a value with console.log() when you meant to return it.
// 4. Forgetting that code after return in the same function will not run.
// 5. Forgetting parentheses when calling a function.

// PRACTICE: WRITE THE FUNCTIONS YOURSELF
//
// Starter variables are provided. Write the function definition and calls in
// each work area. There are no solutions below; use the expected results to
// check your work. Try changing the starter values after solving a question.
//
// LEVEL 1 - DEFINE AND CALL
//
// 1. Define a function named printFavoriteColor that prints your favorite
//    color. Call the function once.
// Your code here:

// 2. Define a function named printGreeting that has a name parameter and
//    prints a greeting containing that name. Call it with "Jordan".
//    Expected message: Hello, Jordan!
// Your code here:

// LEVEL 2 - PARAMETERS AND RETURN VALUES
//
// 3. Define subtractNumbers(first, second) and return the first number minus
//    the second. Print the result of calling it with these values.
//    Expected: 7
const subtractFirst = 12;
const subtractSecond = 5;
// Your code here:

// 4. Define getSquare(number) and return the number multiplied by itself.
//    Expected: 49
const squareInput = 7;
// Your code here:

// 5. Define getArea(width, height) and return the rectangle's area.
//    Expected: 42
const rectangleWidth = 6;
const rectangleHeight = 7;
// Your code here:

// LEVEL 3 - CONDITIONS
//
// 6. Define isPositive(number) and return true if the number is greater than
//    zero, or false otherwise.
//    Test it with positiveInput and print the returned value.
//    Expected: true
const positiveInput = 9;
// Your code here:

// 7. Define getLargerNumber(first, second) and return whichever number is
//    larger. If they are equal, either value is fine.
//    Expected: 18
const comparisonFirst = 11;
const comparisonSecond = 18;
// Your code here:

// 8. Define getGrade(score) and return:
//    "A" for 90 or more, "B" for 80-89, "C" for 70-79,
//    and "Needs practice" for anything below 70.
//    Expected: "B"
const gradeScore = 84;
// Your code here:

// LEVEL 4 - LOOPS INSIDE FUNCTIONS
//
// 9. Define sumTo(number) and return the sum of all whole numbers from 1
//    through number. Use a loop.
//    Expected: 55
const sumToInput = 10;
// Your code here:

// 10. Define getFactorial(number) and return its factorial using a loop.
//     The factorial of 5 is 5 * 4 * 3 * 2 * 1.
//     Expected: 120
const factorialInput = 5;
// Your code here:

// 11. Define countDigits(number) and return how many digits it has.
//     Do not convert the number to a string. Assume number is positive.
//     Hint: Math.floor(number / 10) removes the last digit.
//     Expected: 5
const digitCountInput = 58304;
// Your code here:

// LEVEL 5 - LOGIC-BUILDING CHALLENGES
//
// 12. Define isPrime(number) and return true if number is prime, otherwise
//     return false. A prime is greater than 1 and is only divisible by 1
//     and itself. Use a loop to test possible divisors.
//     Expected for primeInput: true
const primeInput = 29;
// Your code here:

// 13. Define reverseNumber(number) and return its digits in reverse order.
//     Do not convert the number to a string.
//     Hint: use % 10 to get the last digit and Math.floor(number / 10) to
//     remove it. Assume number is positive.
//     Expected: 54321
const reverseInput = 12345;
// Your code here:

// 14. Define isPalindrome(number) and return true when the number reads the
//     same forwards and backwards. Do not convert it to a string.
//     Hint: save the original number, reverse a copy, and compare them.
//     Expected: true
const palindromeInput = 12321;
// Your code here:

// 15. Define isArmstrong(number) and return true if the number equals the sum
//     of each digit raised to the number of digits.
//     Example: 153 = 1^3 + 5^3 + 3^3.
//     Hint: count digits first, then process each digit using % 10 and
//     Math.floor(number / 10). Math.pow(digit, power) calculates a power.
//     Expected: true
const armstrongInput = 153;
// Your code here: