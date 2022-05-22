const API_KEY = "ae70942840e138b1ac3baf2ebe8aca89";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
    city.innerHTML = `${data.name}, `;
    weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°`; 
});
}

function onGeoError() {
    alert("위치 정보를 받아올 수 없습니다. 위치 권한을 허용해 주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);