// ************ OPERATORS ***********//


// if the binary "+" is used with strings , it merges ( concatenates ) them:

let str1 = "hello";
let str2 = " alark";

let str3 = str1  + str2;

console.log(str3); // hello alark;

let s = "my" + "string";
console.log(s); // mystring

// if any of the operand is string then other is converted to string.

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log( 2 + 2 + '1' ); // "41"


console.log(+true); // 1;

console.log(+""); // 0;

// we can assign multiple varaibles with same value at once side by side with"="

let a, b, c;

a = b = c = 2+2; // now all have the value of 4;

// increment and decrement operators

/*

Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

Increment ++ increases a variable by 1:
*/

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); // 3

counter--;        // works the same as counter = counter - 1, but is shorter
console.log( counter ); // 2

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

/*
The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter.
*/

