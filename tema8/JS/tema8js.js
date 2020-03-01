// exercise1:JavaScript toDateString()
var d = new Date();
document.getElementById("exercise1").innerHTML = d.toDateString();
// exercise2:ISO Dates (JavaScript Short Dates.)
var d = new Date("11/12/2019");
document.getElementById("exercise2").innerHTML = d;
// exercise3:The getMonth() Method
var d = new Date();
document.getElementById("exercise3").innerHTML = d.getMonth() + 1;
// exercise4:JavaScript getMonth()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("exercise4").innerHTML = months[d.getMonth()];
// exercise5:JavaScript setFullYear(my birthday this year)
var d = new Date();
d.setFullYear(2020, 11, 11);
document.getElementById("exercise5").innerHTML = d;
