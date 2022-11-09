<html>
<body>
<?php
//////////// NOTES SUR LES ARRAYS /////////////////


// Création d'un array (tableau)
$tab= [3,4,7,8]; // rempli
// $tab= array(3,4,7,8); // rempli, vieille notation
$tab2= []; //vide
// $tab= array(); //vide, vieille notation
$tab3= [3,4,7,8];
    
    
// rajouter des elements tab2
$tab2[]= 23;
$tab2[]= 24;
$tab2[]= 50;
// rajouter un element au tableau $tab
$tab[4]= 100; 
// remplacer la valeur dans la position 2
$tab[2]=200;
// supprimer une valeur: l'index sera supprimé! attention aux boucles for
unset($tab[2]);
// mettre à vide la valeur d'un index
$tab[4]=null;
// affecter une valeur à une position
$tab[2]=300;

echo "<br>Contenu de tab: <br>";
print_r($tab);

// afficher les valeurs d'un array avec
// une boucle foreach
echo "<br>Contenu du tableau tab (foreach)";
foreach ($tab as $value){
	echo "<br>".$value;
}

echo "<br>Contenu du tableau tab (for)";
for ($i=0;$i<5;$i++){
	echo "<br>".$tab[$i];
}

// ARRAYS ASSOCIATIFS
$paysCapitales = [
			'France' => 'Paris',
			'Italie' => 'Rome',
			'Japon' => 'Tokyo',
			'Espagne' => 'Madrid'];
			

echo "<br>";			
print_r ($paysCapitales);
// afficher ou acceder un element
echo "<br>Une valeur: ".$paysCapitales['Italie'];
// afficher la totalité de l'array en utilisant foreach
echo "<br>";
foreach ($paysCapitales as $key=>$value){
	echo "Le pays ".$key." a pour capitale ".$value."<br>";			
}

// rajouter une valeur (couple pays-capitale)
$paysCapitales['Allemagne']='Berlin';

// affichage
foreach ($paysCapitales as $key=>$value){
	echo "Le pays ".$key." a pour capitale ".$value."<br>";			
}
// effacer un element
unset($paysCapitales['Italie']);
echo "<br>";

print_r($paysCapitales);

// un autre exemple: infos fichier mp3
$fichier1= ["Nom" => "Bad",
				"Auteur" => "Michael Jackson",
				"Duree" => "4:35"];
$fichier2= ["Nom" => "Inner Visions",
				"Auteur" => "Stevie Wonder",
				"Duree" => "3:30"];
$fichier3=[];

$fichier3['Nom']="Superstition";
$fichier3['Auteur']="Stevie Wonder";
$fichier3['Duree']="4:50";

// Création d'un array contenant d'autres arrays
echo "<br><br>";				
$disque = [$fichier1, $fichier2, $fichier3];

echo "<br>";
// Afficher la totalité de l'array disque
print_r($disque);

// Parcourir un array contenant d'autres arrays (multidimensionnel)
echo "<br>";
foreach ($disque as $key => $val){
	print ($key);
	print ($val);
	
	
	foreach ($fichier as $key=>$val){
		echo "<br>".$key.": ".$val;
	}
}
// Acceder directement aux elements de l'array disque
echo $disque[0]['Nom'];
echo $disque[2]['Nom'];				
?>

</body>
</html>
