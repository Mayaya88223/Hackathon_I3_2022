<?php
	
	$requete= $_POST['titreRecherche'];
	//echo $requete;
	
	include "./config/db.php";
	
	try {
		$bdd = new PDO(DBDRIVER.':host='.DBHOST.';port='.DBPORT.
            ';dbname='.DBNAME.';charset='
            .DBCHARSET,DBUSER,DBPASS); 
	}
	catch (Exception $e){
		die ('Erreur: ');
	}
	
	$sql="SELECT titre FROM films WHERE titre LIKE :titre";
	$statement=$bdd->prepare ($sql);
	$statement->bindValue(":titre","%".$requete."%");
	$statement->execute();
	$lignes= $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode ($lignes);
	
	
?>