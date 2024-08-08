const score = 400;

const balance = new Number(50);
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);

// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));

const otherNumber = 123.8471;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

/* ************************ MATHS *********************** */

// console.log(Math);
// console.log(Math.abs(-4)); // convert -ve to +ve
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.sqrt(64));
console.log(Math.max(4,6,2,7));
console.log(Math.min(4,6,2,7));

console.log(Math.random()); // values between 0 and 1 including both
console.log((Math.random()*10) + 1); // +1 because generated random number can be 0 so to avoid it 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min + 1)) + min); // formula for generating random number between min and max
