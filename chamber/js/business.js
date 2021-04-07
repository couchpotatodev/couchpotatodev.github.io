//const requestURL = 'json/business.json';

/*const requestURL = 'https://github.com/couchpotatodev/chamber-of-commerce/blob/main/json/business.json';
var baguioBiz = document.querySelector('.cards');
*/

/*fetch("test.json")
  .then(response => response.json())
  .then(json => console.log(json));
*/


//const requestURL = 'https://github.com/couchpotatodev/couchpotatodev.github.io/blob/master/json/business.json';
//const requestURL = 'https://drive.google.com/file/d/1gzIn7sOMiNMN79VD-GL0DSTBc9Ax3cqm/view?usp=sharing';
const requestURL = '';
var baguioBiz = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  
  })

  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const biz = jsonObject['businesses']; 




 

});