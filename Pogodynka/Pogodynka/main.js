const api = {
    key: "4e4dc17038f65f4c92e60ab0ec97aa30",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const szukaj = document.querySelector('.szukaj');
  szukaj.addEventListener('keypress', setQuery);
  
  function setQuery(event) {
    if (event.keyCode == 13) {
      getRes(szukaj.value);
    }
  }

  
  function getRes (query) {

    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.lokacja .miasto');
    city.innerText = `${weather.name}, ${weather.sys.country}`;//weathermap pokaze niestety po angielsku

  
    let teraz = new Date();
    let data = document.querySelector('.lokacja .data');
    data.innerText = dataBuilder(teraz);
  
    let temp = document.querySelector('.teraz .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.teraz .weather');
    weather_el.innerText = weather.weather[0].main;

  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
 
}
  
  function dataBuilder (d) {
    let miesiące = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", 
    "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    let dni = ["Niedziel", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  
    let dzien = dni[d.getDay()];
    let data = d.getDate();
    let mies = miesiące[d.getMonth()];
    let rok = d.getFullYear();
  
    return `${dzien} ${data} ${mies} ${rok}`;
  }