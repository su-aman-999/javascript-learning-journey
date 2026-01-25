const user = {
  firstName: "Aman",
  lastName: "Kumar",
  age: 22,
  address: {
    city: "Delhi",
  },
  getFullName: function () {
    return this.firstName + this.lastName;
  },
};

console.log(user.firstName); //Aman
console.log(user.address); //undefined

/*
console.log(user.address.city); 
 ↪ error
 ↪ it's a problem
*/

//1st way
if (user.address) console.log(user.address.city);

//2nd way
console.log(user.address && user.address.city);

//3rd way
console.log(user.address?.city);

//4th way
const a = "city";
console.log(user.address?.[a]);

//5th way (for function)
console.log(user.getFullName?.());
