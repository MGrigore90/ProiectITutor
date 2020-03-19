<?php
//create & open a newfile.txt
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
//write
$txt = "Mihai\n";
fwrite($myfile, $txt);
//write
$txt = "Grigore\n";
fwrite($myfile, $txt);
fclose($myfile);
//close the file newfile.txt
if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
//check if cookie is enable
if(count($_COOKIE) > 0) {
    echo "Cookies are enabled.";
} else {
    echo "Cookies are disabled.";
}
//encode a value to JSON format
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
echo json_encode($age);
//decode a JSON object into a PHP object
var_dump(json_decode($jsonobj, true));
//Accessing the Decoded Values
$obj = json_decode($jsonobj);
echo $obj->Peter;
echo $obj->Ben;
echo $obj->Joe;
//Looping Through the Values
$obj = json_decode($jsonobj);
foreach($obj as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
// Create a class
class Fruit {
    // Properties
    public $name;
    public $color;
    // Methods
    function set_name($name) {
      $this->name = $name;
    }
    function get_name() {
      return $this->name;
    }
    function set_color($color) {
      $this->color = $color;
    }
    function get_color() {
      return $this->color;
    }
  }
  // Add new objects to the class Fruit
  $apple = new Fruit();
  $banana = new Fruit();
  $orange = new Fruit();
  $kiwi = new Fruit();
  // set attributs to the new objects
  $apple->set_name('Apple');
  $apple->set_color('Red');
  $banana->set_name('Banana');
  $banana->set_color('Yellow');
  $orange->set_name('Orange');
  $orange->set_color('Orange');
  $kiwi->set_name('Kiwi');
  $kiwi->set_color('Green');
  echo "Name: " . $apple->get_name();
  echo "<br>";
  echo "Color: " .  $apple->get_color();
  echo "<br>";
  echo "<br>";
  echo "Name: " . $banana->get_name();
  echo "<br>";
  echo "Color: " .  $banana->get_color();
  echo "<br>";
  echo "<br>";
  echo "Name: " . $orange->get_name();
  echo "<br>";
  echo "Color: " .  $orange->get_color();
  echo "<br>";
  echo "<br>";
  echo "Name: " . $kiwi->get_name();
  echo "<br>";
  echo "Color: " .  $kiwi->get_color();
  // checking if this objects belongs to the Fruit class
  var_dump($peach instanceof Fruit);
  echo "<br>";
  var_dump($apple instanceof Fruit);
// Create a class
  class Car {
      // Properties
    public $name;
    public $color;
     // Methods using the __construct Function
    function __construct($name, $color) {
      $this->name = $name; 
      $this->color = $color; 
    }
    function get_name() {
      return $this->name;
    }
    function get_color() {
      return $this->color;
    }
    function __destruct() {
        echo "My favorite care is an {$this->color} {$this->name}."; 
      }
  }
  // Add new object to the class Car
  $BMW = new Car("BMW", "White");
  ?>