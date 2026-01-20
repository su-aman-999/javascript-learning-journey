/* 
::: 1. Primitive Datatype -> 7 :::
1. Number     |-> typeof -> number
2. String     |-> typeof -> string
3. Boolean    |-> typeof -> boolean
4. null       |-> typeof -> object
5. undefined  |-> typeof -> undefined
6. BigInt     |-> typeof -> bigint
7. Symbol     |-> typeof -> symbol

::: Reference (Non Primitive) :::
1. Array     |-> typeof -> object
2. Object    |-> typeof -> onject
3. Function  |-> typeof -> function (in internal-> object)

...Note... JavaScript is a Dynamically Typed language 

*/

// Symbol Example
const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 === id2); // => false

// BigInt Example
const bigNumber = 128341283487123478423n;

//Array Example
const heros = ["shaktiman", "naagraj", "doga"];

//Object Example
const obj = {
  name: "Aman",
  age: 22,
};

//Function Example
const myFun = function () {
  console.log("Hello World...");
};
console.log(typeof myFun); // => function

console.log(typeof id1);
