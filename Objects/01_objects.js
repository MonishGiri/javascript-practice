// singleton
// Object.create


// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Monish",
    "full name":"Monish Giri",
    [mysym] : "mykey1", // this is how symbol is stored as key to a value
    age: 22,
    location: "Delhi",
    email: "monishgiri46@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email = "mg@gmail.com";
// Object.freeze(jsUser); // freeze the object means the object values does not change
jsUser.name = "Sushil";

// console.log(jsUser);

jsUser.gretting = function(){
    console.log("hello js user");
    
}
jsUser.gretting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsUser.gretting());
console.log(jsUser.gretting2());
