<?php


$noms= ["Jean","Julie","Jaime","Marie","Elise","Isabelle","Irache"];

$extraitNom=$_POST['extraitNom'];


$arrayNomsTrouves=[];
foreach ($noms as $unNom){
		if(strpos($unNom,$extraitNom)!==FALSE){
			$arrayNomsTrouves[]=$unNom;
		}
}

echo json_encode($arrayNomsTrouves);

	
	
	
?>
