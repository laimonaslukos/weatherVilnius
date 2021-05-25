"use strict";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Vilnius&appid=994ef8bada869cfa6a872520e2e7493c"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log("data", data);
    document.querySelector(".miestas").textContent = data.name;
    document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp - 273) + `&deg`;
    // document.querySelector(".kazkas").textContent = data.weather[0]["description"];
    document.querySelector(".debesuotumas").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;

  })
  .catch(function () {});
