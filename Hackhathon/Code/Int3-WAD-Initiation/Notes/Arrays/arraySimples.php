<?php

// array simples (indexés) en PHP =>> listes en Python
// la notation est similaire

// Création d'un array contenant des éléments
$lesWads = ['Julie', 'Judy', 'Laure'];

// Création d'un array vide (deux façons)
$tab1 = [];
$tab2 = array();

// CRUD (Create, Read, Update, Delete)

// équivalent à append en python
$tab1[] = 'Marie'; // rajouter un élément à la fin 
$tab1[] = 'Cindy'; // rajouter un autre élément à la fin 

// Création et rajout des éléments (Create)
$tab2 = ['Rome', 'Bruxelles'];
$tab2[] = 'Rabat';
$tab2[27] = 'Madrid';
var_dump($tab2);
print("Nombre éléments: " . count($tab2)); // count est len en Python ou length en JS

// Obtenir les éléments (Read)

// afficher Bruxelles
print("\n" . $tab2[27]); // le prémier index du tableau est le 0
print("\n" . $tab2[0] . " " . $tab2[1]);
$ville = $tab2[0];

// Modifier une valeur (Update)
$tab2[27] = "Tokyo";
$tab2[15] = "Gent";
var_dump($tab2);

// parcourir un tableau contenant des index dispersés 
// avec un for et compteur c'est très risqué
// for ($i = 0; $i < count($tab2); $i ++){
//     print ($tab2[$i]);
// }
// le logiciel plante... pas les bons indices
// array(5) {
//     [0] =>
//     string(4) "Rome"
//     [1] =>
//     string(9) "Bruxelles"
//     [2] =>
//     string(5) "Rabat"
//     [27] =>
//     string(5) "Tokyo"
//     [15] =>
//     string(4) "Gent"
//   }

// equivalent à : 
// for elem in tab2:
print("\n\nAvec clé et valeur: ");
foreach ($tab2 as $cle => $valeur) {
    print("\n\n");
    print("cle: " . $cle);
    print(" valeur: " . $valeur);
}

print("\n\nSans clé: ");
foreach ($tab2 as $valeur) {
    print("\n\n");
    print(" valeur: " . $valeur);
}

// si les indices ne sont pas consecutifs, il faut les ré-arranger
$tab2 = array_values($tab2);
var_dump ($tab2);
// [0] =>
//   string(4) "Rome"
//   [1] =>
//   string(9) "Bruxelles"
//   [2] =>
//   string(5) "Rabat"
//   [3] =>
//   string(5) "Tokyo"
//   [4] =>
//   string(4) "Gent"

// Effacer des éléments d'un array
unset ($tab2[3]);
var_dump ($tab2);
// -------------------------------------------------------

// On ne peut pas modifier avec un foreach (sauf si on met la variable par référence)
foreach ($tab2 as &$val){
    $val = "Paris";
}
var_dump ($tab2);



