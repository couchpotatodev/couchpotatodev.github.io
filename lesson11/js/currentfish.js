const URL = 'http://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=e19324e68acdb4e51eb479125a003931';
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);
   

 //current 
   
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('maxtemp').textContent = jsObject.main.temp_max;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;




  });

