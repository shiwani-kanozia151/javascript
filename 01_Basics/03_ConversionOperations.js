let score = 33

console.log(typeof score) //number

let score1 = "33abc"

let valueInNumber = Number(score1)
console.log(typeof valueInNumber) //number

console.log(valueInNumber) //NaN

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true   

//""  => false
//"shiwi" =>true
//0 => false
//1 => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber) //33
console.log(typeof stringNumber) //string

/*  *********** BROWSER MOSTLY GIVES VALUE IN STRING SO MOSTLY WE NEED TO CHANGE TO RESPECTIVE DATA TYPES    ************* */




// *************** OPERATIONS *******************
let value = 3
let negValue = -value

console.log(negValue) //-3
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2**3) //2^3 => 2*2*2 => 8
console.log(2%3) //remainder => 2       


let str1 = "hello"
let str2 = " Shiwani"
let str3 = str1 + str2
console.log(str3) //hello Shiwani   

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+"2"+2);//122
console.log("1"+"1"+2)//112
console.log(1+2+"2") //32


console.log(+true)

//console.log(true+)// will give error because we have not given any value after + sign

console.log(+"");

// ********** PREFIX AND POSTFIX OPERATORS READ FROM MDN DOCUMENTATION *************

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

*/