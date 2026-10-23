// OBJECTS IN JAVASCRIPT
//
// An object groups related information as key-value pairs.
// A key is also called a property name. A value can be any JavaScript value,
// including another object, an array, or a function.
//
// Use objects when the values describe one thing, such as one person or book.


// 1. CREATE AN OBJECT AND READ ITS PROPERTIES

const learner = {
    name: "Ari",
    age: 20,
    "favorite subject": "JavaScript",
    isLearning: true
};

// Dot notation is the usual choice when the property name is a valid identifier.
console.log(learner.name);

// Bracket notation works with spaces, and lets you use a variable as the key.
console.log(learner["favorite subject"]);

const propertyToRead = "age";
console.log(learner[propertyToRead]);


// 2. ADD, CHANGE, AND REMOVE PROPERTIES

learner.age = 21;                    // Change a property.
learner.city = "Pune";               // Add a property.
delete learner.isLearning;           // Remove a property.

console.log(learner);

// const prevents reassigning learner, but does not make its properties
// immutable. The object's properties can still be changed.


// 3. CHECK FOR A PROPERTY

const book = {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery"
};

console.log("title" in book);                    // true
console.log(Object.hasOwn(book, "author"));      // true
console.log(Object.hasOwn(book, "year"));        // false

// Object.hasOwn checks for a property directly on this object.
// The in operator also checks the object's prototype chain.


// 4. USE OBJECTS FOR RELATED DATA

const product = {
    name: "Notebook",
    price: 4.5,
    stock: 12,
    details: {
        color: "blue",
        pages: 100
    },
    tags: ["school", "paper"]
};

console.log(product.details.color);
console.log(product.tags[0]);


// 5. METHODS: FUNCTIONS STORED ON OBJECTS

const player = {
    name: "Kai",
    score: 0,
    addPoints(points) {
        this.score += points;
    }
};

player.addPoints(10);
console.log(`${player.name} has ${player.score} points.`);

// A method is a function on an object. When called as player.addPoints(),
// `this` refers to player.


// 6. COMMON OBJECT METHODS

const game = {
    title: "Sky Quest",
    genre: "Adventure",
    year: 2024
};

// Object.keys returns an array of the object's own property names.
console.log(Object.keys(game));

// Object.values returns an array of the object's own property values.
console.log(Object.values(game));

// Object.entries returns [key, value] pairs, which are useful in a loop.
console.log(Object.entries(game));

for (const [key, value] of Object.entries(game)) {
    console.log(`${key}: ${value}`);
}

// Object.assign copies properties into a target object.
// The spread syntax is often a shorter way to make a shallow copy.
const gameCopy = Object.assign({}, game);
const updatedGame = { ...game, year: 2025 };

console.log(gameCopy);
console.log(updatedGame);
console.log(game.year); // The original object was not changed.

// These copies are shallow: nested objects are still shared references.
const productCopy = { ...product };
productCopy.details.color = "green";
console.log(product.details.color); // "green"


// 7. OBJECT DESTRUCTURING: AN INTRODUCTION

// Destructuring takes properties out of an object and stores them in variables.
const student = {
    name: "Mina",
    grade: 10,
    city: "Mumbai"
};

const { name, grade } = student;
console.log(name, grade);

// Rename a variable while extracting a property.
const { city: homeCity } = student;
console.log(homeCity);

// Give a variable a fallback value if the property is missing (or undefined).
const { school = "Not provided" } = student;
console.log(school);

// Destructure nested objects by following the object's shape.
const { details: { pages } } = product;
console.log(pages);

// The rest pattern collects properties that were not picked out.
const { title, ...otherGameInfo } = game;
console.log(title);
console.log(otherGameInfo);


// 8. JSON AND APIS: AN INTRODUCTION

// JSON (JavaScript Object Notation) is a text format commonly used to send
// structured data between a server and an application.
//
// JSON looks similar to JavaScript objects, but it is text:
// - JSON property names and strings use double quotes.
// - JSON does not support functions, undefined, or comments.
//
// JSON.stringify converts a JavaScript value into JSON text.
// JSON.parse converts valid JSON text back into a JavaScript value.

const profile = {
    username: "ari_codes",
    points: 125
};

const profileJson = JSON.stringify(profile);
console.log(profileJson);

const profileFromJson = JSON.parse(profileJson);
console.log(profileFromJson.username);

// An API is a way for programs to exchange data. A web API often sends JSON.
// fetch() makes a web request; response.json() reads and parses its JSON body.
// This example is intentionally not called, so running this lesson makes no
// network request. Replace the URL with an API endpoint when you are ready.

async function loadPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    const post = await response.json();
    console.log(post.title);
}

// Call loadPost() in a browser or a recent Node.js version to try the request.


// 9. PRACTICE QUESTIONS
//
// Try each task yourself before looking up a method or example above.
// The questions grow gradually from easy to medium, then toward hard.

// EASY
//
// 1. Create an object named `pet` with name, animalType, and age properties.
//    Print the pet's name using dot notation.
//
// 2. Add a `color` property to pet, then change its age.
//
// 3. Create an object with a property named "favorite food".
//    Read that property using bracket notation.
//
// 4. Check whether pet has its own `color` property.
//
// 5. Use Object.keys() to get an array of a three-property object's keys.

// EASY TO MEDIUM
//
// 6. Create a `movie` object with title, director, and rating.
//    Print each key and value using Object.entries() and a loop.
//
// 7. Copy movie into a new object, then change the copy's rating.
//    Confirm that the original rating stays the same.
//
// 8. Given { name: "Sam", score: 88 }, destructure name and score into
//    variables and print them.
//
// 9. Destructure a `nickname` property with a default value of "Guest".
//    Check what happens when nickname exists and when it is missing.
//
// 10. Convert a small JavaScript object to JSON text, then parse it back.
//     Print the parsed object's properties.

// MEDIUM
//
// 11. Create a `course` object with a nested `teacher` object and a `topics`
//     array. Print the teacher's name and the second topic.
//
// 12. Destructure a nested property from course, and rename it to a clearer
//     variable name.
//
// 13. Write a function called `getDiscountedPrice` that accepts an object with
//     price and discountPercent properties. Return the price after the discount.
//
// 14. Make a shallow copy of an object that contains a nested object.
//     Change a nested property on the copy and observe what happens to the
//     original. Explain why.
//
// 15. Write an async function that fetches JSON from an API endpoint, checks
//     response.ok, parses the response, and prints one useful property.

// TOWARD HARD
//
// 16. Write a function that accepts an object and returns a new object with
//     only its properties whose values are strings. Do not change the input.
//
// 17. Given an array of objects representing products, use Object.entries()
//     or Object.values() to calculate the total value of all items in stock
//     (price multiplied by stock).
//
// 18. An API may omit optional properties. Write a function that accepts a
//     user object, uses destructuring defaults, and returns a display name
//     plus a city. Use "Anonymous" and "Unknown city" when values are missing.
//
// 19. An API response can have an unexpected shape. Write a function that
//     safely reads the first item's name from { items: [...] }, returning
//     "No item" if items or its first item is missing.
//
// 20. Fetch a list of API records and create a new array containing only
//     objects with the fields you need. Handle a failed HTTP response and
//     explain how you would handle a network error as well.