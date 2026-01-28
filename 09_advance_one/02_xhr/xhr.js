const image = document.querySelector("img");

document.querySelector("button").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    image.src = xhr.response.message;
  });

  // xhr.onload = () => {
  //   image.src = xhr.response.message;
  // };

  xhr.responseType = "json";

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});

/* 
x -> XML
h -> Http
r -> Request
*/
