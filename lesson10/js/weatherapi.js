const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e19324e68acdb4e51eb479125a003931';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);



    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; 
    const desc = jsObject.list[0].weather[0].description; 


  

   document.getElementById('imagesrc').textContent = imagesrc; 
   document.getElementById('icon').setAttribute('src', imagesrc);
   document.getElementById('icon').setAttribute('alt', desc);




  });

