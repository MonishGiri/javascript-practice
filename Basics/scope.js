// var c = 300;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // Block scope
    // console.log("Inner ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "monish";

    function two(){
        const website = "youtube";
        console.log(username);
        
    }
    // console.log(website);
    // two();
}

// one();

if(true){
    const username = "monish";
    if(username === "monish"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++++++++++++ Interesting ++++++++++++++++++ //

console.log(addOne(5)); // normal function can be accessed before the function declaration
function addOne(num){
    return num + 1;
}


console.log(addTwo(5)); // cannot be executed before the declaration
const addTwo = function(num) {
    return num + 2;
}


