const nameElement = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name");
const ageElement = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age");

/* :::Wronge Way:::
nameInput.addEventListener("input", (e) => {
  localStorage.myName = e.target.value;
  nameElement.innerText = localStorage.myName;
});

nameElement.innerText = localStorage.myName;
*/

/*Reccomended Way
nameElement.innerText = localStorage.getItem("myName");
nameInput.addEventListener("input", (e) => {
  localStorage.setItem("myName", e.target.value);
  nameElement.innerText = localStorage.getItem("myName");
});

ageElement.innerText = localStorage.getItem("myAge");
ageInput.addEventListener("input", (e) => {
  localStorage.setItem("myAge", e.target.value);
  ageElement.innerText = localStorage.getItem("myAge");
});
*/

const userData = JSON.parse(localStorage.getItem("userData")) || {};

nameElement.innerText = userData?.name || "none";
ageElement.innerText = userData?.age || "none";

nameInput.addEventListener("input", (e) => {
  userData.name = e.target.value;
  localStorage.setItem("userData", JSON.stringify(userData));
  nameElement.innerText = e.target.value;
});

ageInput.addEventListener("input", (e) => {
  userData.age = e.target.value;
  localStorage.setItem("userData", JSON.stringify(userData));
  ageElement.innerText = e.target.value;
});


/* Delete data in local storage
1. localStarage.clear() :delete all
2. localStarage.removeItem('itemName')
*/