const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var fish = document.querySelector('.fishcard');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject['towns'];


  
   let ul = document.createElement('ul');
   fish.appendChild(ul);


    for (let i = 0; i < town.length; i++ ) { 
             
       if (town[i].name == "Fish Haven"){


        for (let j=0; j<town[i].events.length;j++){
          let li=document.createElement('li');    
           li.innerHTML = town[i].events[j];
           ul.appendChild(li);
        }
      
      }
    
  
       
    }   


});

