<?php

$titre = $_POST['titre'];

// créer un array pour renvoye au client
// cet array contient le résultat et les possibles erreurs
// Tous les deux sous la forme d'array
// $arr est la reponse
$arr = ['donnees' => [],
        'erreurs' => [] ]; // erreurs va être (notre choix) une liste de string

include "./connexion/db.php";

try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
} catch (Exception $e) {
    // jamais en production car ça montre des infos
    // sensibles
    $arr['erreurs'][] = "Érreur de connexion"; // il y a mieux (HTTP headers)
    die();
}



$titre = "%" . $_POST['titre'] . "%";
$sql = "SELECT * FROM film WHERE titre LIKE :titre ";

$stmt = $cnx->prepare($sql);
$stmt->bindValue(":titre", $titre);
$stmt->execute();

$res = $stmt->fetchAll(PDO::FETCH_ASSOC);
$arr['donnees'] = $res; 

echo json_encode ($arr);
