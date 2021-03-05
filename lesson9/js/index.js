const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var fishhaven = document.querySelector('.card1');
var preston = document.querySelector('.card2');
var sodasprings = document.querySelector('.card3');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];

    let fish = document.createElement('h2'); 
    let fishmotto = document.createElement('p');
    let yearfish = document.createElement('p');
    let fishpopulation = document.createElement('p');
    let fishrain = document.createElement('p');

    let prestontown = document.createElement('h2');
    let prestonmotto = document.createElement('p');
    let yearpreston = document.createElement('p');
    let prestonpopulation = document.createElement('p');
    let prestonrain= document.createElement('p');

    let soda = document.createElement('h2'); 
    let sodamotto = document.createElement('p'); 
    let yearsoda = document.createElement('p');
    let sodapopulation = document.createElement('p');
    let sodarain = document.createElement('p');


    for (let i = 0; i < town.length; i++ ) { 

        if (town[i].name == "Fish Haven"){
            fish.textContent = town[i].name;
            fishmotto.textContent = town[i].motto;
            yearfish.textContent = "Year founded:" + ' ' + town[i].yearFounded;
            fishpopulation.textContent = "Population:" + ' ' + town[i].currentPopulation;
            fishrain.textContent = "Annual Rain Fall:" + ' ' + town[i].averageRainfall;
           
            fishhaven.appendChild(fish);
            fishhaven.appendChild(fishmotto);
            fishhaven.appendChild(yearfish);
            fishhaven.appendChild(fishpopulation);
            fishhaven.appendChild(fishrain);

        }   


        if (town[i].name == "Preston"){
            prestontown.textContent = town[i].name;
            prestonmotto.textContent = town[i].motto;
            yearpreston.textContent = "Year founded:" + ' ' + town[i].yearFounded;
            prestonpopulation.textContent = "Population:" + ' ' + town[i].currentPopulation;
            prestonrain.textContent = "Annual Rain Fall:" + ' ' + town[i].averageRainfall;

            preston.appendChild(prestontown);
            preston.appendChild(prestonmotto);
            preston.appendChild(yearpreston);
            preston.appendChild(prestonpopulation);
            preston.appendChild(prestonrain);
          
        }    

        if (town[i].name == "Soda Springs"){
            soda.textContent = town[i].name;
            sodamotto.textContent = town[i].motto;
            yearsoda.textContent = "Year founded:" + ' ' + town[i].yearFounded;
            sodapopulation.textContent = "Population:" + ' ' + town[i].currentPopulation;
            sodarain.textContent = "Annual Rain Fall:" + ' ' + town[i].averageRainfall; 

            sodasprings.appendChild(soda);
            sodasprings.appendChild(sodamotto);
            sodasprings.appendChild(yearsoda);
            sodasprings.appendChild(sodapopulation);
            sodasprings.appendChild(sodarain);
         
        }   


        

    }  //end of for loop


    

});
