
// this --> current context ko refer krta hai..

 const user = {
    username : "Shiwi",
    price:3456,
    welcomeMessage : function(){
       console.log(`${this.username} welcome to website`)
       console.log(this)
       /*
       Shiwi welcome to website
{
  username: 'Shiwi',
  price: 3456,
  welcomeMessage: [Function: welcomeMessage]
}
shiwani kanozia welcome to website
{
  username: 'shiwani kanozia',
  price: 3456,
  welcomeMessage: [Function: welcomeMessage]
}
       */
    }

    
}

// user.welcomeMessage // as it is a function not doing anything without ()
// if we are not using this then we are getting error that the variable is not defined .
user.welcomeMessage()
user.username = "shiwani kanozia"

user.welcomeMessage()

console.log(this) //{}
/*
 here it showing empty as we are inside the node env and currently there is no object in global
  BUT IF WE ARE DOING CONSOLE.LOG INSIDE THE INSPECT IN BROWSER WE USE TO SEE SO MANY THINGS
  - WINDOW - GLOBAL OBJECT .
  - {}, 
  - CLICK ETC..
*/


// +++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++
function chai(){
    let username = "shiwi"
    console.log(this)
    /* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
} 
    */
}
chai()

//*************** INSIDE FUNCTION WE ARE NOT ALLOWED TO USE "this"  KEYWORD */
function chai1(){
    let username = 'shiwi'
    console.log(this.username) //undefined
}
chai1()

const chai2 = function()
{
    let username="shiwi"
    console.log(this.username)//undefined
}
chai2()

const chai3 = ()=>{
    let username = "shiwi"
    console.log(this.username)//undefiend
    console.log(this)//{}
}
chai3()


// BASIC SYNTAX: ()=>{} *****************************************

const addTwo = (num1,num2) =>{
    return num1+num2
}

console.log(addTwo(10,20))

// ********** IMPLICIT RETURN  --> not writing the  return keyword
const add = (num1, num2) =>  num1+num2;
add()

const add1 = (num1, num2) => (num1+num2);
add1()

const user1 = {
    username :"shiwi",
    price: 456789
}
const add3 = (user) =>({user});
add3()

