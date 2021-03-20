const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var preston = document.querySelector('.prestoncard');



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  /* temporary checking for valid response and data parsing */
    const town = jsonObject['towns'];
 
   let prestonevents = document.createElement('p');  
   

    for (let i = 0; i < town.length; i++ ) { 
      
       if (town[i].name == "Preston"){
            prestonevents.textContent =  town[i].events;
            preston.appendChild(prestonevents);
       }
      
       
    }   


});



