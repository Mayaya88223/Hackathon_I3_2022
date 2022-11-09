<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="./resetCompteur.php" method="GET">
        <input type="submit" value="reset">
    </form>

    <?php
        session_start();

        if (!isset ($_SESSION['compteur'])){
            $_SESSION['compteur'] = 0;
        }

        $_SESSION['compteur'] ++;

        echo "<h2>Le compteur: ".$_SESSION['compteur'];

    ?>
    <br>
</body>
</html>