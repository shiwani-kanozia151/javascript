
let name = "Shiwani"
let repocont = 40

console.log(name + repocont + " value") //Shiwani40

console.log(`Hello my name is ${name} and repo count is ${repocont}`) //Hello my name is Shiwani and repo count is 40   

const gameName = new String("Shaktiman")

console.log(gameName[0])
console.log(gameName.__proto__) //String {length: 0, constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}    

console.log(gameName.length) //9    

console.log(gameName.toUpperCase()) //SHAKTIMAN

console.log(gameName.toLowerCase()) //shaktiman

console.log(gameName.charAt(4)) //t

console.log(gameName.indexOf("t")) //4

const newString = gameName.substring(0,4)//not including 4th index
console.log(newString) //Shak

const anotherString = gameName.slice(0,4)//not including 4th index
console.log(anotherString) //Shak

const newString2 = gameName.slice(-7,4)//not including 4th index
console.log(newString2) //akt


/* ************** IS SUBSTRING ALLOWS NEGATIVE INDEXING --->
 NO IT WON'T ALLOW NEGATIVE INDEXING IT IGNORES THE NEGATIVE INDEXING AND START FROM ZERO INDEX... */

const newString3 = "    Shiwani       "
console.log(newString3)
console.log(newString3.trimStart()) //removes the white spaces from start of the string
console.log(newString3.trimEnd()) //removes the white spaces from end of the string
console.log(newString3.trim()) //removes the white spaces from start and end of the string


const url = "https://shiwani.com/shiwi%30kanozia"
console.log(url.replace("%30","-")) //replaces the first occurrence of the substring with the new substring

console.log(url.includes('shiwi')) //true  

console.log(gameName.split("k")) //['Sha', 'timan']  => splits the string into an array of substrings based on the specified separator


/* ++++++++++++++++ USE MDN DOC FOR MORE INFORMATION... */