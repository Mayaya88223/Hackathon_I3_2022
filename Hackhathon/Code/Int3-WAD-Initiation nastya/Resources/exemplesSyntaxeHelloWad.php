<?php

print("\nHello les WAD 21, on y va!!!");
print("\nCoucou");
print("\nLa concatenation se fait " . " avec un point, pas avec un + ");
print("\n" . (4 + 5));
// print ([ 4,5,6]);  // pas possible en PHP
/* 
ici je mets du n'importe quoi!!!
blablabla
*/
$a = 5;
$b = "Vive les Wads!";
$c = true;
$tab = ["Marwa", "Caroline", 9.8, true]; // pouvoir... on peut le faire
print_r($tab);
var_dump($tab);

$g = "hola";

$somme = 4 + 16;

$val1 = 10;
$val2 = 20;
$multiplication = $val1 * $val2;
print("\nMultiplication: " . $multiplication);

if ($somme == 10) {
    print("\nLa somme vaut 10!");
    print("\nEt bientôt on mange!");
} elseif ($somme == 20) {
    print("\nLa somme vaut 20!");
} else {
    print("\nLa somme ne vaut pas 10!");
}

// AND et OR en PHP
// and (&&), or (||)

$a = 5; // integer (number)
$b = "5"; // string

// on entre ici
if ($a == $b) {
    print ("Pareils!"); // en PHP et en JS   
}

// on n'entre pas ici car les types sont différents
// "strictement égal" -> comparaison des types des variables
if ($a === $b) {
    print ("Pareils!"); // en PHP et en JS   
}







// for i in range(1..20):
// for ($i = 1; $i < 20; $i = $i + 1) {
//     print ("\n" . $i);
// }

// $i = $i + 1 est $i++;
// $i = $i + 5 est $i += 5;
// $i = $i + 5 est $i *= 5;



for ($i = 1; $i < 20; $i++) {
    $j = 3;
    print ("\n" . $i);
}


//for i in range(1,20,3):
// for ($i = 1; $i < 20; $i = $i + 3) {
//     print("\n" . $i);
// }

$j = 1;
while ($j < 20){
    print ("\n" . $j);
    $j++;
}



// exemple d'opérateur ternaire
$age = 2;
$entrer = null;

if ($age > 18) {
    $entrer = "ok";
}
else {
    $entrer = "pas possible";
}
echo "\nTest avec if: " . $entrer;

// opérateur ternaire
$age > 18 ? $entrer = "ok": $entrer = "pas possible";
echo "\nTest avec ternaire: " . $entrer;

echo "\nTest avec ternaire sans variable intermediaire: ";
print ( $age > 20 ? "\nok" : "\npas possible");

print ($etat = $age > 18 ? "majeur" : "mineur");



