var d=new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var a;
 
a=weekday[d.getDay()];
 
if (a == "Friday") {
    document.getElementById("banner").style.display = "block";
}
else 
document.getElementById("banner").style.display = "none";

 

 

 
