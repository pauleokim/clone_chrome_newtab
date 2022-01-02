const API_KEY = "6fd424164fdd6a0c8dea32c5ad3b8125";

function onGeoSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = document.querySelector("#weather span:first-child")
      const cityContainer = document.querySelector("#weather span:nth-child(2)")
      const weatherIcon = document.querySelector("#weather img")
      
      console.log(data.name)
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.innerText = `${Math.floor(data.main.temp)}°C`
      cityContainer.innerText = data.name
      

    });
}


function onGeoFail(){
  alert("Can't find you, sorry");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);

// Weather icon source
// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2