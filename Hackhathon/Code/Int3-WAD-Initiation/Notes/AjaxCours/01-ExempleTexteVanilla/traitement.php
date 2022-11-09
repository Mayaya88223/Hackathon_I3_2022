Du html ici 
<?php

$arr = ['Coco' , 'Camimlle', 'Mariam', 'Alessa'];
// générer le HTML du client dans le serveur

echo "<ul>";
foreach ($arr as $nom){
    echo "<li>" . $nom . "</li>";
}
echo "</ul>";

?>