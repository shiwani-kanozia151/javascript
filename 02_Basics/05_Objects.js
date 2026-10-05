
//++++++++++++++++ DESTRUCTURING OF OBJECTS ++++++++++++++++++++++

const course = {
    coursename: "Js in hindi",
    price: 9999,
    courseinstructor: "Hitesh"
}

// one more way to access the keys and valeus ....
const {courseinstructor} = course // Destructuring the objects...
console.log(courseinstructor)

const {courseinstructor: instructor} = course
console.log(instructor)

// JSON Formatter..........