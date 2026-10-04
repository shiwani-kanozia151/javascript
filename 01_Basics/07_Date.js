// once check MDN doc for DATE

let myDate = new Date()
console.log(myDate)//2026-10-04T07:04:33.760Z

console.log(myDate.toString()) //Sun Oct 04 2026 12:34:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Sun Oct 04 2026
console.log(myDate.toISOString())//2026-10-04T07:04:33.760Z
console.log(myDate.toJSON())//2026-10-04T07:04:33.760Z

// ++++++++++++++++ INTERVIEW QUESTION +++++++++++++++++++++++
console.log(typeof myDate) //object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MONTHS START FROM 0 HERE IN JAVASCRIPT...
let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());//Mon Jan 23 2023

let myCreatedate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedate1.toLocaleString())//23/1/2023, 5:03:00 am

let myCreateDate2 = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString())//23/1/2023, 12:00:00 am

// TIMESTAMPS USED IN QUIZES AND POLLS WHERE WE NEED TO HAVE TIMESTAMP...
let myTimeStamp = Date.now() // will give milli seconds from 1970 till now..

console.log(myTimeStamp)
console.log(myCreateDate2.getTime())
// we use above things to comapre the date as here we are getting time in milliseconds...

//+++++++++++++++++++++ INTERVIEW QUESTION +++++++++++++++++++++++++++++++++++++++++

// how u will comapre the date or get the present time in js 
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())//4 -->date todays
console.log(newDate.getDay())//0 --> sunday
console.log(newDate.getFullYear())//2026