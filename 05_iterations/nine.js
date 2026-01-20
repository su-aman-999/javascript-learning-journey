/*📌Array.reduce()
syntax:-
const newNum = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue ) 
-> first time (accumulator = initialValu) 
-> after that (accumulator = accumulator + currentValue)
*/

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`Accumulator: ${acc} and CurrentValue: ${currval}`);
  return acc + currval;
}, 0);

console.log(myTotal); //=>6

const ansNum = myNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(myTotal); //=>6

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 2499,
  },
  {
    itemName: "c++ course",
    price: 3499,
  },
  {
    itemName: "mobile dev course",
    price: 5599,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

totalPrice = 0;
for (item of shoppingCart) {
  totalPrice += item.price;
}

console.log(`Total Price: ${totalPrice}`); //=> Total Price: 27595

//using reduce
console.log(shoppingCart.reduce((acc, item) => acc + item.price, 0)); //=>27595
