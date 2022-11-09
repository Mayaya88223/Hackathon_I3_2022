<?php

$arr = ['nom'=> 'Coco' , 
        'hobby' => 'jouer',
        'nationalite' => 'Belgique'];
// générer le HTML du client dans le serveur

echo json_encode($arr);

?>