"use strict"
/*
>==::: this :::==>
1. refer current context

*/

const user = {
  username: "Aman",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Hridyam";
// user.welcomeMessage();

console.log(this);

/*
:::Important:::
Global Object:-> node -> this -> {} (Empty Object)
Global Object:-> browser -> this -> window object
*/

// function chai1() {
//   let username = "amansingh123@gmail.com";

//   /* console.log(this); => <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Function: structuredClone],
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: [Getter/Setter],
//     fetch: [Function: fetch],
//     navigator: [Getter],
//     crypto: [Getter]
//   }*/

//   /* console.log(this.username); //=> undefined (this -> only for object)*/
// }
// chai1();

// const chai2 = function () {
//   let username = "amansingh123@gmail.com";

//   /* console.log(this); => <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Function: structuredClone],
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: [Getter/Setter],
//     fetch: [Function: fetch],
//     navigator: [Getter],
//     crypto: [Getter]
//   }*/

//   /* console.log(this.username); //=> undefined (this -> only for object)*/
// };
// chai2();

const chai3 = () => {
  let username = "amansingh123";
  console.log(this); //=> {}
};

/* >==::: Arrow Function :::==> */

//Way.1 (explicite return)
const addNums1 = (num1, num2) => {
  return num1 + num2;
};

//Way.2 (implicite return)
const addNums2 = (num1, num2) => num1 + num2;
//or
const addNums4 = (num1, num2) => ({ username: "amansingh" });
