/* --------------------------------------------------
   DOM Elements Selection
-------------------------------------------------- */
const countriesContent = document.querySelector(".countries-content");
const filterSelect = document.querySelector(".filter-select");
const searchInput = document.querySelector(".search-input");

/* Store all fetched countries for filtering & search */
let allCoutriesList;

/* --------------------------------------------------
   Render Country Cards on UI
-------------------------------------------------- */
function setCountryDetails(data) {
  // Clear existing countries
  countriesContent.innerHTML = "";

  // Create card for each country
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.href = `./country.html?name=${country.name.common}`;
    countryCard.classList.add("country-card");

    countryCard.innerHTML = `
    <img src=${country.flags.svg} alt=${country.flags.alt} title=${country.flags.alt}/>
            <div class="card-content">
              <h3>${country.name.common}</h3>
              <p><span>Population: </span>${country.population.toLocaleString("en-IN")}</p>
              <p><span>Region: </span>${country.region}</p>
              <p><span>Capital: </span>${country.capital?.join(", ") || "No Capital"}</p>
            </div>
         `;
    countriesContent.appendChild(countryCard);
  });
}

/* --------------------------------------------------
   Fetch Countries Data from API
-------------------------------------------------- */
function renderCountriesCard(url) {
  if (url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Save data globally for search functionalit
        allCoutriesList = data;

        // Render countries on U
        setCountryDetails(data);
      });
  }
}

/* Initial load: fetch all countries */
renderCountriesCard(
  "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currencies,languages,borders,cca3,flags",
);

/* --------------------------------------------------
   Filter Countries by Region
-------------------------------------------------- */
filterSelect.addEventListener("change", (e) => {
  const region = e.target.value;

  // Show all countries
  if (region === "All Countries") {
    renderCountriesCard(
      "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currencies,languages,borders,cca3,flags",
    );
  }
  // Filter by selected region
  else {
    renderCountriesCard(`https://restcountries.com/v3.1/region/${region}`);
  }
});

/* --------------------------------------------------
   Search Countries by Name
-------------------------------------------------- */
searchInput.addEventListener("input", (e) => {
  // Filter countries based on search input
  const data = allCoutriesList.filter((coutry) =>
    coutry.name.common.toLowerCase().startsWith(e.target.value.toLowerCase()),
  );

  // Update UI with filtered countries
  setCountryDetails(data);
});
