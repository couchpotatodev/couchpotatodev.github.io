function myFunction(x){
    x.classList.toggle("change");
    toggleMenu();
   }
      
function toggleMenu(){
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");   
 }