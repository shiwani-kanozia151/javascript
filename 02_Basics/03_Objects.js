//singleton....

// objects can be declared as literal and constructor ..

//if we are creating oject using constructor then it is singleton only means yeh apne tarika ka ek hi object hai.
//object.create aise hum create krte ahi using constructor...


// +++++++++++++++++++++++++ OBJECT LITERALS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//here basically the object is treating the keys as string only whether we are giving it in double inverted commas or not...
const JsUser={
    name:"shiwi",
    email:"shiwani@google.com",
    age:25,
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

}

//for accessing arraya we have only way to access it using indexes 
// myArray = ["h", "i"]
//console.log(myArray[0] or myArray[1]);

//************************************************** */
//incase of objects we can access it using 2 methods one is using indexing like and other is using '.'
console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser[email])  // this is not allowed if u r using index here then the key needs to be in inverted commas only.....

/* ******************************* INTERVIEW QUESTIONS ******************************** */
// add symbol too here in this object then how to do this ..

//first declaring the SYMBOL ....
const mySym = Symbol("key1")

const JsUser1={
    name:"shiwi",
    email:"shiwani@google.com",
    // mySym:"mykey1", //this is treated as string only..
    [mySym]:"mykey1",
    age:25,
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

}

//console.log(JsUser1.mySym)
//console.log(typeof JsUser1.mySym) // String as data type

console.log(JsUser1[mySym])
console.log(typeof JsUser1[mySym])

JsUser.email = "shiwani@microsoft.com"
console.log(JsUser)
//Object.freeze(JsUser)

JsUser.email = "shiwani@amazon.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user...")
}

console.log(JsUser.greeting) // this will retrun the REFERENCE of the function..

console.log(JsUser.greeting())


JsUser.greeting1 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting1())
