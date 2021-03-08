//document.getElementsByClassName("summary").onload = function() {doInputOutput()};

function doInputOutput() {

    let val1 = parseFloat(document.getElementById("temp").innerHTML);
    let val2 = parseFloat(document.getElementById("windSpeed").innerHTML);


    var result=windChill(val1,val2);

   
 
   if (val1 <=50 && val2 > 3 ) { 
    document.getElementById('windChill').innerHTML = result;
    
   } else
   
    document.getElementById("windChillheading").style.display = "none"; 


    

 } //end of function


function windChill(tempF,speed) {
    var f = Math.round(35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16)));
    return f;
 }