  // Create a 2D red text
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Verdana";
  ctx.strokeStyle = "red";
  // add offsetx yellow shadowblur to text
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 20;
  ctx.shadowColor = "yellow";
  ctx.strokeText("part IX", 10, 50);
  // Create a full display gradient line black-white-yellow
  var l = document.getElementById("line");
  var ctx = l.getContext("2d");
  var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
  my_gradient.addColorStop(0, "black");
  my_gradient.addColorStop(1, "yellow");
  my_gradient.addColorStop(0.5, "white");
  ctx.fillStyle = my_gradient;
  ctx.fillRect(0, 0, 1500, 5);
   //Lotto nr generator
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}
	//Conditional (Ternary) Operator
function myFunction() {
  var age, verificare, step1, step2, step3, step4, step5, step6;
  age = document.getElementById("age").value;
  verificare = (age < 18) ? "Pregateste-te de bac":step1;
    step1 = (age<22) ? "Pregateste-te de master":step2;
      step2 = (age<25) ? "Pregateste-te de doctorat":step3;
       step3 = (age<35) ? "Construieste-ti o familie":step4;  
          step4 = (age<45) ? "Consolideaza-ti cariera":step5;
            step5 = (age<65) ? "Pregateste-te de pensie":step6;
              step6 = (age<99) ? "Bucura-te de viata":step6;
document.getElementById("exercitiu").innerHTML = verificare ;
}
//The JavaScript Switch Statement 
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Rest for the next week";
    break;
  case 1:
    day = "Monday: You must go to work";
    break;
  case 2:
    day = "Tuesday: After work, you can go at a movie with orange film";
    break;
  case 3:
    day = "Wednesday: After work, you can go to a play (I recommend Cuibul)";
    break;
  case 4:
    day = "Still at work";
    break;
  case 5:
    day = "Almost weekend";
    break;
  case  6:
    day = "Let's the party start";
}
document.getElementById("demo").innerHTML = "Today is " + day;