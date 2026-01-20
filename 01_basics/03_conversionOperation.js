let score = "33abc";
console.log(typeof score); //=> string

let valueInNunber = Number(score);
console.log(valueInNunber); //NaN => Not a Number

/*<----:::Conversion :::---->

value => number
"33" => 33
"33abc" => NaN
true => 1
undefined => NaN
null => 0
"" or '' or ``=> 0

value => boolean
zero => false
non zero => true
"" or '' or `` => false
null => false
undefined => false

value => string
null => "null"
NaN => "NaN"
undefined => "undefined"
true => "true"
false => "false"

<----:::End Conversion:::---->
*/

let value = 3;
let negValue = -value;

// console.log(value);  ==> -3
// console.log(2+2);
// console.log(2-2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

console.log(+true); //=> 1
console.log(+""); //=> 0

let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;

/* 
<---::: Operation :::--->

console.log("1" + 2); => 12
console.log(1 + "2"); => 12
console.log("1" + 2 + 2); => 122
console.log(1 + 2 + "2"); => 32
console.log(3 + ((4 * 5) % 3)); => 5
console.log(+true); => 1
console.log(true+); => Error
console.log(+"") => 0

<---::: End Operation :::--->
*/

console.log(Boolean(null)); //=> false
console.log(Boolean(undefined)); //=> false
console.log(Boolean(NaN)); //=> false
