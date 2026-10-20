/* ***************COMPARISON ********************

We know many comparison operators from maths.

In JavaScript they are written like this:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
*/

// all comparision operators return aboolean value true or false

console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

// comparison result can be assigned to any variable .

let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true

//String comparison

// strings are compared letter by letter.

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

//For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We’ll get back to specific details and consequences of this in the chapter Strings.

/*  COMPARISION OF DIFFERENT TYPES:
When comparing values of different types, JavaScript converts the values to numbers.
*/
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

//For example:

console.log( true == 1 ); // true
console.log( false == 0 ); // true

// What to do if we’d like to differentiate 0 from false?

//A strict equality operator === checks the equality without type conversion.

console.log( 0 === false ); // false, because the types are different

console.log( null === undefined ); //false
console.log( null == undefined ); // true

/* For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

/*

**************SUMMARY*********************************
1) Comparison operators return a boolean value.
2) Strings are compared letter-by-letter in the “dictionary” order.
3) When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
4) The values null and undefined are equal == to themselves and each other, but do not equal any other value.
5) Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea. */