<?php

$pass = "lola";

$hashedPass = password_hash ($pass,PASSWORD_DEFAULT, ['cost'=>12]);
echo $pass;
echo "<br>";
echo $hashedPass;
echo "<br>";

// password_verify reçoit deux paramétres: le password sans hasher et le password hashé
if (password_verify ( $pass, $hashedPass)){
	echo "tout va bien";
}
else {
	echo "password invalide"; 
}
	


?>