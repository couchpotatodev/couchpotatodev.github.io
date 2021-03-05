const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];
    

    for (let i = 0; i < town.length; i++ ) { 
      let card = document.createElement('section');
      let fish = document.createElement('h2'); 
      let preston = document.createElement('h2'); 
      let soda = document.createElement('h2'); 

      let fishmotto = document.createElement('p');
      let prestonmotto = document.createElement('p');
      let sodamotto = document.createElement('p'); 

      let yearfish = document.createElement('p');
      let yearpreston = document.createElement('p');
      let yearsoda = document.createElement('p');
      
      let fishpopulation = document.createElement('p');
      let prestonpopulation = document.createElement('p');
      let sodapopulation = document.createElement('p');

      let fishrain = document.createElement('p');
      let prestonrain= document.createElement('p');
      let sodarain = document.createElement('p');

      let fishimage = document.createElement('img');
      let prestonimage = document.createElement('img');
      let sodaimage = document.createElement('img');

      if (town[i].name == "Fish Haven"){
        fish.textContent = town[i].name;
        fishmotto.textContent = town[i].motto;
        yearfish.textContent = "Year founded:" + ' ' + town[i].yearFounded;
        fishpopulation.textContent = "Population:" + ' ' + town[i].currentPopulation;
        fishrain.textContent = "Annual Rain Fall:" + ' ' + town[1].averageRainfall;
        fishimage.setAttribute('src','../lesson9/images/fishhaven.jpg');
        fishimage.setAttribute('alt', "fish haven image");
      }


      if (town[i].name == "Preston"){
        preston.textContent = town[i].name;
        prestonmotto.textContent = town[i].motto;
        yearpreston.textContent = "Year founded:" + ' ' + town[i].yearFounded;
        prestonpopulation.textContent = "Population:" + ' ' + town[i].currentPopulation;
        prestonrain.textContent = "Annual Rain Fall:" + ' ' + town[i].averageRainfall;
        prestonimage.setAttribute('src','../lesson9/images/preston.jpg');
        prestonimage.setAttribute('alt', "preston image");
      }

      if (town[i].name == "Soda Springs"){
        soda.textContent = town[i].name;
        sodamotto.textContent = town[i].motto;
        yearsoda.textContent = "Year founded:" + ' ' + town[i].yearFounded;
        sodapopulation.textContent = "Population:" + ' ' + town[i].currentPopulation;
        sodarain.textContent = "Annual Rain Fall:" + ' ' + town[6].averageRainfall; 
        sodaimage.setAttribute('src','../lesson9/images/sodasprings.jpg');
        sodaimage.setAttribute('alt', "soda springs image");
      }

      card.appendChild(fish);
      card.appendChild(fishmotto);
      card.appendChild(yearfish);
      card.appendChild(fishpopulation);
      card.appendChild(fishrain);
      card.appendChild(fishimage);

      card.appendChild(preston);
      card.appendChild(prestonmotto);
      card.appendChild(yearpreston);
      card.appendChild(prestonpopulation);
      card.appendChild(prestonrain);
      card.appendChild(prestonimage);

      card.appendChild(soda);
      card.appendChild(sodamotto);
      card.appendChild(yearsoda);
      card.appendChild(sodapopulation);
      card.appendChild(sodarain);
      card.appendChild(sodaimage);


      document.querySelector('div.cards').appendChild(card);

    }





      
    

  });


 
 