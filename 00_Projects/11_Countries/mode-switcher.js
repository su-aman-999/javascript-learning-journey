/* --------------------------------------------------
   DOM Elements Selection
-------------------------------------------------- */
const body = document.querySelector("body");
const mode = document.querySelector(".header-mode");
const modeLogo = document.querySelector(".header-mode");

/* --------------------------------------------------
   Apply saved theme on page load
-------------------------------------------------- */
if (sessionStorage.getItem("isMode") === "dark-mode") {
  body.classList.replace("light-mode", "dark-mode");
  modeLogo.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;Light Mode`;
} else {
  body.classList.replace("dark-mode", "light-mode");
  modeLogo.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;Dark Mode`;
}

/* --------------------------------------------------
   Toggle Dark / Light Mode on Click
-------------------------------------------------- */
mode.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    // Switch to Dark Mode
    body.classList.replace("light-mode", "dark-mode");
    sessionStorage.setItem("isMode", "dark-mode");
    modeLogo.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;Light Mode`;
  } else {
    // Switch to Light Mode
    body.classList.replace("dark-mode", "light-mode");
    sessionStorage.setItem("isMode", "light-mode");
    modeLogo.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;Dark Mode`;
  }
});
