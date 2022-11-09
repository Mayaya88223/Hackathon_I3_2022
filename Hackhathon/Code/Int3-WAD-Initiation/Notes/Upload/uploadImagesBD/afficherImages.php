<html>
<body>
<?php
// Cet script obtient les images de la BD et les affiche 
	
	include ("./config/db.php");
	
	try {
		$bdd=new PDO (DBDRIVER.":host=".DBHOST.";port=".DBPORT.";dbname=".DBNAME, DBUSER,DBPASS);
	}
	catch (Exception $e){
		die ("Problème de connexion!");
	}
	
	$sql= "SELECT * FROM images";
	$response= $bdd->query ($sql);
	$lignes = $response->fetchAll(PDO::FETCH_ASSOC);
	foreach ($lignes as $ligneImage){
		echo "\n<img src='./img/".$ligneImage['file']."' width=300/>";
		
	};
	
	

	
	
?>
</body>
</html>