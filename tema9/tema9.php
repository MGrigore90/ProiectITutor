<?php
//Count day till my birthday
$d1=strtotime("December 11");
$d2=ceil(($d1-time())/60/60/24);
echo "There are " . $d2 ." days until my birthday.";
//The example below outputs the dates for the next 12 Fridays:
$startdate=strtotime("Friday");
$enddate=strtotime("+12 weeks", $startdate);
    while ($startdate < $enddate) {
      echo date("M d", $startdate) . "<br>";
      $startdate = strtotime("+1 week", $startdate);
    }
//Include a footer created in another php file
include 'footer.php';
?>