const api = "https://api.openweathermap.org/data/2.5/weather?q=";

const apiKey = "b33c66c29c98341b615178783182c065";

let placeName = localStorage.getItem("placeName");

async function getWeather(placeName) {
    const requestUrl = api + placeName + "&units=metric" + "&appid=" + apiKey;
    if (placeName == "") {
        placeName = "Delhi";
    }
    await fetch(requestUrl)
        .then(response => response.json())
        .then(function(data) {
            console.log(data);
            let currentObject = data.main;
            document.getElementById("placeName").innerText = placeName;
            document.getElementById("temp").innerHTML = "Temp: " + 
            currentObject.temp + "&deg;C";
            document.getElementById("feels_like").innerHTML = "Feels Like: " + 
            currentObject.feels_like + "&deg;C";
            document.getElementById("temp_min").innerHTML = "Temp Min: " + 
            currentObject.temp_min + "&deg;C";
            document.getElementById("temp_max").innerHTML = "Temp Max: " + 
            currentObject.temp_max + "&deg;C";
            document.getElementById("pressure").innerText = "Pressure: " + 
            currentObject.pressure + " hPa";
            document.getElementById("humidity").innerText = "Humidity: " + 
            currentObject.humidity + "%";
        })
}

getWeather(placeName);

let getNameForm = document.getElementById("getNameForm");

getNameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    placeName = document.getElementById("name").value;
    localStorage.setItem("placeName", placeName);
    getWeather(placeName);
});