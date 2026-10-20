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


/**************** STRING METHOD PRACTICE ****************/

// String methods help you clean, check, search, and change text.
// They return a result; they do not change the original string.

// ACTIVITY 1: Clean user input.
// trim() removes spaces at the beginning and end.
// toLowerCase() makes all letters lowercase.
// Change rawEmail and run the file again to see the result.
const rawEmail = "  ALARK@example.com  ";
const cleanEmail = rawEmail.trim().toLowerCase();
console.log("Clean email:", cleanEmail);

// ACTIVITY 2: Check text.
// includes() checks if some text is present and returns true or false.
// startsWith() and endsWith() check the beginning and end of a string.
// Try changing apiPath and check how the answers change.
const apiPath = "/api/users/42";
console.log("Has users?", apiPath.includes("users"));
console.log("Starts with /api?", apiPath.startsWith("/api"));
console.log("Ends with 42?", apiPath.endsWith("42"));

// ACTIVITY 3: Change or take part of a string.
// replace() replaces the first matching piece of text.
// slice() takes part of a string. The ending position is not included.
// Try changing the search text or the slice positions.
const fileName = "profile-photo.png";
console.log("Updated name:", fileName.replace("photo", "avatar"));
console.log("First 7 letters:", fileName.slice(0, 7));
console.log("Last 3 letters:", fileName.slice(-3));

// ACTIVITY 4: Split text into a list.
// split() divides a string wherever it finds the separator you give it.
// Try changing the colors or the comma separator.
const colorText = "red,green,blue";
const colors = colorText.split(",");
console.log("Color list:", colors);
console.log("Second color:", colors[1]);

// ACTIVITY 5: Find matching text and format a number.
// match() can find patterns; this example collects all groups of digits.
// padStart() adds characters to the beginning until the string is long enough.
// Try changing the order ID and invoice number.
const orderId = "order-2026-104";
console.log("Numbers in order ID:", orderId.match(/\d+/g));

const invoiceNumber = "42";
console.log("Formatted invoice:", invoiceNumber.padStart(5, "0"));