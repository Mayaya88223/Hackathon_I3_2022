<?php
	
	
	if (mb_strlen($_POST['nom'])<5){
		echo $_POST['nom']. " est un nom trop court";
	}
	else {
		echo $_POST['nom']. " est assez long";
	};
	
		

?>

