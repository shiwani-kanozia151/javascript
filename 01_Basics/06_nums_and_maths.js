const score = 300

console.log(score) //300
console.log(typeof score) //number

const balance = new Number(100) //object

console.log(balance) //[Number: 100]
console.log(typeof balance) //object  

console.log(balance.toString().length) //100

console.log(balance.toFixed(2)) //100.00

/* ************* INTERVIEW QUESTION ************ */ 
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)) //123.9
console.log(otherNumber.toPrecision(3)) //124   
console.log(otherNumber.toPrecision(2)) //1.2e+2

/************************************************** */

const hundreds = 1000000000
console.log(hundreds.toLocaleString("en-IN")) //1,00,00,00,000  
console.log(hundreds.toLocaleString("en-US")) //1,000,000,000

// ++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++

console.log(Math) //Math object

console.log(Math.abs(-4)) //4    

console.log(Math.round(4.6)) //5

console.log(Math.floor(4.6)) //4

console.log(Math.ceil(4.6)) //5 

console.log(Math.min(1,2,3,4,5)) //1

console.log(Math.max(1,2,3,4,5)) //5

console.log(Math.random()) //random number between 0 and 1  

console.log(Math.random()*10) //random number between 0 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min)) //random number between 10 and 20    

