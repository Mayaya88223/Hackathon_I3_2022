<?php

include "./config/config.php";

try {
    $pdo = new PDO(MYSQL_DSN, DB_USER, DB_PWD);
} 
catch (PDOException $e) {
    $pdo = null;               
    die('Problème technique'); 
}		

$sql = "SELECT * FROM t_characters";

$resultat = $pdo->prepare ($sql);
$resultat->execute();

$tableau = $resultat->fetchAll (PDO::FETCH_ASSOC);
echo json_encode ($tableau);

