const promiseOne = new Promise(function(resolve, reject){
    // Do aync task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log("Async task in complete");
        resolve();
    },1000)
});

// used to resolve the promise, connected to resolve()
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async two resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:'Monish',email:'monish@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true;
        if(!err) {
            resolve({username:'monish',password:'123'})
        }
        else{
            reject('ERROR something went wrong');
        }
    },1000)
})

// promise chaining
promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username) =>{
    console.log(username);
})
.catch((err) =>{
    console.log(err);
    
}).finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true;
        if(!err) {
            resolve({username:'javascript',password:'123'})
        }
        else{
            reject('JS  went wrong');
        }
    },1000)
})

async function consumePromiseFive(user) {
    try {
        const response = await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then( (res) => {
    return res.json()
})
.then((res) =>{
    console.log(res);
})
.catch((err) => console.log(err));
// getAllUsers();