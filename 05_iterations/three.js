/*
:::Array Specific:::
1. for of
for (const element of object) {
 
}

2. for in 

3. for each
*/

//1. For of
//["", "", ""];
//[{}, {}, {}];

const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}
/* 
👋output:-
1
2
3
4
5
*/

const greeting = "Hello World!";
for (const greet of greeting) {
  console.log(`Each char is ${greet}`);
}

//📌Map -> object -> no duplicate value❌ -> all unique valus✅
//📌Map -> not iterable❌
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

console.log(map);

for (const element of map) {
  console.log(element);
}
/*
output:-
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/

//Destructuring of map
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
/* 
IN : India
USE : United States of America
FR : France
*/


//👉 forof on object -> not applied ❌
const myObj = {
  game1: "NFS",
  game2: "Spiderman",
  game3: "Angry Bird",
};

// for (const element of myObj) {
//   console.log(`${element}`);
// }  => ERROR


