const user = {
    username : "monish",
    price: 999,
    
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to website`); // this refer to current context
        // console.log(this);
        
    }
}

// console.log(this); // in node environment this refers to empty object
// user.welcomeMsg();
// user.username = "sam"
// user.welcomeMsg();

// function myFn(){
//     let username = "Monish"
//     // console.log(this);
//     console.log(this.username); // only works inside the object not inside a normal function
    
// }
// myFn();

// const myFn = () =>{
//     let username = "Monish"
//     console.log(this);
    
// }

// myFn();

// const addTwo = (num1,num2) =>  num1 + num2; // implicit return
// const addTwo = (num1,num2) =>  (num1 + num2); // implicit return

const addTwo = (num1, num2) => ({username: "Monish"});

console.log(addTwo(3,4));
