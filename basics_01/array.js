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

// ARRAY METHODS: A PREVIEW
//
// Methods such as forEach(), map(), and filter() are common ways to process
// arrays. They use callback functions, so first get comfortable with arrays,
// indexes, and loops. You can learn these methods after the basics.
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

// LEVEL 2 - ADD AND REMOVE
//
// 5. Add "grapes" to the end of the fruit list with push(), then print it.
const fruitList = ["apple", "banana"];
// Your code here:

// 6. Remove the last score with pop(). Print both the removed score and the
//    updated scores array.
const scoresToUpdate = [68, 91, 77, 84];
// Your code here:

// 7. Add "first" to the beginning of the array with unshift(), then remove
//    the first item with shift(). Print the removed item and the final array.
const lettersToUpdate = ["second", "third"];
// Your code here:

// LEVEL 3 - SEARCH AND COUNT
//
// 8. Check whether "kiwi" is in the array. Print the boolean result.
const fruitsToSearch = ["pear", "kiwi", "plum"];
// Your code here:

// 9. Find and print the index of 25. Also print what indexOf() returns for 100.
const numbersToSearch = [10, 25, 40, 55];
// Your code here:

// 10. Use a loop to count how many numbers are greater than or equal to 10.
//     Expected count: 3
const numbersToCount = [4, 10, 18, 7, 22, 13];
let largeNumberCount = 0;
// Your code here:

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