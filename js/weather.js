const API_KEY = "59229def0c12d575d02afbf50b4d4735"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:last-child');
        const city = document.querySelector('#weather span:first-child');
        city.innerText = data.name;
        const temp = Math.round(data.main.temp);
        weather.innerText = `${temp}° / ${data.weather[0].main}`;
    });
}
function onGeoeror() {
    alert("Geoeoror");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoeror);