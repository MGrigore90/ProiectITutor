// hide function for button
function myFunction() {
  var x = document.getElementsByClassName("main");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none"; }
    }
// Create a 2D red text
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Verdana";
ctx.strokeStyle = "red";
// add offsetx yellow shadowblur to text
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 20;
ctx.shadowColor = "yellow";
ctx.strokeText("part VIII",10,50);
// Create a 1500px gradient line black-white-yellow
var l = document.getElementById("line");
var ctx = l.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "yellow");
my_gradient.addColorStop(0.5, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 1500, 5);