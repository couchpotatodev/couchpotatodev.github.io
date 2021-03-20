const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var soda = document.querySelector('.sodacard');
 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  /* temporary checking for valid response and data parsing */
    const town = jsonObject['towns'];
 
   let sodaevents = document.createElement('p');  
   

    for (let i = 0; i < town.length; i++ ) { 
      
       if (town[i].name == "Soda Springs"){
            sodaevents.textContent =  town[i].events;
            soda.appendChild(sodaevents);
       }
      
       
    }   


});

