//document.getElementsByClassName("cards").style.display = "grid";
//document.getElementbyClassName("cards").style.gridTemplateColumns = "repeat(auto-fill,minmax(300px,1fr));";
/*
function grid(){
document.getElementsByClassName("gridcards2").style.display = "grid";
document.getElementsByClassName("cards").style.display = "none";
}
*/


function grid(){
    document.getElementById("gridcards2").style.display = "grid";
    document.getElementById("gridcards2").style.gridTemplateColumns = "repeat(auto-fill,minmax(300px,1fr));";
    document.getElementById("gridcards2").style.gridGap = "10px";
    document.getElementById("listcards").style.display = "none";
    }
    