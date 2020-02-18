var button = document.querySelector (".button");
var p = document.querySelector (".demo");
var fruits = ["Banana", "Kiwi", "Orange", "Apple", "Mango", "Wattermelone"];
document.getElementById("demo").innerHTML = fruits;
button.addEventListener("click", function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
});