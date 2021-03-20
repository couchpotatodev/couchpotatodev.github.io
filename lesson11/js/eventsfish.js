const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var fish = document.querySelector('.fishcard');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    /*console.table(jsonObject);   temporary checking for valid response and data parsing */
    const town = jsonObject['towns'];


   let fishhavenevents = document.createElement('p');  

    for (let i = 0; i < town.length; i++ ) { 
       

       
       if (town[i].name == "Fish Haven"){
        fishhavenevents.textContent = town[i].events;
        fish.appendChild(fishhavenevents);
      }
    
  
       
    }   


});

