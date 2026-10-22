// ARRAYS IN JAVASCRIPT
//
// An array stores an ordered list of values in one variable. Arrays are useful
// when you have a group of related values, such as scores, names, or tasks.
//
// Create an array with square brackets. Separate each item with a comma:
//
// const colors = ["blue", "green", "purple"];
// const scores = [82, 95, 74];
//
// Arrays can contain different types of values, but beginners usually find it
// easier to work with arrays where the items have the same kind of meaning.

// EXAMPLE 1: Create and print an array.
const exampleColors = ["blue", "green", "purple"];

console.log(exampleColors);

// INDEXES: GETTING ONE ITEM
//
// Each item has a position called an index. JavaScript indexes start at 0:
//   index 0 is the first item
//   index 1 is the second item
//   index 2 is the third item
//
// Use arrayName[index] to read an item.
// The last item's index is arrayName.length - 1.
// arrayName.length tells you how many items are in the array.

// EXAMPLE 2: Read items by index.
const exampleAnimals = ["cat", "dog", "rabbit"];

console.log("First animal:", exampleAnimals[0]);
console.log("Second animal:", exampleAnimals[1]);
console.log("Number of animals:", exampleAnimals.length);
console.log("Last animal:", exampleAnimals[exampleAnimals.length - 1]);

// CHANGE AN ITEM
//
// Arrays can be changed after they are created. Assign a new value at an index
// to replace the item at that position.
//
// A const array variable cannot be reassigned to a completely different array,
// but its contents can still be changed.

// EXAMPLE 3: Replace an item.
const exampleSnacks = ["apple", "chips", "yogurt"];

exampleSnacks[1] = "popcorn";
console.log(exampleSnacks);

// ADD AND REMOVE ITEMS AT THE END
//
// push(item) adds an item to the end of an array.
// pop() removes and returns the last item.
//
// These methods change the original array.

// EXAMPLE 4: Add and remove items at the end.
const exampleQueue = ["first", "second"];

exampleQueue.push("third");
console.log("After push:", exampleQueue);

const removedLastItem = exampleQueue.pop();
console.log("Removed:", removedLastItem);
console.log("After pop:", exampleQueue);

// ADD AND REMOVE ITEMS AT THE START
//
// unshift(item) adds an item to the beginning of an array.
// shift() removes and returns the first item.
// These methods also change the original array.
// Both may need to move the other items to new indexes, so push() and pop()
// are generally preferable when you can add or remove items at the end.

// EXAMPLE 5: Add and remove items at the start.
const exampleLine = ["B", "C"];

exampleLine.unshift("A");
console.log("After unshift:", exampleLine);

const removedFirstItem = exampleLine.shift();
console.log("Removed:", removedFirstItem);
console.log("After shift:", exampleLine);

// CHECK WHETHER AN ITEM EXISTS
//
// includes(item) returns true if the array contains that item, otherwise false.
// indexOf(item) returns the item's index, or -1 if it is not in the array.
//
// For strings, these checks are case-sensitive: "Mango" and "mango" differ.

// EXAMPLE 6: Search an array.
const exampleFruits = ["apple", "mango", "orange"];

console.log("Has mango?", exampleFruits.includes("mango"));
console.log("Index of orange:", exampleFruits.indexOf("orange"));
console.log("Index of pear:", exampleFruits.indexOf("pear"));

// LOOP THROUGH AN ARRAY
//
// A for loop with an index is useful when you need each item's position:
//
// for (let index = 0; index < items.length; index++) {
//     console.log(index, items[index]);
// }
//
// Start at index 0. Keep going while index < items.length. Increase index
// after each repetition. Using <= items.length would go one index too far.

// EXAMPLE 7: Print every item and its index.
const exampleCities = ["Tokyo", "Lima", "Cairo"];

for (let cityIndex = 0; cityIndex < exampleCities.length; cityIndex++) {
    console.log(cityIndex, exampleCities[cityIndex]);
}

// If you only need each value and do not need its index, for...of is shorter:
for (const city of exampleCities) {
    console.log("City:", city);
}

// MORE USEFUL ARRAY METHODS
//
// Some array methods change the original array. Others return a new value or
// array and leave the original alone. Knowing which kind a method is helps
// prevent accidental changes.
//
// CHANGES THE ORIGINAL ARRAY:
//   push(), pop(), unshift(), shift(), splice()
//
// DOES NOT CHANGE THE ORIGINAL ARRAY:
//   includes(), indexOf(), join(), slice(), concat(), flat()
//   The spread operator also creates a new array when used in an array literal.

// JOIN: MAKE ONE STRING
//
// join(separator) combines the array items into one string, placing the
// separator between items. It returns a string and does not change the array.
// If no separator is provided, JavaScript uses a comma.

// EXAMPLE 8: Join words with a space.
const exampleWords = ["Learning", "arrays", "is", "useful"];
const sentence = exampleWords.join(" ");

console.log("Joined sentence:", sentence);
console.log("Original words:", exampleWords);

// SLICE: COPY PART OF AN ARRAY
//
// slice(start, end) returns a shallow copy of part of an array.
// The start index is included, but the end index is not included.
// It does not change the original array.
//
// slice() with no arguments makes a shallow copy of the whole array.

// EXAMPLE 9: Copy items from index 1 up to (but not including) index 3.
const exampleLetters = ["a", "b", "c", "d"];
const copiedLetters = exampleLetters.slice(1, 3);

console.log("Copied section:", copiedLetters); // ["b", "c"]
console.log("Original letters:", exampleLetters);

// SPLICE: REMOVE, INSERT, OR REPLACE
//
// splice(start, deleteCount, itemsToInsert...) directly changes the original
// array. It returns a new array containing the items that were removed.
//
// To remove:   splice(startIndex, numberToRemove)
// To insert:   splice(startIndex, 0, newItem)
// To replace:  splice(startIndex, numberToRemove, replacementItem)
//
// Be careful: unlike slice(), splice() changes the original array.

// EXAMPLE 10: Remove one item at index 1.
const examplePlanets = ["Mercury", "Venus", "Earth", "Mars"];
const removedPlanets = examplePlanets.splice(1, 1);

console.log("Removed planet:", removedPlanets);
console.log("Planets after removal:", examplePlanets);

// EXAMPLE 11: Insert and replace items with splice().
const exampleDays = ["Monday", "Wednesday"];

exampleDays.splice(1, 0, "Tuesday"); // Insert without removing anything.
console.log("After insert:", exampleDays);

exampleDays.splice(0, 1, "Sunday"); // Replace one item at index 0.
console.log("After replace:", exampleDays);

// CONCAT: COMBINE ARRAYS INTO A NEW ARRAY
//
// concat() combines arrays and/or values and returns a new array.
// It does not change the original arrays.

// EXAMPLE 12: Combine two arrays with concat().
const firstGroup = ["red", "blue"];
const secondGroup = ["green", "yellow"];
const combinedGroups = firstGroup.concat(secondGroup);

console.log("Combined:", combinedGroups);
console.log("First original array:", firstGroup);
console.log("Second original array:", secondGroup);

// SPREAD SYNTAX: ANOTHER WAY TO COMBINE OR COPY
//
// The spread syntax (...) expands an array's items where individual values
// are expected. In an array literal, it can copy or combine arrays.
// The result is a new, shallow array; the source arrays are not changed.

// EXAMPLE 13: Combine arrays and add an item using spread syntax.
const warmColors = ["red", "orange"];
const coolColors = ["blue", "green"];
const allColors = [...warmColors, "purple", ...coolColors];

console.log("All colors:", allColors);
console.log("Warm colors remain:", warmColors);

// FLAT: FLATTEN NESTED ARRAYS
//
// flat(depth) returns a new array with nested arrays flattened by the given
// depth. The default depth is 1. Use Infinity to flatten all nesting levels.
// The original nested array is not changed.

// EXAMPLE 14: Flatten one level or every level.
const nestedNumbers = [1, [2, 3], [4, [5, 6]]];

console.log("Flat by one level:", nestedNumbers.flat());
console.log("Flat completely:", nestedNumbers.flat(Infinity));
console.log("Original nested array:", nestedNumbers);

// CHECK AND CREATE ARRAYS
//
// Array.isArray(value) returns true if value is an array and false otherwise.
//
// Array.from(value) creates a new array from an iterable (such as a string) or
// an array-like object (an object with a length and numbered properties).
// For example, Array.from("cat") creates ["c", "a", "t"].
//
// Array.of(value1, value2, ...) creates a new array from the values provided.
// It is useful when you want each argument to become an array item.

// EXAMPLE 15: Check a value and create arrays.
const valueToCheck = ["tea", "coffee"];

console.log("Is this an array?", Array.isArray(valueToCheck));
console.log("Is this a string an array?", Array.isArray("tea"));
console.log("Characters:", Array.from("cat"));
console.log("Items made with Array.of:", Array.of(3, 8, 12));

// Array.from() can also take a mapping function as its second argument.
// This example creates [0, 1, 4, 9] by squaring each number from 0 through 3.
const squaredValues = Array.from([0, 1, 2, 3], (number) => number * number);
console.log("Squared values:", squaredValues);

// NOTE: Array.from("cat") and [..."cat"] both create character arrays.
// Array.of(3) creates [3]. Avoid using Array(3) as a beginner: it creates an
// empty array with length 3, which can be confusing.

// ARRAY METHODS: A PREVIEW
//
// Methods such as forEach(), map(), and filter() are also common ways to
// process arrays. They use callback functions and are worth learning after
// you are comfortable with the methods and loops in this lesson.
//
// COMMON BEGINNER MISTAKES
//
// 1. Using index 1 when you mean the first item (the first index is 0).
// 2. Trying to read an item at an index that does not exist; this gives
//    undefined.
// 3. Looping while index <= items.length; the last valid index is length - 1.
// 4. Assuming push(), pop(), shift(), or unshift() leaves the array unchanged.
// 5. Forgetting that includes() and indexOf() are case-sensitive for strings.

// PRACTICE: WRITE THE ARRAY CODE YOURSELF
//
// The starter arrays are provided. Write the code in each work area.
// There are no solutions below. Check your result by running the file, and
// try changing the starter values to see if your code still works.
//
// LEVEL 1 - CREATE, READ, AND UPDATE
//
// 1. Create an array named favoriteFoods containing three foods, then print it.
// Your code here:
const favoriteFoods = ["veggies", "paneer", "cake"];
// 2. Print the first and last names from this array.
const practiceNames = ["Ava", "Noah", "Mia", "Leo"];
// Your code here:
console.log(practiceNames[0]);
console.log(practiceNames[practiceNames.length - 1]);
// 3. Print how many numbers are in the array.
const practiceNumbers = [14, 7, 22, 9, 31];
// Your code here:
console.log(practiceNumbers.length);
// 4. Change "pending" to "complete", then print the updated array.
const practiceTasks = ["study", "pending", "exercise"];
// Your code here:
practiceTasks[1] = "complete";
console.log(practiceTasks);
// LEVEL 2 - ADD AND REMOVE
//
// 5. Add "grapes" to the end of the fruit list with push(), then print it.
const fruitList = ["apple", "banana"];
// Your code here:
console.log(fruitList.push("grapes"));
// 6. Remove the last score with pop(). Print both the removed score and the
//    updated scores array.
// Your code here:
const scoresToUpdate = [68, 91, 77, 84];
const removedscore = scoresToUpdate.pop();
console.log("removed score :",removedscore);
console.log("updated score :",scoresToUpdate);

// 7. Add "first" to the beginning of the array with unshift(), then remove
//    the first item with shift(). Print the removed item and the final array.
const lettersToUpdate = ["second", "third"];
// Your code here:
lettersToUpdate.unshift("first");
const removedItem = lettersToUpdate.shift();
console.log(removedItem);
console.log(lettersToUpdate);
// LEVEL 3 - SEARCH AND COUNT
//
// 8. Check whether "kiwi" is in the array. Print the boolean result.
const fruitsToSearch = ["pear", "kiwi", "plum"];
// Your code here:
console.log("contains kiwi ?",fruitsToSearch.includes("kiwi"));
// 9. Find and print the index of 25. Also print what indexOf() returns for 100.
const numbersToSearch = [10, 25, 40, 55];
// Your code here:
console.log("inex of 25 is :",numbersToSearch.indexOf(25));
console.log("inex of 100 is :",numbersToSearch.indexOf(100));
// 10. Use a loop to count how many numbers are greater than or equal to 10.
//     Expected count: 4
const numbersToCount = [4, 10, 18, 7, 22, 13];
let largeNumberCount = 0;
// Your code here:
for(let index = 0; index < numbersToCount.length; index++){
    if(numbersToCount[index] >= 10){
        largeNumberCount++
    }
}
console.log(largeNumberCount);
// LEVEL 4 - ACCUMULATE AND TRANSFORM
//
// 11. Use a loop to add all the numbers. Print the total.
//     Expected total: 25
const numbersToSum = [3, 8, 2, 12];
let totalOfNumbers = 0;
// Your code here:

// 12. Use a loop to print each temperature in Fahrenheit.
//     Formula: Fahrenheit = (Celsius * 9 / 5) + 32
const celsiusTemperatures = [0, 20, 30];
// Your code here:

// 13. Find and print the largest number without using Math.max().
//     Hint: start by treating the first item as the largest so far.
const valuesForMaximum = [17, 4, 29, 11, 23];
// Your code here:

// LEVEL 5 - LOGIC-BUILDING CHALLENGES
//
// 14. Count how many times targetValue appears in the array.
//     Expected count: 3
const repeatedValues = [4, 2, 4, 7, 4, 9];
const targetValue = 4;
let targetCount = 0;
// Your code here:

// 15. Print only the even numbers from the array.
//     Hint: an even number has a remainder of 0 when divided by 2.
const mixedNumbers = [3, 8, 11, 14, 20, 25];
// Your code here:

// 16. Find the second-largest distinct number in the array without sorting it.
//     Distinct means a duplicate of the largest number should not count.
//     Expected: 18
const numbersForSecondLargest = [12, 25, 18, 25, 7, 18];
// Your code here:

// 17. Reverse the array order without using reverse().
//     Print the values in reverse order; you can either build a new array or
//     print from the last index down to the first.
const arrayToReverse = [2, 4, 6, 8, 10];
// Your code here:

// 18. Check whether the values are in ascending order.
//     Print true if each item is greater than or equal to the previous item;
//     otherwise print false.
//     Expected: false
const valuesToCheckOrder = [3, 7, 7, 5, 12];
// Your code here:

// LEVEL 6 - MORE ARRAY METHODS
//
// 19. Use join() to turn the words into one sentence separated by spaces.
//     Expected: "JavaScript arrays are useful"
const wordsToJoin = ["JavaScript", "arrays", "are", "useful"];
// Your code here:
const expectedString = wordsToJoin.join(" ");
    console.log(expectedString);
// 20. Use slice() to make a new array containing the middle three numbers.
//     Do not change the original array.
const numbersToSlice = [10, 20, 30, 40, 50];
// Your code here:
const newArray = numbersToSlice.slice(1,4);
// 21. Use splice() to remove "blue" from the array. Print the removed item
//     and the changed original array.
const colorsToChange = ["red", "blue", "green"];
// Your code here:
const RemovedItem = colorsToChange.splice(1, 1);
console.log(RemovedItem);

// 22. Use splice() to replace "small" with "medium". Print the changed array.
const sizesToChange = ["small", "large"];
// Your code here:

// 23. Use concat() to combine these arrays into a new array. Print the result
//     and confirm the original arrays have not changed.
const morningTasks = ["wake up", "eat breakfast"];
const eveningTasks = ["eat dinner", "sleep"];
// Your code here:
console.log()
// 24. Use the spread operator to copy startNumbers and add 4 and 5 to the end.
//     Print both arrays to see that the original is unchanged.
const startNumbers = [1, 2, 3];
// Your code here:

// 25. Use flat() to make a one-level array from nestedOnce.
const nestedOnce = [1, [2, 3], [4, 5]];
// Your code here:

// 26. Use flat(Infinity) to flatten every level of deeplyNested.
const deeplyNested = [1, [2, [3, [4]]]];
// Your code here:

// 27. Use Array.isArray() to check which values below are arrays.
//     Print the result for each value.
const possibleArray = [1, 2, 3];
const possibleNotArray = "hello";
// Your code here:

// 28. Use Array.from() to turn the word into an array of characters.
//     Expected: ["c", "o", "d", "e"]
const wordToConvert = "code";
// Your code here:

// 29. Use Array.from() with an array-like object and a mapping function to
//     create [0, 10, 20, 30, 40].
//     Hint: give the object a length of 5, then multiply each index by 10.
// Your code here:

// 30. Use Array.of() to create an array containing the three provided values.
const firstItem = "pen";
const secondItem = "notebook";
const thirdItem = "eraser";
// Your code here: