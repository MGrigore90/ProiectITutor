// exercise1:The toFixed() Method
var x = 1.123456789;
document.getElementById("exercise1").innerHTML =
  x.toFixed(0) + "<br>" +	// returns 1
  x.toFixed(1) + "<br>" +	// returns 1.1
  x.toFixed(2) + "<br>" +	// returns 1.12
  x.toFixed(3) + "<br>" +	// returns 1.123
  x.toFixed(4) + "<br>" +	// returns 1.1235
  x.toFixed(5) + "<br>" +	// returns 1.12346
  x.toFixed(6) + "<br>" +	// returns 1.123457
  x.toFixed(7) + "<br>" +	// returns 1.1234568
  x.toFixed(8) + "<br>" +	// returns 1.12345679
  x.toFixed(9) + "<br>" +	// returns 1.123456789
  x.toFixed(10);					// returns 1.1234567890
  // exercise2:JavaScript POSITIVE_INFINITY
  var x = 5 / 3;
document.getElementById("exercise2").innerHTML = x;
// exercise3:Exercises with Array
// Creating an text Array
var button = document.querySelector (".button");
var fruits = ["Grapefruit", "Banana", "Kiwi", "Pear", "Orange", "Apple", "Mango", "Wattermelone", "Mandarin"];
document.getElementById("exercise3").innerHTML = fruits;
button.addEventListener("click", function myFunction() {
  fruits.push("Lemon");
  fruits.sort();
    document.getElementById("exercise3").innerHTML = fruits;
   });
   // 3.2 Extracting citrus and show them
  var a = fruits[0]
  var b = fruits[4];
	var c = fruits[8];
  var citrus = a+" "+ b +" "+ c;
   document.getElementById("exercise3.2").innerHTML = citrus;
var a = fruits.indexOf("Apple");
// exercise4: Searches an element in an Array
var k = fruits.indexOf("Kiwi");
document.getElementById("exercise4").innerHTML = "Kiwi is found in position " + k;
// Array.filter()
// Creating an numeric Array
var numbers = [5, 84, 19, 17, 35, 9, 72];
var over6 = numbers.filter(myFunction);
document.getElementById("exercise4.1").innerHTML = over6;
function myFunction(value, index, array) {
  return value > 4*4;
}
 // Using Math.max() on an Array
 document.getElementById("exercise4.2").innerHTML = myArrayMax(numbers);
  function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
