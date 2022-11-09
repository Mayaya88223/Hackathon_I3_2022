<?php
// ce code nous permet de lire du clavier
function read()
{
        $fr=fopen("php://stdin","r");   // open our file pointer to read from stdin
        $input = fgets($fr,128);        // read a maximum of 128 characters
        $input = rtrim($input);         // trim any trailing spaces.
        fclose ($fr);                   // close the file handle
        return $input;                  // return the text entered
}

print ("Combien de valeurs? ");
$nombreVals = read();

$arrayVals = [];

// Valeurs écrites une après l'autre, suivies de ENTER
for ($i=0;$i<$nombreVals;$i++){
    print ("\nTapez une valeur: ");
    $val = read(); // lire une valeur
    $arrayVals[$i] = $val; // stocker la valeur à la position $i
}

$multiplication = 1; // la valeur de base, on ne peut pas commencer à 0 car 0 x val = 0
for ($i=0;$i<$nombreVals;$i++){
    $multiplication = $multiplication * $arrayVals[$i];
}

print ("Voici votre résultat: " . $multiplication);

