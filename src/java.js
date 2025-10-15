function updateWeather(response) {
  let temperatureElement = document.querySelector("#temp-now");
  let temperature = response.data.temperature.current;
  let cityChosenElement = document.querySelector("#city-chosen");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="city-weather-emoji"/>`;
  cityChosenElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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

function getForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="forecast-day">
            <div class="forecast-date">${day}</div>
            <div class="forecast-emoji">⛅</div>
            <div class="forecast-degrees">
              <div class="forecast-temperature">
                <strong>15°</strong>
              </div>
              <div class="forecast-temperature">9°</div>
            </div>
          </div>`;
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}
getForecast();
