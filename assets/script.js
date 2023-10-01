var apiKey = "cdce0ff6cdae7cd27b86010906e35a95";
var requestURL = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={"cdce0ff6cdae7cd27b86010906e35a95"}


function SearchFormSubmit(event) {
    event.PreventDefault();

var searchFormEl = document.querySelector('#cityName').value;
if (!cityName){
console.error("city not found");
return;
}

var queryString = //'./search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

}