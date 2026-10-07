
//Immediately invoked Function (IIFE)

//global variable se pollute hone se bacjne k liye iffi ko use krte hai

//()() first parenthesis for function declaration and the other parentheses for calling that function
// function chai(){
//     console.log("DB Connected")
// }
// chai()

(function chai1(){ // NAMED IFFI
    console.log(`DB CONNECTED`)
})() ; // HERE WE NEED TO ADD SEMICOLOR SO THAT COMPILER WILL KNOW WHERE TO STOP THE EXECUTION..

((name) =>{ //WITHOUT NAME IFFI
    console.log('DB CONNECTED TWO ${name}')
})('Shiwani')