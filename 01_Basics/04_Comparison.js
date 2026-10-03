console.log(1>=2)
console.log(1<=2)
console.log(1==2)
console.log(1!=2)
console.log(1===2)
console.log(1!==2)  

console.log("1"==1) //true
console.log("1"===1) //false    
console.log("2">"10") //false   


// ************* INTERVIEW QUESTION **************
console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true

/* The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently. 
Comparisons convert null to a number, which results in 0, while equality checks do not.
So, null >= 0 is true because null is converted to 0, but null > 0 is false because null is not greater than 0. 
Similarly, null == 0 is false because null is only equal to undefined and not to any other value. */

console.log(undefined>0) //false
console.log(undefined<0) //false
console.log(undefined==0) //false   


// TYPESCRIPT WON'T ALLOW TO COMPARE DIFFERENT DATA TYPES BUT JAVASCRIPT WILL ALLOW TO COMPARE DIFFERENT DATA TYPES