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