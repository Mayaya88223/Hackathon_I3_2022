<?php
session_start(); 
$userId=$_SESSION["UserID"];
$json = file_get_contents('php://input');
$data = json_decode($json);

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

$sql = "INSERT INTO categories (ID, UserID, level, Succeed, category) ";
$sql .= " VALUES (NULL ,:UserID, :level, :Succeed, :category)";

// https://www.php.net/manual/fr/pdo.constants.php
$stmt = $cnx->prepare($sql);

$stmt->bindValue (":UserID", $userId);
$stmt->bindValue (":level", $data->level);
$stmt->bindValue (":Succeed", $data->Succeed);
$stmt->bindValue (":category", $data->category);

$stmt->execute();
// var_dump ($stmt->errorInfo());

echo "{ 'Status':'OK'}"


?>










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
