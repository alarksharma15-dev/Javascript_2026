// FOR LOOPS IN JAVASCRIPT
//
// A for loop repeats code. It is especially useful when you know how many
// times you want to repeat, or when you want to count through a range.
//
// Basic structure:
//
// for (initialization; condition; update) {
//     // Code that runs on each repetition.
// }
//
// Example:
//
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
//
// The three parts inside the parentheses are:
//   1. Initialization: let i = 1 runs once before the loop starts.
//   2. Condition:      i <= 5 is checked before every repetition.
//   3. Update:         i++ runs after each repetition.
//
// The loop stops when its condition becomes false. Make sure the update moves
// the loop toward that point, or the loop may run forever.
//
// i++ is shorthand for i = i + 1.
// i-- subtracts one. i += 2 adds two, and so on.
//
// break exits the loop immediately. continue skips to the update step and
// then checks the condition again.
//
// In these examples, the loop variable (such as i) is a counter. This lesson
// only needs basic variables, comparisons, and arithmetic.

// EXAMPLE 1: Count from 1 to 5.
for (let exampleCount = 1; exampleCount <= 5; exampleCount++) {
    console.log(exampleCount);
}

// EXAMPLE 2: Count down from 5 to 1.
for (let exampleCountdown = 5; exampleCountdown >= 1; exampleCountdown--) {
    console.log(exampleCountdown);
}

// EXAMPLE 3: Add the numbers from 1 through 5.
let exampleSum = 0;

for (let exampleNumber = 1; exampleNumber <= 5; exampleNumber++) {
    exampleSum += exampleNumber;
}

console.log("Sum:", exampleSum);

// EXAMPLE 4: Print the multiples of 3 through 15.
for (let exampleMultiple = 3; exampleMultiple <= 15; exampleMultiple += 3) {
    console.log(exampleMultiple);
}

// EXAMPLE 5: Use continue and break.
for (let exampleValue = 1; exampleValue <= 6; exampleValue++) {
    if (exampleValue === 2) {
        continue; // Skip printing 2.
    }

    if (exampleValue === 5) {
        break; // Stop before printing 5 or 6.
    }

    console.log(exampleValue);
}

// PRACTICE: WRITE THE LOOP AND LOGIC YOURSELF
//
// The starter variables are provided. Write your own for loop or logic in
// each work area. No solutions are included: use the expected result and hints
// to check your reasoning, and try different starter values after you finish.
//
// LEVEL 1 - BASICS
//
// 1. Print every number from 1 through countLimit.
//    Expected: 1, 2, 3, 4, 5, 6, 7
const countLimit = 7;
// Your code here:
    for(let i = 0; i <= 7; i++){
        console.log(i);
    }

// 2. Print the numbers from 10 down to 1.
//    Expected: 10, 9, 8, ... 1
// Your code here:
   for(let i = 10; i >= 1; i--){
    console.log(i);
   }

// 3. Print the even numbers from 2 through evenLimit.
//    Expected: 2, 4, 6, 8, 10, 12
const evenLimit = 12;
// Your code here:
        for(let i = 0; i <= evenLimit; i += 2){
            console.log(i)
        }
// LEVEL 2 - COUNTERS AND ACCUMULATORS
//
// An accumulator stores a result as the loop progresses, such as a running
// sum or count. Update it inside the loop.
//
// 4. Add all numbers from 1 through sumLimit.
//    Expected: 210
const sumLimit = 20;
let sumResult = 0;
// Your code here:
 for(let i = 0; i <= sumLimit; i++){
    sumResult += i;
 }
console.log(i);
// 5. Print the multiplication table for tableValue from 1 through 10.
//    Example output: "4 x 1 = 4" ... "4 x 10 = 40"
const tableValue = 4;
// Your code here:
    for(let i = 1; i <= 10; i++){
        console.log(tableValue, "X", i, "=",tableValue*i);
    }
// 6. Count the multiples of 3 from 1 through 12.
//    Expected: 4
let divisibleByThreeCount = 0;
// Your code here:
   for(let i = 1; i <= 12; i++){
    if(i % 3 === 0){
       divisibleByThreeCount++; 
    }
   }
   console.log(divisibleByThreeCount);
// LEVEL 3 - NUMBER LOGIC
//
// 7. Count the digits in digitCountInput using arithmetic, not a string.
//    Hint: Math.floor(number / 10) removes the last digit of a positive number.
//    Expected: 5
let digitCountInput = 58304;
let numberOfDigits = 0;
// Your code here:
for(;digitCountInput > 0; digitCountInput = Math.floor(digitCountInput / 10)){
    numberOfDigits++;
}

  console.log(numberOfDigits);

// 8. Add the even numbers from 1 through evenSumLimit.
//    Expected: 650
const evenSumLimit = 50;
let evenSum = 0;
// Your code here:
  for(let i = 1; i <= evenSumLimit; i++){
    if(i % 2 == 0){
        evenSum += i;
    }
  }
  console.log(evenSum);
// 9. Reverse the digits of numberToReverse using arithmetic.
//    Do not convert the number to a string. Expected: 54321
let numberToReverse = 12345;
let reversedNumber = 0;
// Your code here:
    for(;numberToReverse > 0; numberToReverse = Math.floor(numberToReverse / 10)){
        let digit = numberToReverse % 10;
        reversedNumber = reversedNumber * 10 + digit;
    }

    console.log(reversedNumber);
// LEVEL 4 - PROBLEM SOLVING
//
// 10. Print FizzBuzz from 1 through fizzBuzzEnd:
//     - "FizzBuzz" when divisible by both 3 and 5
//     - "Fizz" when divisible by 3
//     - "Buzz" when divisible by 5
//     - the number otherwise
//     Check divisibility by both before checking either one alone.
const fizzBuzzEnd = 15;
// Your code here:
for(let i = 1; i <= fizzBuzzEnd; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
            console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

// 11. Calculate the factorial of factorialValue.
//     5! is 5 * 4 * 3 * 2 * 1. Expected: 120
const factorialValue = 5;
let factorialAnswer = 1;
// Your code here:
    for(let i = 1; i <= factorialValue; i++){
        factorialAnswer *= i;
    }
    console.log(factorialAnswer);

// LEVEL 5 - CHALLENGES
//
// 12. Print every prime number from 2 through primeLimit.
//     A prime number is greater than 1 and only divisible by 1 and itself.
//     Hint: for each candidate, try dividing by numbers from 2 up to its
//     square root. Use a boolean variable to track whether it is prime.
const primeLimit = 30;
// Your code here:
for (let candidate = 2; candidate <= primeLimit; candidate++) {
    let isPrime = true;

    for (let divisor = 2; divisor < candidate; divisor++) {
        if (candidate % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(candidate);
    }
}

// 13. Print this right triangle using nested loops:
//     *
//     **
//     ***
//     ****
//     Hint: use one loop for each row and another loop to build the row.
const triangleHeight = 4;
// Your code here:


// LEVEL 6 - INTERVIEW-STYLE NUMBER PROBLEMS
//
// 14. Check whether palindromeInput is a palindrome number.
//     A palindrome reads the same forwards and backwards (for example, 121).
//     Do not convert it to a string. Print true or false.
//     Hint: reverse the digits, then compare the reversed value to the original.
const palindromeInput = 12321;
// Your code here:

// 15. Check whether armstrongInput is an Armstrong number.
//     Add each digit raised to the number of digits. If the sum equals the
//     original number, it is an Armstrong number.
//     Example: 153 = 1^3 + 5^3 + 3^3. Print true or false.
//     Hint: Math.pow(digit, numberOfDigits) raises a number to a power.
const armstrongInput = 153;
// Your code here:

// 16. Find the greatest common divisor (GCD) of gcdFirst and gcdSecond.
//     Expected: 6
//     Hint: try the Euclidean algorithm: repeatedly replace the pair with
//     (second number, remainder) until the remainder is 0.
let gcdFirst = 48;
let gcdSecond = 18;
// Your code here:

// 17. Find the least common multiple (LCM) of lcmFirst and lcmSecond.
//     Expected: 42
//     Hint: the LCM is the smallest positive number divisible by both inputs.
//     Try increasing a candidate until it is divisible by both.
const lcmFirst = 6;
const lcmSecond = 14;
// Your code here:

// 18. Check whether perfectNumber is a perfect number.
//     A perfect number equals the sum of its positive divisors, excluding
//     itself. For example, 28 = 1 + 2 + 4 + 7 + 14. Print true or false.
const perfectNumber = 28;
// Your code here:

// 19. Print all the prime factors of factorInput.
//     Expected: 2, 2, 3, 7
//     Hint: repeatedly divide by a candidate factor while it divides evenly.
//     When it no longer divides, try the next candidate.
let factorInput = 84;
// Your code here:

// LEVEL 7 - NESTED LOOPS AND PATTERNS
//
// 20. Print an inverted right triangle:
//     ****
//     ***
//     **
//     *
//     Use nested loops to build each row.
const invertedTriangleHeight = 4;
// Your code here:

// 21. Print this number pattern using nested loops:
//     1
//     12
//     123
//     1234
//     Hint: the inner loop's number is also the value to add to the row string.
const numberPatternHeight = 4;
// Your code here:

// 22. Print a centered pyramid with pyramidHeight rows:
//        *
//       ***
//      *****
//     *******
//     Hint: each row has leading spaces and an odd number of stars.
const pyramidHeight = 4;
// Your code here:

// FINAL CHALLENGE - PUT THE PIECES TOGETHER
//
// 23. Find the second-largest distinct digit in challengeNumber.
//     Expected: 5
//     Hint: inspect one digit at a time with % 10 and Math.floor(number / 10).
//     Keep track of the largest and second-largest digits as you go. Do not
//     convert the number to a string or use an array.
const challengeNumber = 583828;
// Your code here: