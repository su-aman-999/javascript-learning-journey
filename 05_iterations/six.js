/*
👉forEach() => doesn't return anything explicite or implecite
*/

const coding = ["js", "ruby", "java", "python", "cpp"];

const value = coding.forEach((item) => {
  return item;
});

console.log(value); //=> undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter (()=>{}) return array or empty array 

// const newNums = myNums.filter((num) => {
//   if (num > 5) return value;
// });

const newNums = myNums.filter((num) => num > 5);
console.log(newNums); //=>[ 6, 7, 8, 9, 10 ]

// const newNumss = myNums.filter((num) => {
//   if (num > 5) return num;
// });
// console.log(newNums); //=>[ 6, 7, 8, 9, 10 ]

const ansNums = [];
myNums.forEach((num) => {
  if (num > 5) ansNums.push(num);
});
console.log(ansNums); //=>[ 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "Science", publish: 2001, edition: 2015 },
  { title: "Book Four", genre: "History", publish: 1987, edition: 2010 },
  { title: "Book Five", genre: "Fantasy", publish: 1999, edition: 2020 },
  { title: "Book Six", genre: "Biography", publish: 2005, edition: 2018 },
  { title: "Book Seven", genre: "Technology", publish: 2010, edition: 2022 },
  { title: "Book Eight", genre: "Mystery", publish: 1995, edition: 2012 },
  { title: "Book Nine", genre: "Adventure", publish: 1989, edition: 2006 },
  { title: "Book Ten", genre: "Education", publish: 2015, edition: 2023 },
];

const userBooks = books.filter((book) => book["genre"] === "History");

console.log(userBooks);
/*👉output:-
[
  {
    title: 'Book Four',
    genre: 'History',
    publish: 1987,
    edition: 2010
  }
]
*/

const lsBooks = books.filter((book) => book["publish"] > 2000);
console.log(lsBooks);
/*👉Output:-
[
  {
    title: 'Book Three',
    genre: 'Science',
    publish: 2001,
    edition: 2015
  },
  {
    title: 'Book Six',
    genre: 'Biography',
    publish: 2005,
    edition: 2018
  },
  {
    title: 'Book Seven',
    genre: 'Technology',
    publish: 2010,
    edition: 2022
  },
  {
    title: 'Book Ten',
    genre: 'Education',
    publish: 2015,
    edition: 2023
  }
]
*/

 
