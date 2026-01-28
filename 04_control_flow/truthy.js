const userEmail = "aman123@gmail.com";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
/*
=|:::truthy values:::|=
1. true
2. "0"
3. "false"
4. " "
5. [] (empty array)
6. {} (empty object)
7. function(){}

=|:::falsy values:::|=
1. false
2. 0
3. -0
4. 0n (BigInt)
5. null
6. undefined
7. NaN

false == 0 => true
false == "" => true
0 == "" => true
*/

const arr = [];
if (arr.length === 0) {
  console.log("Array is empty");
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}


//:::Nullish Coalescing Operator (??): null, undefiend:::
let num1 = 5 ?? 10; //=> 5
let num2 = null ?? 3; //=> 3
let num3 = undefined ?? 5; //=> 5
let num4 = null ?? undefined; //=> undefined
let num5 = undefined ?? null; //=> null
let num6 = null ?? []; //=> []
let num7 = {} ?? 5; //=> {}
let num8 = 0 ?? 5; //=> 0


/*
:::Terniary Operator:::
condition ? true : false;
*/

 