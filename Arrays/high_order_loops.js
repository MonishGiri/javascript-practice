// for of loop

// [{},{},{}]

// const arr = [1,2,3,4,5];
// for (const val of arr) {
//     console.log(val);
    
// }

// const greetings = "Hello World!";
// for (const greet of greetings) {
//     console.log(greet);
    
// }

// Maps : used to hold unique values

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America");
map.set('FR',"France");

// console.log(map);

// for(const [key, value] of map){ // destructuring to print key and value seperately
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman',
// }

// forof loop cannot be used to iterate over objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by app'
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

const programming = ['js','cpp','java'];

// only gives the key or index of the array
// for(const item in programming){
//     console.log(item);
    
// }

// we can get the value by the following
// for(const item in programming){
//     console.log(programming[item]);
    
// }

// for(const key in map){
//     console.log(key);
    
// }

// for each loop
const coding = ["js","ruby","python","java","c++"];

// coding.forEach((item) =>{
//     console.log(item);
    
// })

// coding.forEach( (item) => (item))

// function printMe(item){
//     console.log(item); 
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
})