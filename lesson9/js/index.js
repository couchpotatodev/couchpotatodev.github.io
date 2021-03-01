const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];
    

   
    /*for (let i = 0; i < town.length; i++ ) { */
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

        let image1 = document.createElement('img');
        let image2 = document.createElement('img');
        let image3 = document.createElement('img');


        fish.textContent = town[1].name;
        preston.textContent = town[5].name;
        soda.textContent = town[6].name;
        
        fishmotto.textContent = town[1].motto;
        prestonmotto.textContent = town[5].motto;
        sodamotto.textContent = town[6].motto;

        yearfish.textContent = "Year founded:" + ' ' + town[1].yearFounded;
        yearpreston.textContent = "Year founded:" + ' ' + town[5].yearFounded;
        yearsoda.textContent = "Year founded:" + ' ' + town[6].yearFounded;

        fishpopulation.textContent = "Population:" + ' ' + town[1].currentPopulation;
        prestonpopulation.textContent = "Population:" + ' ' + town[5].currentPopulation;
        sodapopulation.textContent = "Population:" + ' ' + town[6].currentPopulation; 
      
        fishrain.textContent = "Annual Rain Fall:" + ' ' + town[1].averageRainfall;
        prestonrain.textContent = "Annual Rain Fall:" + ' ' + town[5].averageRainfall;
        sodarain.textContent = "Annual Rain Fall:" + ' ' + town[6].averageRainfall; 
       
        image1.setAttribute('src', town[1].photo);
        image2.setAttribute('src', town[5].photo);
        image3.setAttribute('src', town[6].photo);
        image1.setAttribute('alt', "photo of fish haven");
        image2.setAttribute('alt', "photo of preston");
        image3.setAttribute('alt', "soda springs");
        

        card.appendChild(fish);
        card.appendChild(fishmotto);
        card.appendChild(yearfish);
        card.appendChild(fishpopulation);
        card.appendChild(fishrain);
        card.appendChild(image1);

        card.appendChild(preston);
        card.appendChild(prestonmotto); 
        card.appendChild(yearpreston);
        card.appendChild(prestonpopulation);
        card.appendChild(prestonrain);
        card.appendChild(image2);

        card.appendChild(soda);
        card.appendChild(sodamotto);
        card.appendChild(yearsoda);
        card.appendChild(sodapopulation);
        card.appendChild(sodarain);
        card.appendChild(image3);
       


     


      





        document.querySelector('div.cards').appendChild(card);  
    /*}    */
      
    

  });


 
 