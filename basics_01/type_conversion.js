/*

TYPE CONVERSIONS

alert automatically converts any value to a string to show it.
maathematical operators converts values to numbers.

**********STRING CONVERSION ********************

string conversion happens when we need the string form of a value.
*/
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// string converion is mostly obvvious . A false becomes"false" and a null becomes "null".

/* **************NUMERIC CONVERSION *************/

// numeric conversion in maths happen automatically.

// example:

console.log("6" / "2"); // 3, strings are converted into nummbers.

// we use the Number(value) function to explicitily convert a value to number:

let str = "123";

console.log(typeof str); //string

let num = Number(str); // str becomes a number 123;

console.log(typeof num); // number

// it is required to convert to string when we read a value from a string based source like a text form but expect a number to be entered;

// if string is not a valid number , the result of such a conversion is NaN;

let age = Number("an name of a math string");

console.log(age); // NaN conversion failed


console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN


// ******************BOOLEAN CONVERSION *******************

// VALUES THAT ARE INTUITIVELY EMPTY , like 0,and empty string, null, undefined , and NaN becomes false.
// other values become true.

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

console.log( Boolean("0") ) // true . a non empty string is always true in JS.
console.log( Boolean("  ") ); // true , spaces too are considered true  nogt empty.

// "33" => 33
// "33abc" => NaN
// "true" => 1  and 'false' => 0

