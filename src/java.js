function updateWeather(response) {
  let temperatureElement = document.querySelector("#temp-now");
  let temperature = response.data.temperature.current;
  let cityChosenElement = document.querySelector("#city-chosen");

  cityChosenElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function cityEntered(city) {
  let apiKey = "359oa204a337et1ba70bbe4fd2e2f596";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchCityForm(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-search");

  cityEntered(citySearchInput.value);
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", searchCityForm);

cityEntered("Paris");
