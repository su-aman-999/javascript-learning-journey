const p = new Promise((resolve, reject) => {
  document.querySelector("#resolve-btn").addEventListener("click", () => {
    resolve("Resolved");
  });

  document.querySelector("#reject-btn").addEventListener("click", () => {
    reject("Rejected");
  });
});

p.then((thenData) => {
  console.log(thenData);
})
  .catch((catchData) => {
    console.log(catchData);
  })
  .finally(() => {
    console.log("In both case, Finally will call");
  });
