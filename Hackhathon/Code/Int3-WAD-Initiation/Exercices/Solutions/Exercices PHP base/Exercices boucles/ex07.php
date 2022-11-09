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


print ("\nCombien de valeurs? :");
$nombreValeurs = read();

$multiplication = 1;

for ($i = 0; $i < $nombreValeurs; $i++){
    print ("\nNouvelle valeur?: ");
    $val = read();
    $multiplication = $multiplication * $val;      
}

print ("\nLe résultat: " . $multiplication);