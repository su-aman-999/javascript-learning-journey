/*
>>---:::Tow Way to create Object:::--->
1. Object Literals
2. Constructor  (Singleton), use  Object.create
*/

const mySymbol = Symbol("key"); //How can we use mySymbol as key in any object

//1. Object Literals
const jsUser = {
  name: "Aman", //name -> "name" in internal
  "full Name": "Aman Kumar", //-> we can not access through dot(.) operator
  // mySymbol: "key1", --> it's not right
  [mySymbol]: "myKey", //-> it's right(Inteview)
  age: 21,
  location: "Bhabhua",
  email: "aman123@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.name); //=> Aman
// console.log(jsUser[name]); => ERROR
console.log(jsUser["name"]); //=>Aman
// console.log(jsUser.full Name); => ERROR due to key has multiple words(full Name)
console.log(jsUser["full Name"]); //(we can access trough [] operator) =>Aman Kumar
// console.log(typeof jsUser.mySymbol);  => string
console.log(jsUser[mySymbol]); //=> myKey

/*
:::In Two case we use squar bracket(Inteview):::
1. key has more than one words
2. when we use "symbol" as key
*/

//<-|:::Object.freeze(jsUser):::|-> //Now, We cannot change any properties in jsUser object
  
//<-|:::Function Add:::|->

jsUser.greeting = function(){
 console.log("Hello Guys, How are you"); 
}

jsUser.greetingTwo = function(){
 console.log(`Hello ${this.name}`); 
}

console.log(jsUser.greeting); //=> [Function (anonymous)], olny return function reference
jsUser.greeting(); //=> Hello Guys, How are you
jsUser.greetingTwo(); //=> Hello Aman



