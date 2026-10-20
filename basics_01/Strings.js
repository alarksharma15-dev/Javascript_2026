/************************STRINGS************** */

// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.

// String interpolation means putting a value inside a string.
// Template literals use backticks (`) and ${...} to insert values.
const playerName = "Alark";
const gameName = "Minecraft-java";
console.log(`${playerName}'s favorite game is ${gameName}.`);

// `new String(...)` creates a String object, not an array.
// An object can have properties and methods; an array is a special kind of
// object used to hold an ordered list of values.
const gameNameObject = new String("Alark");

// Usually, write strings with quotes instead of `new String(...)`.
// This makes a primitive string, which is simpler to use.
const simpleGameName = "Alark";
console.log(typeof simpleGameName); // "string"

// strings  have a lot of methods or functions


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('e'));

console.log(gameName.length);

console.log(gameName.substring(0,4));

console.log(gameName.slice(-4,4));