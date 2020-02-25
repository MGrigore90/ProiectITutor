<?php
// 1.Loop Through an Indexed Array
$fruits = array("Grapefruit", "Banana", "Kiwi", "Pear", "Orange", "Apple", "Mango", "Wattermelone", "Mandarin");
$arrlength = count($fruits);
for($x = 0; $x < $arrlength; $x++) {
    echo $fruits[$x];
    echo "<br>";
}
// 2.PHP Associative Arrays
$attributes = array("Peter"=>"35", "Ben"=>"blonde", "Mihai"=>"smart");
echo "Peter is " . $attributes['Peter'] . " years old.";
echo "Mihai is " . $attributes['Mihai'];
// 3 Multidimensional Arrays
$cars = array
  (
  array("Volvo",20,10,70),
  array("BMW",17,14,80),
  array("Audi",9,2,90),
  array("Mercedes",4,6,100),
  array("Fiat",34,36,60)
    );
for ($row = 0; $row < 5; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
for ($col = 0; $col < 4; $col++) {
    echo "<li>".$cars[$row][$col]."</li>";
  }
  echo "</ul>";
}
// 4 Sort Array (Descending Order), According to Value - arsort()
$grade = array("Volvo"=>"3", "BMW"=>"6", "Audi"=>"5", "Mercedes"=>"7", "Fiat"=>"4");
arsort($grade);
foreach($grade as $x => $x_value) {
    echo "Car=" . $x . ", Grade=" . $x_value;
    echo "<br>";
}
?>