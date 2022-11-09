<?php

$personne = [
    'nom' => 'Laura',
    'age' => 40,
    'hobby' => 'lecture'
];

// afficher 
foreach ($personne as $cle => $val) {
    print("\n" . $cle . ":" . $val);
}
var_dump (array_values($personne));


$fakeArraySimple = [
    '0' => 'Rome',
    '1' => 'Bruxelles',
    '2' => 'Paris'
];

var_dump ($fakeArraySimple);

// CRUD
// Rajouter (Create)
$personne['groupe'] = "WAD";

// Obtenir (Lire)
print ("\n". $personne['groupe']);

// Modifier (Update)
$personne['hobby'] = "cinema";

// Effacer (Delete)
unset ($personne['hobby']);

var_dump ($personne);