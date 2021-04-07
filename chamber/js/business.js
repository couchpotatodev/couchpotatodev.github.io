const requestURL = '../chamber/json/business.json';
var baguioBiz = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  
  })

  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const biz = jsonObject['businesses']; 

    for (let i = 0; i < biz.length; i++ ) {
        let card = document.createElement('section');
        let h3 = document.createElement('h3'); 
        let contactinfo = document.createElement('p');
        //let wlink = document.createElement('p');
        let wlink = document.createElement('a');
        let clogo = document.createElement('img');
     

        h3.textContent = biz[i].name;
        contactinfo.textContent = 'Contact Information:' + ' ' + biz[i].contact;
      //  wlink.textContent = 'Website Link:' + ' ' + biz[i].weblink;
        wlink.textContent = biz[i].weblink;
        wlink.href = biz[i].weblink;
        clogo.setAttribute('src', biz[i].logo);
        clogo.setAttribute('alt', h3.textContent + 'logo');


        card.appendChild(h3);
        card.appendChild(contactinfo);
        //card.appendChild(linebreak);
        card.appendChild(wlink);
        //card.appendChild(linebreak2);
        card.appendChild(clogo);
        
        baguioBiz.appendChild(card);  
    }

    var link = document.createElement('a');
    link.textContent = 'Link Title';
    link.href = 'http://your.domain.tld/some/path';
    document.getElementById('where_to_insert').appendChild(link);
 

});