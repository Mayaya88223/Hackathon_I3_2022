<?php

// tableaux = arrays

// tableau sans éléments
$tab1 = []; // $tab1 = array ();

// tableau qui contient des éléments
$tab2 = [4,5,6];
$tab3 = ["Rome","Pekin","Bruxelles"];

print_r ($tab3);

// Rajouter une valeur à la fin de l'array
$tab3[] = "Gent";
print_r ($tab3);

$tab3[4] = "Paris";
$tab3[10] = "Madrid";
$tab3[6] = "Rabat";
print_r ($tab3);
// Modifier une valeur
$tab3[10] = "Seville";
print_r ($tab3);

// Effacer
unset ($tab3[4]);
print_r ($tab3);

// arrays associatifs
$tabAssoc = [
    'nom' => 'Menen',
    'ville' => 'Bruxelles',
    'hobby' => 'musique'
];

// Modifier un élément
$tabAssoc ['nom'] = 'Sarah';
// Rajouter un élément
$tabAssoc ['adresse'] = 'Rue de la Poire'; 
// Effacer
unset ($tabAssoc['ville']);

$tabAssoc [] = "coucou";
$tabAssoc [] = "ananana";
$tabAssoc [90] = 100;


print_r ($tabAssoc);
// die();

// on peut créer un array de cette manière...
$tabAssocChiffres = [
    0 => 'Rome',
    1 => 'Bruxelles',
    2 => 'Paris'
];

// mais ça ne sert à rien, car c'est plus simple de cette manière:
// $tabAssocChiffres = ['Rome','Bruxelles', 'Paris'];

print_r ($tabAssocChiffres);


