<?php


// ce code nous permet de lire du clavier
function read()
{
    $fr = fopen("php://stdin", "r");   // open our file pointer to read from stdin
    $input = fgets($fr, 128);        // read a maximum of 128 characters
    $input = rtrim($input);         // trim any trailing spaces.
    fclose($fr);                   // close the file handle
    return $input;                  // return the text entered
}


print("\nTapez votre âge: ");
$age = read();
$nombreEssaisRestants = 2;

while ( ($age <= 0 or $age > 130) and $nombreEssaisRestants >= 1 ) {
    $nombreEssaisRestants --; // $nombreEssaisRestants = $nombreEssaisRestants - 1;
    print("\nTapez une valeur correcte: ");
    print ("\n Il vous reste " . $nombreEssaisRestants . " essais ");
    $age = read();
}

if ($nombreEssaisRestants == 0){
    echo "\nAdieu....";
}
elseif ($age >= 18) {
    print ("\nAllez-y, entrez!");
}
else {
    print ("Vous êtes trop jeune");
}


