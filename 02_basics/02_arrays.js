const marvelHeros = ["thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros); //=> [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvelHeros[3][1]); //=> Flash

const allHeros1 = marvelHeros.concat(dcHeros);
console.log(allHeros1); //=>[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const allHeros2 = [...marvelHeros, ...dcHeros]; //-> Spread Operator
console.log(allHeros2); //=> [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const tempArray = [1, 2, 3, [4, 5, 6, [7, 8, 9], [10, 11]], [12, 13, 14]];
const useArray = tempArray.flat(Infinity); //-> use flat() method
console.log(useArray); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman Kumar")); //=> ['A', 'm', 'a', 'n',' ', 'K', 'u', 'm','a', 'r']
console.log(Array.from({ name: "Aman" })); //=> [] -> :::interesting:::

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //=> [100, 200, 300]

//1. Array.isArray() ->>
console.log(Array.isArray("[]")); //=> false
console.log(Array.isArray([])); //=> true

//2. Array.from() ->> tod ke naya aaray banata hai, shollow copy
//Iterable --> Array Iterable Convert karta hai
console.log(Array.from([1, 2, 3], (x) => x + x));
/*
behave like: map,foreach
:-> Array.from(items)
:-> Array.from(items, mapFn)
:-> Array.from(items, mapFn, thisArg)
*/

//3. Array.of() ->>bohot element ko jod ke ek array banata hai, create new array
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

// All Methods are static method
