const URL = 'http://api.openweathermap.org/data/2.5/weather?id=1728930&units=imperial&appid=e19324e68acdb4e51eb479125a003931';
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('weather').textContent = jsObject.weather[0].description;
 //   document.getElementById('windSpeed').textContent = jsObject.wind.speed;

  });

