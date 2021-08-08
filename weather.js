
function onGeoOK(location){
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const API_KEY = "d196e2d69e5b8dde8046b8b597f5afc4";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child")
            const weather = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}, ${data.main.temp}℃`
        });
}
function onGeoNO(){
    console.log("GIVE LOCATION");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoNO);