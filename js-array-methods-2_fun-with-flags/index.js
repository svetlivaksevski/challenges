import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

// First part 
// const foundCountry = countries.find((country) => country.name.toLowerCase().startsWith(searchString.toLowerCase()));

//First part
//   if (foundCountry) {
//     const countryElement = Country(foundCountry);
//     container.append(countryElement);
//   }
// });

// Second part
const foundCountries = countries.filter((country) => country.name.toLowerCase().startsWith(searchString.toLowerCase()));

// Second part

foundCountries.map((country) => {
if (country) {
  const countryElement = Country(country);
  container.append(countryElement);
}
});
});