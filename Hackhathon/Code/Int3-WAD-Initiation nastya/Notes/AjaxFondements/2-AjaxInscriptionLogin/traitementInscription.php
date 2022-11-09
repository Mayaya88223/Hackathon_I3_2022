<?php

include "./config/configbd.php";



// récupérer les données du formulaire
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$password = password_hash ($_POST['password'], PASSWORD_DEFAULT, ['COST'=>12]);


// connecter à la BD
try {
    $pdo = new PDO(MYSQL_DSN, DB_USER, DB_PWD);
} 
catch (PDOException $e) {
    $pdo = null;               
    // ici on pourrait rédiriger vers une autre page
	die('Problème technique'); 
}	

// créer et preparer la requête
$sql = "INSERT INTO users (iduser, lastname, firstname, email, password)";
$sql = $sql." VALUES (null, :lastname, :firstname, :email, :password)";

$resultat = $pdo->prepare ($sql);
$resultat->bindValue (":lastname", $nom);
$resultat->bindValue (":firstname", $prenom);
$resultat->bindValue (":email", $email);
$resultat->bindValue (":password", $password);

if ($resultat->execute()){
	echo "L'inscription a été réalisée correctement";  // ne pas faire ça si on renvoie du JSON!!!
}
else {
	echo "Erreur dans l'inscription";  // ne pas faire ça si on renvoie du JSON!!!
}









?>