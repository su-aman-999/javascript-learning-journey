/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(`Got the data`);
    console.log(json);
    userData = json;
  });
*/
const image = document.querySelector("img");

document.querySelector("button").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      image.src = json.message;
    });
});
