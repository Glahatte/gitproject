//add an event listener to an element so that when you click it, another element's style changes.
//create a list with at least 3 elements
//apply event delegation to that list of elements

var btn= document.createElement("BUTTON");
btn.innerHTML ="What Time Is it Anyway?!";
document.body.appendChild(btn);

document.getElementById("btn").addEventListener("click, displayTime");
function displayTime() {
   document.getElementById("btn").innerHTML=Time();
  var time= today.getHours()+ ":"+ today.getMinutes
}
