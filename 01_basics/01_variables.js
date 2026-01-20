const accountId = 144553;
let accountEmail = "amansingh123@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; //It's possible but not right

let accountState;

//accountId = 2 not allowed

/*
Prefer don't use var
becouse of issues in block scope and functional scope
*/

console.log(accountId);

accountEmail = "as123@gmail.com";
accountPassword = "121212";
accountCity = "Bhabhua";

console.log(accountId);
console.table([
  accountId,
  accountPassword,
  accountEmail,
  accountCity,
  accountState,
]); //Table form printing style

/* var 🆚 let 🆚 const 
1. var 
  -> function scop 
  -> Redeclarion ✅ 
  -> Reassignment ✅ 
  -> Hoisted + undefined 
  -> Global Object (window.a) ✅
  -> strict mode ✅

2. let 
  -> block scop 
  -> Redeclarion ❌ 
  -> Reassignment ✅ 
  -> Hoisted BUT✅ Access nahi ❌
  -> Global Object (console.log(window.b); => undefined) 
  -> strict mode ✅

3. const 
  -> block scop 
  -> Redeclarion ❌ 
  -> Reassignment ❌ 
  -> Hoisted BUT ✅ Access nahi ❌
  -> console.log(window.c); => undefined 
  -> strict mode ✅


📌 Temporal Dead Zone:- TDZ is a phase in JavaScript where let and const variables are hoisted but cannot be accessed before declaration.
  console.log(a); =>ReferenceError
  let a = 10;
*/
