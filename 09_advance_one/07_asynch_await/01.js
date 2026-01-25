async function makeAsyncRequest() {
  const url = "//localhost:5000/api/data?delay=5000";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
/*
↪ Use difference thread 
↪ The data that is sent by fetch is not promise data and is not actual data
↪ We can not use of wait keyword outside of async function body
*/

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
