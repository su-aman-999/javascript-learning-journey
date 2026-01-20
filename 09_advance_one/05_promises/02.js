//1st Way
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asunc task ic complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

//2nd Way
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

//3rd Way
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "aman", email: "aman123@gmail.com" });
  }, 1000);
});

promiseThree.then((userData) => {
  console.log(userData);
});

//4th Way
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "amansingh", password: "123@aman" });
    } else {
      reject("ERROR: Something went wornge");
    }
  }, 1000);
});

promiseFour
  .then((userData) => {
    console.log(userData);
    return userData.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => console.log("The promise either is resovled or rejected"));

//5th Way
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "chalakadami", password: "chalak@123" });
    } else {
      reject("ERROR: Chalak Adami ka Error");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//End Promise Creating way

//fetch (1st way)
async function getAllUser() {
  try {
    console.log("aman");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUser();

//fetch (2nd way)
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
