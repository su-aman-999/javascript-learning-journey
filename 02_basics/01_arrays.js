/*>>===:::Array:::===>>
 JS Array -> Resizable
 JS Array -> Can store non similar elements
 JS Array -> Index start from 0
 JS Array -> Shallow Copy
*/

const myArr = [0, 1, 2, 3, 4, 5]; //Array Literal
const myheros = ["Shaktiman", "Naagraj"];

const myarr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]); //=> 0

/*>---:::Array Methods:::--->*/

myArr.push(6); //-> return current length of array
myArr.push(7, 8, 9, 10);
console.log(myArr); //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myArr.pop(); //-> return pop value if array empty then return undefiend

myArr.unshift(0); //-> add array in start of array and return current length of array

myArr.shift(); //-> delete first value and return value

myArr.includes(9); //-> if value exists then return true otherwise return false

myArr.indexOf(9); //-> if value exists in array then return index number otherwise return -1

//--|:USEFUL:|--

const newArr = myArr.join();
console.log(myArr); //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(newArr); //=> 0,1,2,3,4,5,6,7,8,9
console.log(typeof newArr); //=> string

// --| :slice and splice: |--
console.log("Testing slice and splice methods");

const orgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Orginal Array: ", orgArray);

const testArray1 = orgArray.slice(1, 5); //-> starting value inclue and second value doesn't include and return particular of array
console.log("After Slice: ", orgArray); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Slice Result: ", testArray1); //=> [2, 3, 4, 5]

const testArray2 = orgArray.splice(1, 5); //-> delete and return a particular part of an array and include both arguments
console.log("After Splice: ", orgArray); //=> [1, 7, 8, 9, 10]
console.log("Splice Result: ", testArray1); //=> [2, 3, 4, 5, 6]
