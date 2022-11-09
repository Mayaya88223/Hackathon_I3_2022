<?php

$val1 = 50;
$val2 = $val1 + 10;

for ($i = $val1; $i <= $val2 ; $i++){
    print ($i); 
    print ("\n");   
}

// 50 à 70
for ($i = 50; $i <= 70; $i++){
    print ($i);
    print ("\n");   
}

// boucle infini
for ($i = 50; $i <= $i + 20; $i++){
    print ($i);
    print ("\n");   
}
// $i = 50
// 50 <= 50 + 20
// 51 <= 51 + 20
// 52 <= 52 + 20


