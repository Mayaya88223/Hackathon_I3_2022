<?php


// 1. Créer une connexion à la BD
include "../../../connexion/db.php";

try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
} catch (Exception $e) {
    // jamais en production car ça montre des infos
    // sensibles
    echo $e->getMessage();

    die();
}

$sql = "INSERT INTO film (id, titre, duree, description, dateSortie, image) ";
$sql .= " VALUES (NULL , :titre, :duree, :description, :dateSortie, :image)";

// https://www.php.net/manual/fr/pdo.constants.php
$stmt = $cnx->prepare($sql);

$stmt->bindValue (":titre", $_POST['titre']);
$stmt->bindValue (":duree", $_POST['duree'], PDO::PARAM_INT);
$stmt->bindValue (":description", $_POST['description']);
$stmt->bindValue (":dateSortie", $_POST['dateSortie']);
$stmt->bindValue (":image", $nomFichier);

$stmt->execute();
// var_dump ($stmt->errorInfo());

header ("location: ./index.php?p=listeFilms");


session_start();
include "../../../connexion/db.php";









// 1. Récuperer les données des games
$UserID = $_POST['UserID'];
$level= $_POST['level'];
$Succeed=$_POST['Succeed'];
$category=$_POST['category'];



// Chercher les données dans la BD
try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
} catch (Exception $e) {
    // jamais en production car ça montre des infos
    // sensibles
    echo $e->getMessage();
    die();
}

$sql = "INSERT INTO savegame WHERE  UserID=:UserID";
$stmt = $cnx->prepare($sql);
$stmt->bindValue(":UserID", $UserID);
$stmt->bindValue(":level", $level);
$stmt->bindValue(":Succeed", $Succeed);
$stmt->bindValue(":category", $category);
$stmt->execute();
$res = $stmt->fetch(PDO::FETCH_ASSOC);

$UserIDBD = $res['UserID'];
$levelBD = $res['level'];
$SucceedBD = $res['Succeed'];
$categoryBD= $res['category'];


?>
