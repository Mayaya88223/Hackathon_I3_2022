<?php
session_start();
$loginUtilisateur = $_SESSION['loginConnecte'];
$idFilm = $_GET['id'];

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

$sql = "SELECT * FROM favori" .
        " INNER JOIN utilisateur ON utilisateur.id = favori.idUtilisateur" .      
        " WHERE favori.idFilm=:idFilm AND utilisateur.login=:login";

$stmt = $cnx->prepare($sql);
$stmt->bindValue(":login", $loginUtilisateur);
$stmt->bindValue(":idFilm", $idFilm);
$stmt->execute();

$res = $stmt->fetchAll(PDO::FETCH_ASSOC);

$arr['donnees'] = $res; 

echo json_encode ($arr);