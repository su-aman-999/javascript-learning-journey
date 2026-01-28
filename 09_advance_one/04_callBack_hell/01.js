function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest("GET", "https://dummyjson.com/users", (userData) => {
  makeHttpRequest(
    "GET",
    `https://dummyjson.com/posts/user/${userData.users[0].id}`,
    (postData) => {
      makeHttpRequest(
        "GET",
        `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
        (commentData) => {
          makeHttpRequest(
            "GET",
            `https://dummyjson.com/users/${commentData.comments[0].user.id}`,
            (commentUserData) => {
              console.log(commentUserData);
            }
          );
        }
      );
    }
  );
});
