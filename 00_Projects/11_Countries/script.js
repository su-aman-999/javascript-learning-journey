const countriesContent = document.querySelector(".contries-content");
const filterSelect = document.querySelector(".filter-select");
const searchInput = document.querySelector(".search-input");

let allCoutriesList;

function setCountryDetails(data) {
  countriesContent.innerHTML = "";
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

function renderCountriesCard(url) {
  if (url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        allCoutriesList = data;
        setCountryDetails(data);
      });
  }
}

renderCountriesCard(
  "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currencies,languages,borders,cca3,flags",
);

filterSelect.addEventListener("change", (e) => {
  console.log(e.target.value);
  const region = e.target.value;
  if (region === "All Countries") {
    renderCountriesCard(
      "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currencies,languages,borders,cca3,flags",
    );
  } else {
    renderCountriesCard(`https://restcountries.com/v3.1/region/${region}`);
  }
});

searchInput.addEventListener("input", (e) => {
  const data = allCoutriesList.filter((coutry) =>
    coutry.name.common.toLowerCase().startsWith(e.target.value.toLowerCase()),
  );

  setCountryDetails(data);
});

