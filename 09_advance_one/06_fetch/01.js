const body = document.querySelector("body");
let ID = document.createElement("h2");
let Name = document.createElement("h2");
let Age = document.createElement("h2");
let Address = document.createElement("h2");

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((usersList) => usersList.users)
  .then((users) => users[0])
  .then((user) => user.id)
  .then((userID) => {
    fetch(`https://dummyjson.com/users/${userID}`)
      .then((data) => data.json())
      .then((userDetails) => {
        ID.innerText = `ID: ${userDetails.id}`;
        body.appendChild(ID);

        Name.innerText = `Name: ${userDetails.firstName} ${userDetails.lastName}`;
        body.appendChild(Name);

        Age.innerText = `Age: ${userDetails.age}`;
        body.appendChild(Age);

        Address.innerText = `Address: ${userDetails.address.address}, ${userDetails.address.city}`;
        body.appendChild(Address);
      });
  });

fetch("https://dummyjson.com/users").then((res) => {
  console.log(res.ok);
  console.log(res.status);
  console.log(res.headers);
});
