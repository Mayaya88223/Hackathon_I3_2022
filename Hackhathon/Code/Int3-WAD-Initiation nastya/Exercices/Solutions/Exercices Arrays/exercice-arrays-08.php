<?php

$notes = [
    'Laura' => 12,
    'Coco' => 3,
    'Kasia' => 14,
    'Sara' => 15,
    'Miriam' => 6
];

foreach ($notes as $nom => $note) {
    if ($note >= 12) {
        print("\n" . $nom . " a réussi");
    }
}

// ($notes ['Laura'] + $notes ['pepe'] + ......... ) / count ($notes)

$somme = 0;
foreach ($notes as $valeurNote) {
    $somme = $somme + $valeurNote;
}

$moyenne = $somme / count($notes);
print("\nLa moyenne est de: " . $moyenne);

// par curiosité, on peut obtenir toutes les cles ou les valeurs d'un array associatif
// array_vals -> crée un nouveau tableau indexé contenant les valeurs d'un array assoc
// array_keys -> crée un nouveau tableau indexé contenant les clés d'un array assoc
$valsNotes = array_values($notes);
$i = 0;
while ($i < count($valsNotes)) {
    $somme = $somme + $valsNotes[$i];
    $i++;
}
$moyenne = $somme / count($notes);
print("\nLa moyenne est de: " . $moyenne);
