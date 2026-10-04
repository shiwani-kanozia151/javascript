/* The data types in JavaScript are divided into two categories: Primitive and Non-Primitive.

It is Basically based on how we are storing the elements in the memory. Primitive data types are stored in stack memory and 
Non-Primitive data types are stored in heap memory.

1. Primitive Data Types: (Immutable)
2. Reference Data Types: (Mutable)

1. Primitive Data Types: (Immutable) call by value basically
  - String
  - Number  
  - Boolean   
  - Null  => standalone value that represents nothing or no value
  - Undefined
  -BigInt => used to store large numbers
  - Symbol => unique and mainly used by figma.  
2. Reference Data Types: (Mutable)
  - Arrays
  - Objects 
  -Functions


JS IS DYNAMICALLY TYPED LANGUAGE => we don't need to specify the data type of a variable while declaring it. It will automatically assign the data type based on the value assigned to it.  
 
 
  */

// HOW TO USE SYMBOL DATA TYPE
const id = Symbol("123")
const id2 = Symbol("123")

console.log(id==id2) //false
console.log(id===id2) //false


// ***************** ARRAYS ******************
const heros = ["shaktiman", "naagraj", "doga"]
console.log(heros)
console.log(typeof heros) //object


// ***************** OBJECTS ******************
let myobj = {
    name:"Shiwi",
    age:25
}
console.log(myobj)
console.log(typeof myobj) //object


// ************ FUNCTIONS  **********/
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction) //function

/* ************ TYPEOF FUUNCTION ************ */
/*
    TYPEOF VARIABLES                           RESULT
    Undefined                                  "undefined"
    Null                                       "object"
    Boolean                                    "boolean"                    
    Number                                    "number"
    BigInt                                    "bigint"  
    String                                    "string"
    Object(native and does not implement)      "object"
    Object(native or host and does not implement) "function"
    Object(host and does not implement)            "implementation defined except may not be "undefined" "boolean" "number" or "string"          
*/

/*DATA TYPES OF NON PRIMITIVE DATA TYPES ARE OBJECT ONLY BUT FOR FUNCTIONS IT IS  OBJECT FUNCTION */




//+++++++++++++++++++++++ MEMORY ALLOCATION ++++++++++++++++++++++++
/* 
1. Primitive Data Types: (Immutable) => stored in stack memory ==> CALL BY VALUE
2. Reference Data Types: (Mutable) => stored in heap memory ==> CALL BY REFERENCE

*/

let myYoutubeName = "design with shiwani"
let myYoutubeName2 = myYoutubeName

myYoutubeName2 = "design with shiwani 2.0"

console.log(myYoutubeName) //design with shiwani
console.log(myYoutubeName2) //design with shiwani 2.0

let myDetails = {
    name:"shiwani",
    age:25
}

let myDetails2 = myDetails
myDetails.age = 24

console.log(myDetails) //{ name: 'shiwani', age: 24 }
console.log(myDetails2) //{ name: 'shiwani', age: 24 }
