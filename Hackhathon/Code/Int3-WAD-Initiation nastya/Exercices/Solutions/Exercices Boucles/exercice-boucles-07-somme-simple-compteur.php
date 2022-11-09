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


// demander à l'utilisateur le nombre de chiffres à saisir
print("\nTapez le le nombre de chiffres à saisir: ");

$somme = 0 ;
for ($nombreChiffresSaisir = read(); $nombreChiffresSaisir > 0; $nombreChiffresSaisir--) {
    $val = read();
    $somme = $val + $somme;
}



print ("\nLa somme est: " . $somme);