function searchCity(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-search");
  let cityChosenElement = document.querySelector("#city-chosen");
  cityChosenElement.innerHTML = citySearchInput.value;
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", searchCity);
