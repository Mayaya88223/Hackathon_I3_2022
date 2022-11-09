<html>
<body>


<?php

// cet script obtient de la BD les infos de toutes les images qui portent un 
// certain nom 
include "./config/db.php";


try {
		$bdd=new PDO (DBDRIVER.":host=".DBHOST.";port=".DBPORT.";dbname=".DBNAME, DBUSER,DBPASS);
	}
catch (Exception $e){
		die ("Problème de connexion!");
}
	
	
echo "<br/><br/><br/>";
$bdd->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	


$name= ".bmp"; // cette valeur doit venir d'un formulaire, ici on la fixe pour simplifier le code

// requête préparée pour diminuer le risque d'injection SQL
$statement= $bdd->prepare ("SELECT * FROM images WHERE file=:name");
if ($statement->execute (array (':name' =>$name))){
	foreach ($statement as $ligne){
		print_r ($ligne); // observer les indices quand on fait print_r: 
							// on peut accèder aux éléments avec des index numériques ou de chaine de caractéres
	};
}

?>
</body>
</html>