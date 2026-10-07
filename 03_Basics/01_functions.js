
function sayMyName(){
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("W")
    console.log("I")
}

sayMyName // this will give REFERENCE...
sayMyName() // this is the execution code ...

function addTwoNumebrs(number1, number2){
    console.log(number1 + number2)
}

addTwoNumebrs(3, 4) // but in case here we have passed some chars or strings or something in that case JS will use its own mind..

// PARAMETERS ---> JO FUNCTION DECLARE KRTE HUE PARANTHESIS ME LIKHTE HAI...

//ARGUMENT ---> JO FUNCTION KO CALL KRTE HUE PASS KRTE HAI...

function addd(num1, num2){
    return num1+num2
}

const result = addd(9,7)
console.log(result)

function loginUserMessage(username){
    
    return `${username} just logged in`

}

console.log(loginUserMessage("shiwi"))

// ++++++++++++++++++++++++++++++++++++++++++ INTERVIEW QUESTION ++++++++++++++++++++++++++++++++++++++++++++
console.log(loginUserMessage()) //this will return undefined..
//SO check it using if statement before prnting the result in the function itself..

function login(username = "Sam"){//here by default giving some default value..
}


// ++++++++++++++++++++++++++++ SHOPPING CART PROBLEM +++++++++++++++++++++++++++++++++++++++
// REST OPERATOR...
//here basically we don't have any idea how many things the user can add to the card so using spread operator
//spread operator convert the values in array and we can process that array to get the card price..
function calculateCardPrice(...num1){
    return num1
}

console.log(calculateCardPrice(200, 400, 500, 2000)) //[ 200, 400, 500, 2000 ]

function cartPrice(val1, val2, ...num1){
    return num1
}

console.log(cartPrice(200, 400, 500, 2000))


const user = {
    username:"Shiwi",
    price: 295
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)