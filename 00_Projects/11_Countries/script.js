const url =
  "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currencies,languages,borders,cca3,flags";

const countriesContent = document.querySelector(".contries-content");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country.borders);

      const countryCard = document.createElement("a");
      countryCard.href = `./country.html?name=${country.name.common}`;
      countryCard.classList.add("country-card");
      countryCard.innerHTML = `
    <img src=${country.flags.svg} alt=${country.flags.alt} title=${country.flags.alt}/>
            <div class="card-content">
              <h3>${country.name.common}</h3>
              <p><span>Population: </span>${country.population.toLocaleString("en-IN")}</p>
              <p><span>Region: </span>${country.region}</p>
              <p><span>Capital: </span>${country.capital.join(", ") || "No Capital"}</p>
            </div>
         `;
      countriesContent.appendChild(countryCard);
    });
  });
