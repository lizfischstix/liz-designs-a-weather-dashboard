var curentWeather = document.getElementById('crntWea');

var srchBtn = document.getElementById('srchBtn')
var cityInput = document.getElementById('cityName');
var API_KEY = "cdce0ff6cdae7cd27b86010906e35a95";
var WEATHER_API_KEY = "f22b30c177cf02e3cb270d3762836e86";
var currentCityEl = document.getElementById("currentCity")
var currentTempEl = document.getElementById("crntTemp")
var weatherIconEl = document.getElementById("weatherIcon")
var crntWindSpeedEl = document.getElementById("crntWind")
var crntHumidityEl = document.getElementById("crntHumidity")


function searchFormSubmit(event) {
    event.preventDefault();

    if (!cityInput) {
        console.error("city not found");
        return;
    }

    console.log(cityInput.value);
    var cityName = cityInput.value;
    getLatAndLong(cityName)

}


//api pull framework.

function getLatAndLong(cityName) {
    var geoCodeURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + API_KEY;

    fetch(geoCodeURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            getCurrentWeather(data[0].lat, data[0].lon);
        })

}

function getCurrentWeather(lat, lon) {

    var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + API_KEY;

    fetch(currentWeatherURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            currentCityEl.textContent = data.name + " " + data.dt
            weatherIconEl.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
            currentTempEl.textContent = "Temp: " + data.main.temp + " F"
            crntWindSpeedEl.textContent = "Wind Speed: " + data.wind.speed + " mph"
            crntHumidityEl.textContent = "Humidity: " + data.main.humidity + "%"
        })

    function getCurrentWeather(lat, lon) {

        var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + API_KEY;

        fetch(currentWeatherURL)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);

                currentCityEl.textContent = data.name + " " + data.dt
                weatherIconEl.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
                currentTempEl.textContent = "Temp: " + data.main.temp + " F"
                crntWindSpeedEl.textContent = "Wind Speed: " + data.wind.speed + " mph"
                crntHumidityEl.textContent = "Humidity: " + data.main.humidity + "%"
            })
    }

    function getFiveDayForecast(lat, lon) {

        var currentWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + API_KEY;

        fetch(currentWeatherURL)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);

                currentCityEl.textContent = data.name + " " + data.dt
                weatherIconEl.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
                currentTempEl.textContent = "Temp: " + data.main.temp + " F"
                crntWindSpeedEl.textContent = "Wind Speed: " + data.wind.speed + " mph"
                crntHumidityEl.textContent = "Humidity: " + data.main.humidity + "%"
            })
    }
 localStorage.setItem 
    srchBtn.addEventListener('click', searchFormSubmit);

