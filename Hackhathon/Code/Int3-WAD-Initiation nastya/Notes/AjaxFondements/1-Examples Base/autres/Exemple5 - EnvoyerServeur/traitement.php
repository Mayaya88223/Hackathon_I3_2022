<?php

	// on reçoit les valeurs du client?
	$nomDuProduit=$_POST['nomDuProduit'];
	
	

	$unArray= ["oranges"=>5,
				"citrons"=>3,
				"pommes"=>2];
	
	
	$prix= $unArray[$nomDuProduit];
	echo $prix;
	
	
	
?>
