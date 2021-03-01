const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
   
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2'); 
        let birthday = document.createElement('birth');
        let place = document.createElement('bplace');
        let linebreak = document.createElement("br");
        let linebreak2 = document.createElement("br");
        let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthday.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
            place.textContent = 'Place of Birth:' + ' ' +prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', h2.textContent +  ' - ' + prophets[i].order);
          //  image.setAttribute('loading','lazy');

            card.appendChild(h2);
            card.appendChild(birthday);
            card.appendChild(linebreak);
            card.appendChild(place);
            card.appendChild(linebreak2);
            card.appendChild(image);
            

            document.querySelector('div.cards').appendChild(card);  
    }    


   

});