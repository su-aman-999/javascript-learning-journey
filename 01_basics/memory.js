/*
>>---::: Memory :::--->>

1. >>---Stack (Primitive)--->

let myFirstEmailId = "amankumar123@gmail.com";
let mySecondEmailId = myFirstEmailId;
mySecondEmailId = "amansingh123@google.com";
console.log(myFirstEmailId); //=> "amankumar123@gmail.com"
console.log(mySecondEmailId); //=> "amansingh123@google.com"


+--------------------------+
|        STACK             |
|  (Fast, small, ordered)  |
+--------------------------+
| a = 10                   |  ---> Primitive value directly stored
| b = "Aman"               |
| obj  →  #1001 -----------+----+
| arr  →  #2001 -----------+----+--> These are references (addresses)
+--------------------------+

...Note.1...--> store same values on differ location in stack
...Note.2...--> In Stack, copy same value to assign another variable

let num1 = 123;
let num2 = num1;
lwt num3 = num1;

num1 => 123  => reference -> #182722202
num2 => 123  => reference -> #8832e8123
num3 => 123  => reference -> #32148734432
>>=>num1, num2, num3 have same value but differ location 
 
----------------------------------------------------------------------------------------------------------------------------------------------

2. >>---Heap (Non-Primitive)--->

let Boy1 = {
  name: "Hridya",
  age: 22,
  emailId: "hridyam123@gmail.com",
};

let Boy2 = Boy1;
let Boy3 = Boy1;
Boy2.age = 23;

console.table(Boy1.age); => 23
console.table(Boy2.age); => 23
console.table(Boy3.age); => 23

Boy1 =>{ name: 'Hridya', age: 23, emailId: 'hridyam123@gmail.com' }  --> Reference(Stack): #12712637 --> Reference(Heap): #123441324
Boy2 =>{ name: 'Hridya', age: 23, emailId: 'hridyam123@gmail.com' }  --> Reference(Stack): #1324781234 --> Reference(Heap): #123441324
Boy3 =>{ name: 'Hridya', age: 23, emailId: 'hridyam123@gmail.com' }  --> Reference(Stack): #12773474812 --> Reference(Heap): #123441324



+-------------------------------------------------------+
|                         HEAP                          |
|          (Large, stores objects dynamically)          |
+-------------------------------------------------------+
|  #1001 :  { name: "Aman", age: 21 }                   |
|                                                       |
|  #2001 :  [1, 2, 3]                                   |
|                                                       |
|  #3005 :  function greet() { ... }                    |
+-------------------------------------------------------+
*/

