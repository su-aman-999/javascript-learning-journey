const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10);
console.log(newNums);

//multiple methods ek sath use karna -> chaining
const listNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)
  .forEach((num) => console.log(num));
/*👉Output:-
41
51
61
71
81
91
101
*/


