/*
- JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
- JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
  -- Deep Copy: A deep copy of an object is a copy whose properties do not share the same references 
  -- Shallow Copy: A shallow copy of an object is a copy whose properties share the same references
*/

const myArr = [0,1,2,3,4,5]
console.log(myArr[0])

const myHeroes = ["Shaktiman", "Nagaraj"]
console.log(myHeroes)

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);


//********************** Array Methods ************************ */

myArr.push(6)
myArr.push(10)
console.log(myArr)
myArr.pop()
console.log(myArr)

//this adds the lement in the beginning so for that we need to shift rest of the elements ...
myArr.unshift(9)
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(6));

// join first combiining the array and also converting the data type to string..
const newArr = myArr.join()
console.log(myArr);
console.log(newArr)
console.log(typeof myArr)
console.log(typeof newArr)

/******************** INTERVIEW QUESTION ************************ */
//***************** SLICE AND SPLICE  *************** */
console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("B", myArr)

/***************************************************************************/

