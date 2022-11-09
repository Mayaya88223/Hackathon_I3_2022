<?php
// Exemple 3
$paysCapitales= array ('nom'=>'Belgique',
                          'capitale'=>'Bruxelles',
                          'population'=>11000000);

// on encode un array associatif en JSON, ?a sera un objet en javascript						  
echo json_encode($paysCapitales);
