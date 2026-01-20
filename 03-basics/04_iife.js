/* >>==Immediately Invoked Function Expression (IIFE)==>> */
//1. reduce Global Pollut
//2. Inteview Ans:-> global scope ke pollution se problem hoti hai kai baar, global scope jo bhi variables hai ya jo bhi declaration uske pollution ko hatane ke lie IIFE ka use kiya
//3. We have to use semicolon with IIFE function
//4. when We write two IIFE in linear way then "semicolon" is must

//Way.1 name IIFE
(function chai() {
  console.log(`DB CONNECTED 1`);
})();

//Way.2 unname IIFE
((name) => {
  console.log(`DB CONNECTED 2 ${name}`);
})("Hridyam");
