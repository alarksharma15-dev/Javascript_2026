// Primitive data types :

// 7 types : strings, number , boolean , null , undefined , symbol , bigint .

let score = 100; //Number
const score1 = 100.1234; //float Number

const alark = true; //Boolean
const temprature = null; // null (object);
const bigNumber = 23456789567364543422n; //bigint

// Refrence type or non premitive Data type:

// Array, Objects , Functions.

const heros = [ "shaktiman", "naagraj", "doga"]; // return type is "object"

// object
let MyObj = {
    name: "Alark",    // return type is "object"
    age : 22,
}

// fucntion  : return type is "object function"

const myFunction = function(){
     console.log("Hello world");
}



/**********MEMORY******************** */

// Stack (Premitive) , heap (Non - Premitive)

let myYoutubename = "alarksharmadotcom";

let anothername = myYoutubename;

console.log(anothername);
console.log(myYoutubename);

let user = {
    email: "user@google.com",
    upi : "upi@ybl"
}

let user2 = user;

user2.email = "alark@google.com"

console.log(user.email);
console.log(user2.email);