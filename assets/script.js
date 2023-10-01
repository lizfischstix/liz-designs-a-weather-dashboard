var apiKey = "cdce0ff6cdae7cd27b86010906e35a95";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather";
var cityInput = $("#cityName");
var Button = $("#srchBtn");
var Current = $("#crntWea");
var Recent = $("#rcntSearch");
var upComing = $("#5Day")

$(".Button").on("click", function(){
var city = $(this).siblings(".srcLoc").val();
console.log(srchLoc);
})