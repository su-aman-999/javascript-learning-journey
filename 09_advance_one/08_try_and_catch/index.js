const user = {
  name: "Aman",
  age: 22,
};

/*
console.log(user.address.city); => index.js:6 Uncaught TypeError: Cannot read properties of undefined (reading 'city')
*/

try {
  console.log(user.address.city);
} catch (error) {
  //• error is object
  console.dir(error);
  /*↪ 
  message: "Cannot read properties of undefined (reading 'city')"
  stack: "TypeError: Cannot read properties of undefined (reading 'city')\n    at http://127.0.0.1:5500/JavaScript/09_advance_one/08_try_and_catch/index.js:11:28"
  [[Prototype]]: Error*/

  console.log(error.message); //Cannot read properties of undefined (reading 'city')

  console.log(error.name); //TypeError

  console.log(error.stack); //TypeError: Cannot read properties of undefined (reading 'city') at index.js:11:28
} finally {
  //finally run in every case.
  console.log("Hello, I'm finally");
}

try {
  console.log(a);
} catch (err) {
  console.dir(err);
  console.log(err);
}
console.log(89 + 11);

console.log("---------------------NOW---------------------");

async function makeAsyncRequest() {
  try {
    const url = "//localhost:5000/api/data?delay=1000";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (errorMessage) {
    console.log(errorMessage);
  } finally {
    console.log("Hii, I'm a finally");
  }
}
/*
↪ Use difference thread 
↪ The data that is sent by fetch is not promise data and is not actual data
↪ We can not use of wait keyword outside of async function body
*/
makeAsyncRequest();

function makeSyncRequest() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    console.log(xhr);
  });

  xhr.open("get", "//localhost:5000/api/data?delay=5000", false);

  xhr.send();
}
//↪ Use main thread
//↪ Freez Browser
