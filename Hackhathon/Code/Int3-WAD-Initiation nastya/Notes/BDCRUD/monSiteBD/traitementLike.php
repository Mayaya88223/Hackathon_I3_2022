<?php
session_start();
$loginUtilisateur = $_SESSION['loginConnecte'];
$idFilm = $_GET['id'];
$deleteLike = $_GET['deleteLike'];

var_dump($deleteLike);


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


if ($deleteLike == 'true') {
    $sql = "DELETE L FROM favori L" .
    " INNER JOIN utilisateur U ON U.id = L.idUtilisateur" .
    " WHERE L.idFilm=:idFilm AND U.login=:login";
}
else {
    $sql = "INSERT INTO favori (idFilm, idUtilisateur)" .
    " SELECT :idFilm as idFilm, id FROM utilisateur WHERE login=:login";
}

$stmt = $cnx->prepare($sql);
$stmt->bindValue(":login", $loginUtilisateur);
$stmt->bindValue(":idFilm", $idFilm);
$stmt->execute();

$res = $stmt->fetchAll(PDO::FETCH_ASSOC);
$arr['donnees'] = $res; 
echo json_encode ($arr);