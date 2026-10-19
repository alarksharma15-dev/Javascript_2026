/* Numbers

the number type represents both integers and floating point numbers.

*/

let x = 123; // integers

x = 12.345 ; // floating point numbers.

// special numeric values

// "Infinity" , " -infinity" ,and NaN.

//examples:

//alert( 1 / 0); // infinity;

// NaN = not a number represents computational error.
// NaN is sticky . any mathemathical operation on NaN return NaN;

//alert ( NaN + 1 ); // NaN
//alert( 3 * NaN ) ; // NaN

// only one exception : alert( NaN ** 0 ) // this shows 1.

// ************** BigInt ****************//

// BigInt type was recently added to the language to represent integers of arbitrary length.

// Bigint value is created by appending "n" to the end of an integer:

const big = 12345678923456n;

// **************** strings ****************//

// A string in JS must be surrounded by quotes.

let str = "Hello";

let str2 = 'single quotes are ok too';

let phrase = `can embed another ${str}`;

// backticks are speciall quotes which allow us to embed variables and expressions into a string by wrapping them in ${}

// example:

let name = "john";

//console.log(` hello, ${name}!`); // hello , john!

// embed an expression

//console.log(` the result is ${ 1 + 2 }`); // the result is 3

// other quotes dont have this functionality.

//*****************bolean************************ */

// boolean has only two types of  values : true or false;

let namefieldchecked = true; // (1)

let agefieldchecked = false; // (0)

//boolean values also come in results of comparision:

let IsGreater = 4 > 1;

console.log(IsGreater);

/*  ****************other remaing data types ***********************
  
Null - for unknown values a standalone type that has a signed value null.

undefined - for unassigned values

symbol - for unique indentifiers.

object - for more complex data structures.

*/

/***************************THE TYPEOF OPERATOR***************** */

// THE "typeof" operator returns the type of the operand.
/*
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

**********************************

Math is a built in object which provides mathematical operations.

typeof null / "object" is an official error recognized in typeof

"null is not an object;"

and typeof alert is "function" because alert is a function , fucntion belong to the object type in JS.
but typeof treat functions differently, such behaviour is not correct but convient in practice of JS.

SYNTAX:

typeof(x) is same as typeof x;

typeof is an operator not a function.

type of always retutns a string with the name of the type.


*/

let Name = "Ilya";

console.log(`hello ${1}`);

console.log(`hello ${"name"}`);
console.log(`hello ${Name}`);