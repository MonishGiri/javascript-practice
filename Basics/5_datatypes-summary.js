// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.98;
const isLoggedIn = false;
const outTemp = null;
let userEmail; // undefined
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 7777777777n;
console.log(typeof bigNumber);



// Reference Type (Non-primitive ) type:-
// Array, Objects, funcations

const heros = ["shaktiman","naagraj", "doga"];

let myObj = {
    name: "Monish",
    age : 22,
    city: "Delhi"
}

const myFunction = function (){
    console.log("Hello World");
}
// console.log(typeof myObj);
// console.log(typeof null); // Object

/* ***************** MEMORY ***********************/

// Stack(Primitive) => gives copy  , Heap(Non Primitive) => gives original value

let myName = "Monish";
let anotherName = "Sahil";
anotherName = "Sushil";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "monish@gmail.com",
    upi: "mg@ybl"
}

let userTwo = userOne;

userTwo.email = "mg@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
