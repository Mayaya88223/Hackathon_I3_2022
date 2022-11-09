<?php
include "./config/configbd.php";


// récupérer les données du formulaire
$email = $_POST['email'];
$passwordSansHasher = $_POST['password'];


// connecter à la BD
try {
    $pdo = new PDO(MYSQL_DSN, DB_USER, DB_PWD);
} 
catch (PDOException $e) {
    $pdo = null;               
    // ici on pourrait rédiriger vers une autre page
	die('Probléme technique'); 
}	

// créer et preparer la requête
$sql = "SELECT email, password FROM users  WHERE email=:email";

$resultat = $pdo->prepare ($sql);
$resultat->bindValue (":email", $email);
$resultat->execute();
$tableau = $resultat->fetchAll (PDO::FETCH_ASSOC);

if (password_verify ($passwordSansHasher, $tableau[0]['password'])){
	echo "Login correct!";
}
else {
	echo "Password incorrect";
}








?>