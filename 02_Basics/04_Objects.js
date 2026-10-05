//learning how to create the singleton object..

const tinderUser = new Object() //singleton object...

console.log(tinderUser) //{}

const tindruser = {} // non-singleton object...

tinderUser.id = "123abc"
tinderUser.name = "Shiwi"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"shiwani@google.com",
    fullname:{
        userfullname:{
            firstname: "shiwani",
            lastname: "kanozia"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

//sometimes from api we are not getting full name in that case we are using "?"...
//console.log(regularUser.fullname?.userfullname.firstname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3 = {obj1, obj2} //will add the obj2 as another object in the first object..
console.log(obj3)

// ++++++++++++++++++++++++++++++++++ INTERVIEW QUESTION +++++++++++++++++++++++++++++++++++++++++++++++
const obj4= Object.assign({},obj1, obj2) //read MDN documnet..
console.log(obj4)

// ++++++++++++++++ USING SPREAD OPERATOR ++++++++++++++++++++++++++++++++++++++++++++++++++
const obj5 = {...obj1, ...obj2}
console.log(obj5)

// HOW WE AR EGETTING VALUES FROM DATABASE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//array if objects 
const users = [
    {
        id:"123",
        email:"user1@gmail.com"
    },
    {
        id: "124",
        email: "user2@gmail.com"
    }

]

console.log(users[1].email)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//++++++++++++++++++++++ IMPORTANT +++++++++++++++++++++++++++
console.log(tinderUser);
console.log(Object.keys(tinderUser)) // will give array of keys
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"))
