/*
2. Constructor (Singleton)
const tinderUser = new Object; => {} -> (Singleton)
 
const tinderUser = {} => {} -> (Non Singleton)
*/

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Hridyam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Aman",
      middleName: "Kumar",
      lastName: "Singh",
    },
  },
  email: "aman123@gmail.com",
};

console.log(regularUser.fullName.userFullName.firstName); //=> Aman

console.log(regularUser.fullName?.userFullName.firstName);

//<-|:::Now, We'll learn marging Objects:::|->
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = { obj1, obj2 };
console.log(obj3); //=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2);
console.log(obj4); //=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2); //{}-> target | obj1, obj2 -> source
console.log(obj5); //=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }, output same but good practice

const obj6 = { ...obj1, ...obj2 }; //Spread Operator
console.log(obj6); //=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
  {
    id: 1,
    email: "user1@gmail.com",
  },
  {
    id: 2,
    email: "user2@gmail.com",
  },
  {
    id: 3,
    email: "user3  @gmail.com",
  },
];

console.log(users[0].id);

console.log(tinderUser); //=> { id: '123abc', name: 'Hridyam', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //=>[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //=>[ '123abc', 'Hridyam', false ]
console.log(Object.entries(tinderUser)); //=>[ [ 'id', '123abc' ], [ 'name', 'Hridyam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //=>true

/* >==::: Destructuring Object :::==> */

const course = {
  cousreName: "JS in hindi",
  price: "999",
  courseInstructor: "Hitesh Sir",
};

/*
:::Way1:::
const {courseInstructor} = course;
console.log(courseInstructor); => Hitesh Sir
*/

/*
:::Way2:::
const {courseInstructor: instructor} = course;
console.log(instructor); => Hitesh Sir
*/

/* >==::: APIs (JSON):::==> 
{
  "name": "Hridya",
  "courseName": "JS in Hindi",
  "price": "Free"
}
[
  {},
  {},
  {}
]
  all keys are strings
  for API -> randomuser me
  for understand -> json formatter
*/
