const myObj = {
  js: "savascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObj) {
  console.log(`${key} :- ${myObj[key]}`);
}
/* 
👋output:-
js :- savascript
cpp :- c++
rb :- ruby
swift :- swift by apple
*/

//👉 forin on map -> not applied ❌
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USE", "United States of America");
myMap.set("UK", "United Kingdom");
myMap.set("FR", "France");

for (const key in myMap) {
  console.log(key);
}

//👉 forin on Array -> not applied ✅
const myArray = ["js", "rb", "py", "java", "cpp"];
for (const index in myArray) {
  console.log(`${index} |=> ${myArray[index]}`);
}
/* 
👋output:-
0 |=> js
1 |=> rb
2 |=> py
3 |=> java
4 |=> cpp
*/