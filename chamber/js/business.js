const requestURL = '../chamber/json/business.json';
var baguioBiz = document.querySelector('.cards');
var baguioBiz2 = document.querySelector('.cards2');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  
  })

  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const biz = jsonObject['businesses']; 

    for (let i = 0; i < biz.length; i++ ) {
        let card = document.createElement('section');
        let card2 = document.createElement('section');
        let h3 = document.createElement('h3'); 
        let contactinfo = document.createElement('p');
        let clogo = document.createElement('img');
        let wlink = document.createElement('a');
        let next = document.createElement('br');
   
        let gridh3 = document.createElement('h3'); 
        let gridcontactinfo = document.createElement('p');
        let gridclogo = document.createElement('img');
        let gridwlink = document.createElement('a');
        let gridnext = document.createElement('br');
        
     

        h3.textContent = biz[i].name;
        contactinfo.textContent = 'Contact Information:' + ' ' + biz[i].contact; 
        clogo.setAttribute('src', biz[i].logo);
        clogo.setAttribute('alt', h3.textContent + 'logo');
        wlink.textContent = biz[i].weblink;
        wlink.href = biz[i].weblink;

        gridh3.textContent = biz[i].name;
        gridcontactinfo.textContent = 'Contact Information:' + ' ' + biz[i].contact; 
        gridclogo.setAttribute('src', biz[i].logo);
        gridclogo.setAttribute('alt', h3.textContent + 'logo');
        gridwlink.textContent = biz[i].weblink;
        gridwlink.href = biz[i].weblink;



        card.appendChild(h3);
        card.appendChild(contactinfo);
        card.appendChild(clogo);
        card.appendChild(next); 
        card.appendChild(wlink);
     
        
        card2.appendChild(gridh3);
        card2.appendChild(gridcontactinfo);
        card2.appendChild(gridclogo);
        card2.appendChild(gridnext); 
        card2.appendChild(gridwlink);
   
        
        baguioBiz.appendChild(card);  
        baguioBiz2.appendChild(card2);
    }



});