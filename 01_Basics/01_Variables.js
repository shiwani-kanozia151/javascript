//const variable are not allowed to change in future
const accountId=14443

let accountEmail = "shiwani@gmail.com"
var accountPassword = "12345"
 accountCity = "Chandigarh"

//if we try to print the value of accountState it will give us undefined because we have not assigned any value to it yet. 
let accountState; 


// accountId=45466 //not allowed to change the value of const variable
console.log(accountId);

accountEmail = "shiwi@gmail.com"
accountCity = "Pune"
console.log(accountEmail);
console.log(accountCity);

//it will display the values in tabular format
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})

//this will also display the values in tabular format but in array format
//console.table([accountId, accountEmail, accountPassword, accountCity])

//initially there was no control on the block scope of the variables but now we have control on the block scope of the variables using let and const keywords.

/* **** WHY WE ARE NOT USING VAR KEYWORD ****
1. var is function scoped and let and const are block scoped.
2. var can be re-declared and updated, while let can be updated but not re-declared and const can neither be updated nor re-declared.

PREFER NOT TO USE VAR KEYWORD IN MODERN JAVASCRIPT. USE LET AND CONST KEYWORDS INSTEAD.
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE"
*/