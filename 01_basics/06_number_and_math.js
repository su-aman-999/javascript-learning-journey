const score = 400; //=> Number Literal
console.log(score); //=> 400

const balance = new Number(200);
console.log(balance); //=> 200

console.log(balance.toString().length); // => 3

console.log(balance.toFixed(2)); // => 200.00

const tempNum = 231.2312;
console.log(tempNum.toPrecision(4)); // => 231.2
console.log(tempNum.toPrecision(2)); // => 2.3e+2
console.log(tempNum.toPrecision(6)); // => 231.231
console.log(tempNum.toPrecision(1)); // => 2e+2

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // => 1,000,000
console.log(hundreds.toLocaleString("en-IN")); // => 10,00,000

console.log(Number.MIN_VALUE); // => 5e-324
console.log(Number.MAX_VALUE); // => 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); // => -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991

/*>>====:::Maths:::====>>*/

console.log(Math);
console.log(Math.abs(-4)); // -4 --> 4 || 4 --> 4
console.log(Math.round(4.5)); //=> 5
console.log(Math.round(4.4)); //=> 4
console.log(Math.round(4.7)); //=> 5
console.log(Math.ceil(4.01)); //=> 5
console.log(Math.floor(4.2)); //=> 4
console.log(Math.sqrt(56)); //=> 7.483314773547883
console.log(Math.min(4, 3, 6, 8)); //=> 3
console.log(Math.max(4, 3, 6, 8)); //=> 8

console.log(Math.random());

//kamal ka code find random numbers 35 <-> 56 both are include
for (let i = 0; true; i++) {
  let num = Math.floor(Math.random() * 22 + 35);
  if (num === 37) {
    console.log(`Num: ${num} i: ${i}`);
    break;
  }
}




