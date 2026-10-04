const marvelheroes = ["Thor", "loki", "Spiderman"]

const dc_heroes = ["superman", "batman", "flash"]

//marvelheroes.push(dc_heroes)

//console.log(marvelheroes)
//console.log(marvelheroes[3][1])

const newArray = marvelheroes.concat(dc_heroes)
console.log(newArray)


/* +++++++++++++++++++++ SPREAD OPERATOR IMPORTANT +++++++++++++++++++++++++++++++++++++++ */
const all_new_heroes = [...marvelheroes, ...dc_heroes]
console.log(all_new_heroes) 


/* +++++++++++++++++++++++++ Flatting an array .. +++++++++++++++++++++++++++++++++++++++++++++++ */
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

/************************************************************************************************************ */

console.log(Array.isArray("Shiwani"))
console.log(Array.from("Shiwani"))


/* +++++++++++++++++++++++++++++++++++++++ INTERVIEW QUESTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
console.log(Array.from({name: "Shiwani"})) // here it will be confused for which it needs to make array values or keys so this will return an empty array...

/**************************************************************************************************************************************/


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));