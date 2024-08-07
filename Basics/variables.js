const accountId = 1482;
let accountEmail = "monishgiri46@gmail.com"
var accountPassword = 123;
accountCity = "Delhi";

// accountId = 2; Not Allowed

{
    accountEmail = 4;
}

accountEmail = "monish@gmail.com";
accountPassword = 789;
let accountState;

//Possible 
accountCity = "Mumbai";
console.log(accountId);

/*Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);

