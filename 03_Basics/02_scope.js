//1. global scope
//2. block scope..

let a =10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)

//PROBLEM WITH VAR KEYWORD ++++++++++++++++++++++++++++++++++++++++

if(true){
    var d = 45
}

console.log(d) // even the varaible declaration is inside the block but still we are able to print the variable value of d.

var x = 2345
if(true){
    var x = 9876
}
console.log(x) // it will print 9876 ..
//there is no scope for var keyword that's why we are avoiding to use the var keyword for varaibles declarations..

// +++++++++++++++++++++++++++++++++++++ NESTED SCOPE +++++++++++++++++++++++++++++++++++++++++++++++++++
function one(){
    const username = "Shiwi"

    function two(){
        const website = "utube"
        console.log(username)
    }

    //console.log(website)

    two()
}

one()

// ++++++++++++++++++++++++++++++++ CLOSURE +++++++++++++++++++++++++++++++++++
//BASICALLY THE NESTED FUNCTIONS ARE ABLE TO ACCESS THEIR PARENT VARAIBLES..

// +++++++++++++++++++++++++ HOISTING IN JAVASCRIPT IMPORTANT ++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}


// with this declaration it is not allowed to call the function before declaring it .
// addtwo(5) // will give error 
const addtwo = function(num){
  return num+2
}

console.log(addtwo(5))