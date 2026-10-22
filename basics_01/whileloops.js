// WHILE LOOPS IN JAVASCRIPT
//
// A while loop repeats a block of code as long as its condition is true.
// JavaScript checks the condition before every repetition, so the loop body
// might run zero times if the condition starts out false.
//
// Basic structure:
//
// while (condition) {
//     // Code to repeat.
//     // Update something so the condition can eventually become false.
// }
//
// A common pattern is to start a counter, check it in the condition, and
// change it inside the loop:
//
// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }
//
// Make sure the loop can finish. If its condition never becomes false and
// there is no break, the loop will run forever (an infinite loop).
//
// Use a while loop when you want to repeat while a condition remains true,
// especially when you do not know in advance how many repetitions are needed.
// A for loop can be clearer when the number of repetitions is known.
//
// break immediately exits a loop. continue skips the rest of the current
// repetition and checks the condition again.

// EXAMPLE 1: Count from 1 to 5.
let count = 1;

while (count <= 5) {
    console.log(count);
    count++; // Increase count so the condition eventually becomes false.
}

// EXAMPLE 2: Count down to launch.
let countdown = 3;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

console.log("Launch!");

// EXAMPLE 3: Add the numbers from 1 through 5.
let numberToAdd = 1;
let total = 0;

while (numberToAdd <= 5) {
    total += numberToAdd;
    numberToAdd++;
}

console.log("The total is:", total);

// EXAMPLE 4: Use continue to skip an even number.
let oddNumber = 0;

while (oddNumber < 5) {
    oddNumber++;

    if (oddNumber === 3) {
        continue; // Skip console.log for 3 and start the next repetition.
    }

    console.log(oddNumber);
}

// EXAMPLE 5: Use break to stop when a value is found.
const values = [4, 7, 9, 12];
let index = 0;

while (index < values.length) {
    if (values[index] === 9) {
        console.log("Found 9 at index", index);
        break;
    }

    index++;
}

// DO...WHILE LOOPS
//
// A do...while loop checks its condition after running the body. This means
// its body always runs at least once.
//
// do {
//     // Code to run at least once.
// } while (condition);
//
// The semicolon after the while condition is part of the do...while syntax.

// EXAMPLE 6: This message prints once even though the condition is false.
let attempts = 0;

do {
    console.log("This runs at least once.");
    attempts++;
} while (attempts < 0);

// PRACTICE EXERCISES
//
// 1. Count up
//    Use a while loop to print the numbers from 1 through 10.
//
// 2. Even numbers
//    Use a while loop to print the even numbers from 2 through 20.
//
// 3. Sum to a limit
//    Add all whole numbers from 1 through 100, then print the total.
//
// 4. Reverse countdown
//    Start with 5. Print each number down to 1, then print "Go!".
//
// 5. Find a name
//    Use a while loop to search the names array below for "Mina".
//    Print the index if found, and stop searching with break.

//++++++++++++++++++++++++++++++ PRACTICE ANSWERS ++++++++++++++++++++++++++++++

// Exercise 1: Count up
let countToTen = 1;

while (countToTen <= 10) {
    console.log(countToTen);
    countToTen++;
}

// Exercise 2: Even numbers
let evenNumber = 2;

while (evenNumber <= 20) {
    console.log(evenNumber);
    evenNumber += 2;
}

// Exercise 3: Sum to a limit
let sumNumber = 1;
let sumToOneHundred = 0;

while (sumNumber <= 100) {
    sumToOneHundred += sumNumber;
    sumNumber++;
}

console.log("The sum from 1 to 100 is:", sumToOneHundred);

// Exercise 4: Reverse countdown
let reverseCountdown = 5;

while (reverseCountdown >= 1) {
    console.log(reverseCountdown);
    reverseCountdown--;
}

console.log("Go!");

// Exercise 5: Find a name
const names = ["Ari", "Jo", "Mina", "Sam"];
let nameIndex = 0;
let foundMina = false;

while (nameIndex < names.length) {
    if (names[nameIndex] === "Mina") {
        console.log("Mina was found at index", nameIndex);
        foundMina = true;
        break;
    }

    nameIndex++;
}

if (!foundMina) {
    console.log("Mina was not found.");
}

//++++++++++++++++++++++++++++++ WRITE IT YOURSELF ++++++++++++++++++++++++++++++
//
// For these exercises, the variables and starter values are provided.
// Write the while-loop syntax and logic yourself in each work area.
// Try the exercises before looking at the solutions below.
//
// EASY
//
// 1. Print from 1 up to limit.
//    Expected output: 1, 2, 3, 4, 5, 6
const easyLimit = 6;
let easyCounter = 1;
// Your code here:
 while(easyCounter <= easyLimit){
    console.log(easyCounter);
    easyCounter++;
 }

// 2. Print the odd numbers from 1 through oddLimit.
//    Expected output: 1, 3, 5, 7, 9
const oddLimit = 9;
let oddCounter = 1;
// Your code here:
 while(oddCounter <= oddLimit){
    console.log(oddCounter);
        oddCounter += 2;
    
 }

// 3. Add all numbers from 1 through sumLimit.
//    Print the final sum. Expected output: 55
const sumLimit = 10;
let nextNumber = 1;
let runningSum = 0;
// Your code here:
 while(nextNumber <= sumLimit ){
    runningSum += nextNumber;
    nextNumber++;
 }
 console.log("Sum :",runningSum);

// MEDIUM
//
// 4. Print the multiplication table for tableNumber from 1 through 10.
//    Example: "7 x 1 = 7" ... "7 x 10 = 70"
const tableNumber = 7;
let tableMultiplier = 1;
// Your code here:
 while(tableMultiplier <= 10){
    console.log(tableNumber, "x", tableMultiplier, "=", tableMultiplier*tableNumber)
    tableMultiplier++;
 }

// 5. Count how many digits are in digitNumber.
//    Do not convert the number to a string. Expected output: 5
let digitNumber = 48271;
let digitCount = 0;
// Your code here:
 while(digitNumber >= 1){
    digitNumber = Math.floor(digitNumber / 10);
    digitCount++;
 }
 console.log("digitcount :",digitCount);

// 6. Reverse the digits of numberToReverse.
//    Do not convert the number to a string. Expected output: 54321
let numberToReverse = 12345;
let reversedNumber = 0;
// Your code here:
while (numberToReverse > 0) {
    const lastDigit = numberToReverse % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    numberToReverse = Math.floor(numberToReverse / 10);
}

// INTERVIEW-STYLE LOGIC BUILDING
//
// 7. Calculate the factorial of factorialInput.
//    5! means 5 * 4 * 3 * 2 * 1. Expected output: 120
const factorialInput = 5;
let factorialCounter = 1;
let factorialResult = 1;
// Your code here:
while (factorialCounter <= factorialInput) {
    factorialResult *= factorialCounter;
    factorialCounter++;
}

// 8. Print FizzBuzz from 1 through fizzBuzzLimit:
//    - "FizzBuzz" for multiples of both 3 and 5
//    - "Fizz" for multiples of 3
//    - "Buzz" for multiples of 5
//    - the number otherwise
//    Check the multiple-of-both case before the individual cases.
const fizzBuzzLimit = 15;
let fizzBuzzNumber = 1;
// Your code here:
while (fizzBuzzNumber <= fizzBuzzLimit) {
    if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
        console.log("FizzBuzz");
    } else if (fizzBuzzNumber % 3 === 0) {
        console.log("Fizz");
    } else if (fizzBuzzNumber % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(fizzBuzzNumber);
    }

    fizzBuzzNumber++;
}
// 9. Find the largest number in the array without using Math.max().
//    Expected output: 42
const numbersToSearch = [12, 5, 42, 19, 8];
let searchIndex = 0;
let largestNumber = numbersToSearch[0];
// Your code here:
while (searchIndex < numbersToSearch.length) {
    if (numbersToSearch[searchIndex] > largestNumber) {
        largestNumber = numbersToSearch[searchIndex];
    }

    searchIndex++;
}

console.log("Largest number:", largestNumber);


//++++++++++++++++++++++++++++++ EXTRA EXERCISE SOLUTIONS ++++++++++++++++++++++++++++++
//
// Compare your attempt with the solutions below after you have tried each one.

// Exercise 1: Print from 1 up to easyLimit.
while (easyCounter <= easyLimit) {
    console.log(easyCounter);
    easyCounter++;
}

// Exercise 2: Print odd numbers through oddLimit.
while (oddCounter <= oddLimit) {
    console.log(oddCounter);
    oddCounter += 2;
}

// Exercise 3: Sum numbers from 1 through sumLimit.
while (nextNumber <= sumLimit) {
    runningSum += nextNumber;
    nextNumber++;
}

console.log("Sum:", runningSum);

// Exercise 4: Print a multiplication table.
while (tableMultiplier <= 10) {
    console.log(tableNumber, "x", tableMultiplier, "=", tableNumber * tableMultiplier);
    tableMultiplier++;
}

// Exercise 5: Count digits using division by 10.
while (digitNumber >= 1) {
    digitNumber = Math.floor(digitNumber / 10);
    digitCount++;
}

console.log("Digit count:", digitCount);

// Exercise 6: Reverse digits using the remainder and division operators.
while (numberToReverse > 0) {
    const lastDigit = numberToReverse % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    numberToReverse = Math.floor(numberToReverse / 10);
}

console.log("Reversed number:", reversedNumber);

// Exercise 7: Calculate a factorial.
while (factorialCounter <= factorialInput) {
    factorialResult *= factorialCounter;
    factorialCounter++;
}

console.log("Factorial:", factorialResult);

// Exercise 8: Print FizzBuzz.
while (fizzBuzzNumber <= fizzBuzzLimit) {
    if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
        console.log("FizzBuzz");
    } else if (fizzBuzzNumber % 3 === 0) {
        console.log("Fizz");
    } else if (fizzBuzzNumber % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(fizzBuzzNumber);
    }

    fizzBuzzNumber++;
}

// Exercise 9: Find the largest value in an array.
while (searchIndex < numbersToSearch.length) {
    if (numbersToSearch[searchIndex] > largestNumber) {
        largestNumber = numbersToSearch[searchIndex];
    }

    searchIndex++;
}

console.log("Largest number:", largestNumber);