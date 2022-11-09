<?php

	$personne1= ["nom"=>"Margaret",
				"profession"=>"musicienne",
				"dateNaissance"=>"1/1/1983"];
				
	$personne2= ["nom"=>"Jules",
				"profession"=>"mécanicien",
				"dateNaissance"=>"4/2/2002"];
				
	$liste= array($personne1,$personne2);
					
	$stringJSON=json_encode($liste);
	echo $stringJSON;

?>
