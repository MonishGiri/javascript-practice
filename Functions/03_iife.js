// Immediately Invoked Function Expressions (IIFE)
// used to overcome global scope pollution
(function myFn(){ // named IIFE
    console.log("DB connected");
}()); // semicolon is must here to execute 

// () => function definition
// second() => execution call

(  (name) => {
    console.log(`Db connected 2 ${name}`)
} )("Monish")