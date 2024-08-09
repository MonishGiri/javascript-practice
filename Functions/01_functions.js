

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
console.log(loginUserMsg()); // it will return undefined