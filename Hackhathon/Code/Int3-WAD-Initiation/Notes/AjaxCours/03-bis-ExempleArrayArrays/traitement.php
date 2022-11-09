<?php

$arr = [
        [
                'nom' => 'Coco',
                'hobby' => 'jouer',
                'nationalite' => 'Belgique'
        ],
        [
                'nom' => 'Coco 2',
                'hobby' => 'lire',
                'nationalite' => 'France'
        ],
        [
                'nom' => 'Coco 3',
                'hobby' => 'nager',
                'nationalite' => 'Maroc'
        ]
];
// générer le HTML du client dans le serveur

echo json_encode($arr);
