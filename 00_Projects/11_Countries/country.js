const countryName = new URLSearchParams(location.search).get("name");
const countryFlag = document.querySelector(".more-content--flag img");
const commonCountryName = document.querySelector(".country-name");

const nativeCountryName = document.querySelector("#native-name");
const countryPopulation = document.querySelector("#population");
const countryRegion = document.querySelector("#region");
const countrySubRegion = document.querySelector("#sub-region");
const countryCapital = document.querySelector("#capital");
const countryTimezones = document.querySelector("#timezone");
const countryArea = document.querySelector("#area");
const countryTopLevelDomain = document.querySelector("#tld");
const countryCorrencies = document.querySelector("#currencies");
const countryLanguages = document.querySelector("#languages");
const countryContinents = document.querySelector("#continents");
const countryBorders = document.querySelector("#borders");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country);

    countryFlag.alt = country.flags.alt;
    countryFlag.src = country.flags.svg;

    console.log(country);

    commonCountryName.innerText = country.name.common;

    if (country.name.nativeName) {
      const nativeNames = Object.values(country.name.nativeName)[0];
      nativeCountryName.innerHTML = `<span>Native Name: </span>  ${nativeNames ? Object.values(country.name.nativeName)[0].official : country.name.common}`;
    } else
      nativeCountryName.innerHTML = `<span>Native Name: </span>Not Applicable`;

    countryPopulation.innerHTML = `<span>Population: </span>${country.population.toLocaleString("en-IN")}`;
    countryRegion.innerHTML = `<span>Region: </span>${country.region}`;
    countrySubRegion.innerHTML = `<span>Sub Region: </span>${country.subregion || country.region}`;
    countryCapital.innerHTML = `<span>Capital: </span>${country.capital || "Not Capital"}`;
    countryTimezones.innerHTML = `<span>Timezones: </span>${country.timezones.join(", ")}`;
    countryArea.innerHTML = `<span>Area: </span>${country.area}`;
    countryTopLevelDomain.innerHTML = `<span>Top Level Domain: </span>${country.tld}`;

    if (country.currencies) {
      const currencieList = Object.values(country.currencies).map(
        (currencie) => `${currencie.name}(${currencie.symbol})`,
      );
      countryCorrencies.innerHTML = `<span>Currencies: </span>${currencieList.join(", ")}`;
    } else
      countryCorrencies.innerHTML = `<span>Currencies: </span>Not Applicable`;

    if (country.languages)
      countryLanguages.innerHTML = `<span>Languages: </span>${Object.values(country.languages).join(", ")}`;
    else countryLanguages.innerHTML = `<span>Languages: </span>Not Applicable`;
    countryContinents.innerHTML = `<span>Continents: </span>${country.continents.join(", ") || "NA"}`;

    const countryNamesAndCodes = {
      ABW: "Aruba",
      AFG: "Afghanistan",
      AGO: "Angola",
      AIA: "Anguilla",
      ALA: "Åland Islands",
      ALB: "Albania",
      AND: "Andorra",
      ARE: "United Arab Emirates",
      ARG: "Argentina",
      ARM: "Armenia",
      ASM: "American Samoa",
      ATA: "Antarctica",
      ATF: "French Southern and Antarctic Lands",
      ATG: "Antigua and Barbuda",
      AUS: "Australia",
      AUT: "Austria",
      AZE: "Azerbaijan",
      BDI: "Burundi",
      BEL: "Belgium",
      BEN: "Benin",
      BES: "Caribbean Netherlands",
      BFA: "Burkina Faso",
      BGD: "Bangladesh",
      BGR: "Bulgaria",
      BHR: "Bahrain",
      BHS: "Bahamas",
      BIH: "Bosnia and Herzegovina",
      BLM: "Saint Barthélemy",
      BLR: "Belarus",
      BLZ: "Belize",
      BMU: "Bermuda",
      BOL: "Bolivia",
      BRA: "Brazil",
      BRB: "Barbados",
      BRN: "Brunei",
      BTN: "Bhutan",
      BVT: "Bouvet Island",
      BWA: "Botswana",
      CAF: "Central African Republic",
      CAN: "Canada",
      CCK: "Cocos (Keeling) Islands",
      CHE: "Switzerland",
      CHL: "Chile",
      CHN: "China",
      CIV: "Ivory Coast",
      CMR: "Cameroon",
      COD: "DR Congo",
      COG: "Republic of the Congo",
      COK: "Cook Islands",
      COL: "Colombia",
      COM: "Comoros",
      CPV: "Cape Verde",
      CRI: "Costa Rica",
      CUB: "Cuba",
      CUW: "Curaçao",
      CXR: "Christmas Island",
      CYM: "Cayman Islands",
      CYP: "Cyprus",
      CZE: "Czechia",
      DEU: "Germany",
      DJI: "Djibouti",
      DMA: "Dominica",
      DNK: "Denmark",
      DOM: "Dominican Republic",
      DZA: "Algeria",
      ECU: "Ecuador",
      EGY: "Egypt",
      ERI: "Eritrea",
      ESH: "Western Sahara",
      ESP: "Spain",
      EST: "Estonia",
      ETH: "Ethiopia",
      FIN: "Finland",
      FJI: "Fiji",
      FLK: "Falkland Islands",
      FRA: "France",
      FRO: "Faroe Islands",
      FSM: "Micronesia",
      GAB: "Gabon",
      GBR: "United Kingdom",
      GEO: "Georgia",
      GGY: "Guernsey",
      GHA: "Ghana",
      GIB: "Gibraltar",
      GIN: "Guinea",
      GLP: "Guadeloupe",
      GMB: "Gambia",
      GNB: "Guinea-Bissau",
      GNQ: "Equatorial Guinea",
      GRC: "Greece",
      GRD: "Grenada",
      GRL: "Greenland",
      GTM: "Guatemala",
      GUF: "French Guiana",
      GUM: "Guam",
      GUY: "Guyana",
      HKG: "Hong Kong",
      HMD: "Heard Island and McDonald Islands",
      HND: "Honduras",
      HRV: "Croatia",
      HTI: "Haiti",
      HUN: "Hungary",
      IDN: "Indonesia",
      IMN: "Isle of Man",
      IND: "India",
      IOT: "British Indian Ocean Territory",
      IRL: "Ireland",
      IRN: "Iran",
      IRQ: "Iraq",
      ISL: "Iceland",
      ISR: "Israel",
      ITA: "Italy",
      JAM: "Jamaica",
      JEY: "Jersey",
      JOR: "Jordan",
      JPN: "Japan",
      KAZ: "Kazakhstan",
      KEN: "Kenya",
      KGZ: "Kyrgyzstan",
      KHM: "Cambodia",
      KIR: "Kiribati",
      KNA: "Saint Kitts and Nevis",
      KOR: "South Korea",
      KWT: "Kuwait",
      LAO: "Laos",
      LBN: "Lebanon",
      LBR: "Liberia",
      LBY: "Libya",
      LCA: "Saint Lucia",
      LIE: "Liechtenstein",
      LKA: "Sri Lanka",
      LSO: "Lesotho",
      LTU: "Lithuania",
      LUX: "Luxembourg",
      LVA: "Latvia",
      MAC: "Macau",
      MAF: "Saint Martin",
      MAR: "Morocco",
      MCO: "Monaco",
      MDA: "Moldova",
      MDG: "Madagascar",
      MDV: "Maldives",
      MEX: "Mexico",
      MHL: "Marshall Islands",
      MKD: "North Macedonia",
      MLI: "Mali",
      MLT: "Malta",
      MMR: "Myanmar",
      MNE: "Montenegro",
      MNG: "Mongolia",
      MNP: "Northern Mariana Islands",
      MOZ: "Mozambique",
      MRT: "Mauritania",
      MSR: "Montserrat",
      MTQ: "Martinique",
      MUS: "Mauritius",
      MWI: "Malawi",
      MYS: "Malaysia",
      MYT: "Mayotte",
      NAM: "Namibia",
      NCL: "New Caledonia",
      NER: "Niger",
      NFK: "Norfolk Island",
      NGA: "Nigeria",
      NIC: "Nicaragua",
      NIU: "Niue",
      NLD: "Netherlands",
      NOR: "Norway",
      NPL: "Nepal",
      NRU: "Nauru",
      NZL: "New Zealand",
      OMN: "Oman",
      PAK: "Pakistan",
      PAN: "Panama",
      PCN: "Pitcairn Islands",
      PER: "Peru",
      PHL: "Philippines",
      PLW: "Palau",
      PNG: "Papua New Guinea",
      POL: "Poland",
      PRI: "Puerto Rico",
      PRK: "North Korea",
      PRT: "Portugal",
      PRY: "Paraguay",
      PSE: "Palestine",
      PYF: "French Polynesia",
      QAT: "Qatar",
      REU: "Réunion",
      ROU: "Romania",
      RUS: "Russia",
      RWA: "Rwanda",
      SAU: "Saudi Arabia",
      SDN: "Sudan",
      SEN: "Senegal",
      SGP: "Singapore",
      SGS: "South Georgia",
      SHN: "Saint Helena, Ascension and Tristan da Cunha",
      SJM: "Svalbard and Jan Mayen",
      SLB: "Solomon Islands",
      SLE: "Sierra Leone",
      SLV: "El Salvador",
      SMR: "San Marino",
      SOM: "Somalia",
      SPM: "Saint Pierre and Miquelon",
      SRB: "Serbia",
      SSD: "South Sudan",
      STP: "São Tomé and Príncipe",
      SUR: "Suriname",
      SVK: "Slovakia",
      SVN: "Slovenia",
      SWE: "Sweden",
      SWZ: "Eswatini",
      SXM: "Sint Maarten",
      SYC: "Seychelles",
      SYR: "Syria",
      TCA: "Turks and Caicos Islands",
      TCD: "Chad",
      TGO: "Togo",
      THA: "Thailand",
      TJK: "Tajikistan",
      TKL: "Tokelau",
      TKM: "Turkmenistan",
      TLS: "Timor-Leste",
      TON: "Tonga",
      TTO: "Trinidad and Tobago",
      TUN: "Tunisia",
      TUR: "Turkey",
      TUV: "Tuvalu",
      TWN: "Taiwan",
      TZA: "Tanzania",
      UGA: "Uganda",
      UKR: "Ukraine",
      UMI: "United States Minor Outlying Islands",
      UNK: "Kosovo",
      URY: "Uruguay",
      USA: "United States",
      UZB: "Uzbekistan",
      VAT: "Vatican City",
      VCT: "Saint Vincent and the Grenadines",
      VEN: "Venezuela",
      VGB: "British Virgin Islands",
      VIR: "United States Virgin Islands",
      VNM: "Vietnam",
      VUT: "Vanuatu",
      WLF: "Wallis and Futuna",
      WSM: "Samoa",
      YEM: "Yemen",
      ZAF: "South Africa",
      ZMB: "Zambia",
      ZWE: "Zimbabwe",
    };

    if (country.borders) {
      country.borders.forEach((borderName) => {
        bdr = document.createElement("a");
        bdr.innerText = countryNamesAndCodes[borderName];
        bdr.href = `./country.html?name=${countryNamesAndCodes[borderName]}`;
        countryBorders.appendChild(bdr);
      });
    } else
      countryBorders.innerHTML = `<span>Border Countries: </span>No neighboring nations to display`;
  });


