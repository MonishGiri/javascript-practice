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
console.log(typeof myObj);
console.log(typeof null); // Object

