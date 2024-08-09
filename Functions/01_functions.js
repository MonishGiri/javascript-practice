

function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2){
//   console.log( num1 + num2);
// }  
function addTwoNumbers(num1, num2){
    // let result = num1+num2;
    // return result;
    return num1 + num2;
}

// addTwoNumbers("4",5);
const result = addTwoNumbers(3,5);
// console.log("Result: ",result);

function loginUserMsg(username = "sam"){
    if(!username){
        console.log("Please enter the username");
        return
    } 
    return `Welcome ${username} jyou have just logged in`
}

// console.log(loginUserMsg("Monish"));
// console.log(loginUserMsg()); // it will return undefined

// function calculateCartPrice(...num1){ // passed multiple value to the function using rest operator
//     return num1;
// }
function calculateCartPrice(val1, val2,...num1){ // will return 600 and 700 first two values is taken by val1 and val2
    return num1;
}

// console.log(calculateCartPrice(200,500,600,700));

const user = {
    username: "monish",
    price: 199
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObj(user);

handleObj({
    username: "sahil",
    price: 852
})

const myNewArr = [2,8,6,2];

function returnSecondVal(arr){
    return arr[1];
}
// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([5,6,3,5]));
