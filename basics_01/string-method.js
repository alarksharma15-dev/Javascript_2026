// JAVASCRIPT STRING METHODS
//
// A string is text written inside quotes, for example "Hello".
// String methods perform actions on text and return a result.
// Strings are immutable: these methods do not change the original string.
// To keep a changed result, assign it to a variable.
//
// The length property is useful with strings, but it is not a method:
//   text.length       // property: no parentheses
//   text.toUpperCase() // method: parentheses

// EXAMPLE 1: Change letter casing.
const greeting = "Hello, JavaScript!";

// toUpperCase() returns a new string with all letters in uppercase.
console.log(greeting.toUpperCase());

// toLowerCase() returns a new string with all letters in lowercase.
console.log(greeting.toLowerCase());

// The original string stays the same because strings are immutable.
console.log(greeting);

// EXAMPLE 2: Remove whitespace from the beginning and end of a string.
const messyInput = "   learn JavaScript   ";

// trim() returns a new string without leading or trailing whitespace.
// It does not remove spaces between words.
const cleanInput = messyInput.trim();
console.log(cleanInput);

// EXAMPLE 3: Check whether text contains a smaller piece of text.
const announcement = "The library closes at six.";

// includes() returns true if the exact text is found, otherwise false.
// This search is case-sensitive.
console.log(announcement.includes("library"));

// startsWith() returns true if the string begins with the given text.
console.log(announcement.startsWith("The"));

// endsWith() returns true if the string ends with the given text.
console.log(announcement.endsWith("."));

// EXAMPLE 4: Find text and extract part of a string.
const filename = "holiday-photo.jpg";

// indexOf() returns the position of the first match, or -1 if it is not found.
const dotPosition = filename.indexOf(".");
console.log("The dot is at position:", dotPosition);

// slice(start, end) returns part of a string from start up to (but not including) end.
// Here, using the dot position as the start extracts the extension, including the dot.
const extension = filename.slice(dotPosition);
console.log("File extension:", extension);

// EXAMPLE 5: Replace text.
const sentence = "I like cats.";

// replace() returns a new string with the first matching text replaced.
// The original sentence remains unchanged.
const newSentence = sentence.replace("cats", "dogs");
console.log(newSentence);
console.log(sentence);

// EXAMPLE 6: Split a string into an array.
const colorsText = "red,green,blue";

// split(",") separates the string wherever a comma appears and returns an array.
const colors = colorsText.split(",");
console.log(colors);

// EXAMPLE 7: Normalize user input before comparing it.
const submittedUsername = "  SkyWalker  ";

// trim() removes extra whitespace around the input.
// toLowerCase() makes the comparison case-insensitive for this example.
// This creates a normalized copy; submittedUsername is unchanged.
const normalizedUsername = submittedUsername.trim().toLowerCase();
console.log(normalizedUsername);

// In a real backend, first check that incoming data is the expected type
// (for example, a string) before calling string methods on it.
// Normalizing text is not a replacement for authentication or authorization.

// EXAMPLE 8: Replace every occurrence of text.
const csvLine = "apple, pear,apple, orange";

// replaceAll() replaces every exact match and returns a new string.
// Here, all spaces are removed; this is useful for this simple CSV-like example.
const compactCsvLine = csvLine.replaceAll(" ", "");
console.log(compactCsvLine);

// EXAMPLE 9: Split and clean a list of values.
const tagsText = " javascript, backend , web ";

// split(",") makes an array; map() then trims whitespace from every item.
// split() is a string method; map() is an array method used on its result.
const tags = tagsText.split(",").map((tag) => tag.trim());
console.log(tags);

// EXAMPLE 10: Make a simple URL-friendly slug.
const articleTitle = "  Learning String Methods  ";

// trim() removes outside whitespace, toLowerCase() standardizes letter case,
// and replace() changes one or more whitespace characters into hyphens.
// This is a simple example, not a complete slug or URL security solution.
const slug = articleTitle.trim().toLowerCase().replace(/\s+/g, "-");
console.log(slug);

// EXAMPLE 11: Format a numeric identifier as a fixed-width string.
const invoiceNumber = 27;

// padStart(5, "0") adds leading zeroes until the string is five characters long.
// It returns a string, so this changes the display format, not the numeric value.
const invoiceCode = String(invoiceNumber).padStart(5, "0");
console.log(invoiceCode);

// EXAMPLE 12: Extract a preview from a longer text.
const longDescription = "JavaScript strings are used throughout web applications.";

// slice(0, 20) returns characters from index 0 up to (but not including) index 20.
const preview = longDescription.slice(0, 20);
console.log(preview);

// EXAMPLE 13: Find groups of digits in a string.
const orderText = "Order 583 is packed in box 24.";

// match() returns an array of matching pieces, or null if there are no matches.
// The /g flag finds all groups of one or more digits.
const numbersInOrder = orderText.match(/\d+/g);
console.log(numbersInOrder);

// PRACTICE EXERCISES
//
// Replace each TODO placeholder with an expression that uses the requested
// string method or property. Then run the file and inspect the results.
//
// 1. Clean a display name
//    Remove extra spaces around the name and make it uppercase.
//
// 2. Extract a file extension
//    Find the dot in the filename and use slice() to get the extension.
//    The extension should include the dot, such as ".png".
//
// 3. Check a message
//    Use includes() to check whether the message contains the word "urgent".
//    Store and print the resulting true or false value.
//
// 4. Make a simple replacement
//    Replace "sunny" with "cloudy" in the weather sentence.
//    Print the changed sentence and the original sentence to see the difference.
//
// 5. Count words
//    Use trim() and split() to turn the sentence into an array of words.
//    Then use the array's length property to print how many words it contains.
//
// 6. Normalize a username
//    Remove surrounding whitespace and make the username lowercase before
//    comparing or displaying it.
//
// 7. Parse a comma-separated list
//    Split the list at commas and trim each item so there are no extra spaces.
//
// 8. Create a slug
//    Trim a title, make it lowercase, and replace runs of whitespace with "-".
//
// 9. Format an order code
//    Convert the number to a string and use padStart() to make it six characters
//    long, filling the start with zeroes.
//
// 10. Create a text preview
//     Use slice() to keep only the first 25 characters of a description.
//
// 11. Find all numbers in text
//     Use match() with a regular expression to collect digit groups. Remember
//     match() can return null when nothing matches.

//++++++++++++++++++++++++++++++ PRACTICE CODE ++++++++++++++++++++++++++++++

// Exercise 1: Clean a display name using trim() and toUpperCase().
const rawName = "   Jordan Lee   ";
const displayName = /* TODO: clean and uppercase rawName */ "";
console.log(displayName);

// Exercise 2: Extract the extension from a filename using indexOf() and slice().
const practiceFilename = "notes.txt";
const practiceDotPosition = /* TODO: find the position of "." */ 0;
const practiceExtension = /* TODO: slice from the dot position */ "";
console.log(practiceExtension);

// Exercise 3: Check whether a message contains "urgent" using includes().
const message = "Please send the urgent report today.";
const containsUrgent = /* TODO: check the message */ false;
console.log(containsUrgent);

// Exercise 4: Replace "sunny" with "cloudy" using replace().
const weatherSentence = "It is sunny outside.";
const changedWeather = /* TODO: replace the weather word */ "";
console.log("Changed:", changedWeather);
console.log("Original:", weatherSentence);

// Exercise 5: Count words using trim(), split(), and the length property.
const sentenceToCount = "  Strings are useful in JavaScript.  ";
const words = /* TODO: trim and split the sentence into words */ [];
const wordCount = /* TODO: get the number of words */ 0;
console.log("Word count:", wordCount);

// Exercise 6: Normalize the username by trimming it and converting it to lowercase.
const usernameInput = "  Casey99  ";
const normalizedUser = /* TODO: normalize usernameInput */ "";
console.log(normalizedUser);

// Exercise 7: Split the comma-separated items and trim each item.
const itemsInput = " tea, coffee , cocoa ";
const items = /* TODO: split on commas and trim each item */ [];
console.log(items);

// Exercise 8: Create a simple slug from the title.
const titleInput = "  My First Web Project  ";
const titleSlug = /* TODO: trim, lowercase, and replace spaces with hyphens */ "";
console.log(titleSlug);

// Exercise 9: Make a six-character order code padded with leading zeroes.
const orderId = 482;
const orderCode = /* TODO: convert orderId to a string and use padStart() */ "";
console.log(orderCode);

// Exercise 10: Keep only the first 25 characters of the description.
const description = "String methods make text processing easier in JavaScript.";
const descriptionPreview = /* TODO: use slice() to get the first 25 characters */ "";
console.log(descriptionPreview);

// Exercise 11: Extract every group of digits from the text with match().
const logLine = "User 42 placed order 9081";
const extractedNumbers = /* TODO: use match() with a global digit pattern */ [];
console.log(extractedNumbers);