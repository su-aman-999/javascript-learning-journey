console.log("2" > 1); //=> true
console.log("02" > 1); //=> true
console.log("2a" > 1); //=> false
console.log("2a" < 1); //=> false
console.log("2a" == 1); //=> false
// We shouldn't compare value or variable of different types

console.log(null > 0); // => false
console.log(null < 0); // => false
console.log(null == 0); // => false
console.log(null === 0); // => false
console.log(null >= 0); // => true
// < , > , <= , >= convert of null as 0, but == and === don't

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
// All false

console.log(null == undefined); // It's true and all flase
console.log(null === undefined); 
console.log(null > undefined);
console.log(null < undefined);
console.log(null >= undefined);
console.log(null <= undefined);

console.log(NaN == NaN);
console.log(NaN == null);
console.log(NaN == undefined);
console.log(NaN == 0);
console.log(NaN == "");
// all false

// :::There are all nonsense operations

// (Strict Check) === check value and datatype 
// == check only value
