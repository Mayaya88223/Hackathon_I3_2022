<?php

$tab = [4, 5, 7, 8, 8, 3, 2, 9];

print ("\nContenu avec for : \n");
for ($i = 0; $i < count($tab); $i++) {
    print($tab[$i] . " ");
}

print ("\nContenu avec for : \n");
$tab2 = [ 'Rome', 'Paris', 'Oslo', 'Madrid'];
for ($i = 0; $i < count($tab2); $i++) {
    print($tab2[$i] . " ");
}

// Attention aux index
unset ($tab2[1]); // effacer Paris
// for ($i = 0; $i < count($tab2); $i++) {
//     print($tab2[$i] . " "); // erreur car pas défini
// }

print ("\n\nContenu foreach, clés et valeurs: \n");
foreach ($tab2 as $cle => $valeur){
    print ($cle. " : ". $valeur . "\n");
}


print ("\n\nContenu foreach, seulement les valeurs: \n");
foreach ($tab2 as $valeur){
    print ($valeur . "\n");
}


print ("\n\nContenu foreach, seulement les clés: \n");
foreach ($tab2 as $cle => $valeur){
    print ($cle . "\n");
}
