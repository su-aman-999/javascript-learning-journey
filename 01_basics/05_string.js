const name = "aman"; //string literal
const repoCount = 5;
console.log(`Hello my is ${name} and my repo count is ${repoCount}`);

console.log(typeof "aman"); //=> string

const gameName = new String("hridya-mm");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newGameName1 = gameName.substring(0, 4);
console.log(newGameName1); //=> hrid

const newGameName2 = gameName.slice(-8, 4);
console.log(newGameName2); //=> rid

const newGameName3 = "    amann   ";
console.log(newGameName3); //=> "    amann   "
console.log(newGameName3.trim()); //=> amann

const url = "https:amann.com/amann5%20chaudhary"; //browser convert " "(space) into %20 in URLN coding automatically
console.log(url.replace("%20", "-")); //=>https:amann.com/amann5-chaudhary
console.log(url.includes("aman")); //=> true
console.log(url.split("n")); //=> ['https:ama', '', '.com/ama', '', '5%20chaudhary']

console.log("=|:::String Method:::|=");

/*📌Method List
  at()
  charAt()
  charCodeAt()
  concat()
  endsWith()
  includes()
  indexOf()
  lastIndexOf()
  localeCompare()
  match()
  matchAll()
  normalize()
  padEnd()
  padStart()
  repeat()
  replace()
  replaceAll()
  search()
  slice()
  split()
  startsWith()
  substring()
  toLocaleLowerCase()
  toLocaleUpperCase()
  toLowerCase()
  toString()
  toUpperCase()
  trim()
  trimEnd()
  trimStart()
  valueOf()
*/

/*1. charAt()
str.charAt(index) -> return value
str.charAt(invalidIndex) -> return nothing 
*/

/*2. indexOf() and lastIndexOf()
const s1 = `The code undefined code code !`;
s1.length => 29

s1.indexOf("Code"); => -1
s1.lastIndexOf("Code"); => -1

s1.indexOf('code') => 4
s1.lastIndexOf('code'); => 24

s1.indexOf('code', 4) => 4
s1.indexOf('code', 5) => 19

s1.lastIndexOf('code', 24) => 24
s1.lastIndexOf('code', 23) => 19

s1.indexOf('code', -5) => 4, index -> -5 -> 0
s1.lastIndexOf('code', -5) => -1, index -> -5 -> 0

s1.indexOf('') => 0
s1.lastIndexOf('') => 30

s1.indexOf()  => 9, search undefiend in string not Undefiend and return index if doesn't exit undefined then return -1
s1.lastIndexOf() => 9
*/

/*3. slice() and substring()

  Syntax:-
    string.slice(indexStart);
    string.substring(indexStart);

  1. slice() -> accept support index but doesn't support reverse index (10, 5);

  2. substring() -> negative index(-5) behaves 0 and support reverse value(10, 6) 

*/

const string = "The morning is upon us.";
string.slice(12); //=> is upon us.
string.substring(12); //=> is upon us.

//👋 somthing differ
string.slice(-11); //=> is upon us.
string.substring(-11); //=> The morning is upon us. (-11 -> 0)

string.slice(23); //=> ""
string.substring(23); //=> ""

string.slice(13, 16); //=> s u (13-> inclusive, 16-> exclusive)
string.substring(13, 16); //=> s u (13-> inclusive, 16-> exclusive)

//👋 somthing differ
string.slice(16, 13); //=> ""
string.substring(16,13); //=> s u

//👋 somthing differ
string.slice(-8, -4); //=> upon
string.substring(-8, -4); //=> "" 

//👋 somthing differ
string.slice(-8, 4); //=> ""
string.substring(-8, 4) //=> The (-8 -> 0)

//👋 somthing differ
string.slice(8, -4); //=> ing is upon
string.substring(8, -4); //=> The morni
