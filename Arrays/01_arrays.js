const arr = [2,6,8,4];
const heros = ["shaktiman", "Batman"];

const myArr = new Array(1,2,3);
console.log(myArr[0]);

// Array methods
myArr.push(6);
myArr.push(7);

myArr.pop(); // removes the last value of the array

myArr.unshift(0); // adds the element in the first place and shifts the others -> very time consuming
myArr.shift(); // removes the element at the beginning of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log(("B ", myArr));

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(("C ", myArr));