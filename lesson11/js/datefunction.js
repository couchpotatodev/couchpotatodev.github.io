var d=new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var a,b;

a=weekday[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear();
document.getElementById('outputDiv').innerHTML = a;

 


 
