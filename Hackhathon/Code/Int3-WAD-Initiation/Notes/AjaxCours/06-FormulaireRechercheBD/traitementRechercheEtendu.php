<!-- Si on veut utiliser la master page il faudra enlever tout ce qui n'est pas necessaire (entetes HTML)  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php


include "./connexion/db.php";

try {
    $cnx = new PDO(DBDRIVER . ':host=' . DBHOST . ';port=' . DBPORT . ';dbname=' . DBNAME . ';charset=' . DBCHARSET, DBUSER, DBPASS);
} catch (Exception $e) {
    // jamais en production car ça montre des infos
    // sensibles

    // echo $e->getMessage();
    die();
}

$titre = "%" . $_POST['titre'] . "%";
$sql = "SELECT * FROM film WHERE titre LIKE :titre ";

$stmt = $cnx->prepare($sql);
$stmt->bindValue(":titre", $titre);
$stmt->execute();

$res = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($res) > 0) {
    foreach ($res as $film) {
        echo "<br>";
        foreach ($film as $cle => $val) {
            echo $cle . " : " . $val . "<br>";
        }
    }
} else {
    echo "<h5>On n'a pas trouve de films</h5>";
}

?>


</body>
</html>