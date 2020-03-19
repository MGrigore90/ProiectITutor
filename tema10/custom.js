//EX1:The For Loop
var text = "";
var i;
for (i = 0; i <= 10; i=i+2) {
  text += i + "<br>";
}
document.getElementById("exercise1").innerHTML = text;
//EX2:The For/In Loop
var txt = "";
var person = {fname:"Mihai", lname:"Grigore", age:29}; 
var x;
for (x in person) {
  txt += "-" + person[x] + "-";
}
document.getElementById("exercise2").innerHTML = txt;
//EX3:JavaScript For/Of Loop
var text = "";
var txt = 'OMG';
var x;
for (x of txt) {
  text += x + "<br >";
}
document.getElementById("exercise3").innerHTML = text;
//EX4:JavaScript While Loop (numaratoare descrescatoare de la 10 la 1)
var text = "";
var x = 10;
while (x > 0) {
  text += "<br>" + x;
  x--;
}
document.getElementById("exercise4").innerHTML = text;
//EX5:JavaScript DO While Loop (numaratoare descrescatoare de la 10 la 1 din 2 in 2)
var text = ""
var x = 10;
do {
  text += "<br>" + x;
  x-= 2;
}
while (x > 0);  
document.getElementById("exercise5").innerHTML = text;
//EX6:JavaScript Break (numaratoare crescatoare de la 1 la 10 cu brake pana la 7 inclusiv)
var text = "";
var i;
for (i = 1; i <= 10; i++) {
  if (i === 8) { break; }
  text += i + "<br>";
}
document.getElementById("exercise6").innerHTML = text;
//EX7:JavaScript Continue (numaratoare crescatoare de la 1 la 10 cu continue pe nr pare)
var text = "";
var i;
for (i = 1; i <= 10; i++) {
  if (i === 2) { continue; }
  if (i === 4) { continue; }
  if (i === 6) { continue; }
  if (i === 8) { continue; }
  if (i === 10) { continue; }
  text += i + "<br>";
}
document.getElementById("exercise7").innerHTML = text;
//EX8:Conversion 
var x = 29;
document.getElementById("exercise8").innerHTML =
"Number : " + Number(x) + "<br>" +
"String : " + String(x) + "<br>" +
"Boolean: " + Boolean(x);
//EX9:String search and display the position of the match 
var str = "Mihai"; 
var n = str.search("Mihai");
document.getElementById("exercise9").innerHTML = n;
//EX10:String search and replacement
function myFunction() {
  var y = "";
    var str = document.getElementById("exercise10").innerHTML; 
  var y = str.replace("Mihai","Grigore");
  document.getElementById("exercise10").innerHTML = txt;
}
//EX11: Search for Regular Expressions and validate the math using test()
text = document.getElementById("e11").innerHTML; 
document.getElementById("exercise11").innerHTML = /Corona/.test(text);
//EX12: Using exec()
var obj = /life/.exec("The best things in life are free!");
document.getElementById("exercise12").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
//EX13: JS Errors
function myFunction() {
  var message, x;
  message = document.getElementById("p13");
  message.innerHTML = "";
  x = document.getElementById("exercise13").value;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 20)   throw "is too high";
    if(x >= 10 & x <= 20 )   throw "good choise";
    if(x < 10)  throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("exercise13").value = "";
  }
}