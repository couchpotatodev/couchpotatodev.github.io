const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var preston = document.querySelector('.prestoncard');
var soda = document.querySelector('.sodacard');
var fish = document.querySelector('.fishcard');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];

   let prestonevents = document.createElement('p');  
   let sodaevents = document.createElement('p');  
   let fishhavenevents = document.createElement('p');  

    for (let i = 0; i < town.length; i++ ) { 
        if (town[i].name == "Preston"){
            prestonevents.textContent = town[i].events;
            preston.appendChild(prestonevents);
          }

/*
       if (town[i].name == "Soda Springs"){
            sodaevents.textContent =  town[i].events;
            soda.appendChild(sodaevents);
       }
        
       if (town[i].name == "Fish Haven"){
        fishhavenevents.textContent = town[i].events;
        fish.appendChild(fishhavenevents);
      }
    
  */
       
    }   


});



/*
for (let ctr=0; ctr < town[i].events.length; ctr++ ){
    let eventctr=document.createElement('ctr');
   
     =town[i].events[ctr] + '/br';
 }      */