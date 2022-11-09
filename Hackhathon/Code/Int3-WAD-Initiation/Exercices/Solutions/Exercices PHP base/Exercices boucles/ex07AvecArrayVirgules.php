<?php
// Dedicace spéciale à Stefania :D

// ce code nous permet de lire du clavier
function read()
{
    $fr = fopen("php://stdin", "r");   // open our file pointer to read from stdin
    $input = fgets($fr, 128);        // read a maximum of 128 characters
    $input = rtrim($input);         // trim any trailing spaces.
    fclose($fr);                   // close the file handle
    return $input;                  // return the text entered
}


$arrayVals = [];

// Valeurs écrites une après l'autre, suivies de virgules. Pour finir, ENTER
print("\nTapez vos valeurs suivis par virgules, puis Enter: ");
$stringVals = read();

$arrayVals = explode(",", $stringVals); // explode crée un array à partir d'un
// string dont les valeurs sont séparés par un séparateur (ici la virgule)

$multiplication = 1; // la valeur de base, on ne peut pas commencer à 0 car 0 x val = 0
// count renvoie le nombre de valeurs d'un array. Ici on en a besoin car
// on ne sait pas combien de valeurs existent dans le string...
for ($i = 0; $i < count($arrayVals); $i++) { 
    $multiplication = $multiplication * $arrayVals[$i];
}

print("Voici votre résultat: " . $multiplication);
