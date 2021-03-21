const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var preston = document.querySelector('.prestoncard');



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);   temporary checking for valid response and data parsing 
    const town = jsonObject['towns'];
 
   let prestonevents = document.createElement('p');  
   let ul = document.createElement('ul');
   preston.appendChild(ul);
    
   for (let i = 0; i < town.length; i++ ) { 
      
       if (town[i].name == "Preston"){
               
        
            for (let j=0; j<town[i].events.length;j++){
                let li=document.createElement('li');    
                 li.innerHTML = town[i].events[j];
                 ul.appendChild(li);
            }
       }
      
       
    }   


});


