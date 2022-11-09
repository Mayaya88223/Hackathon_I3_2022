<?php
declare(strict_types=1);
?>

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

    function tableMult(int $valeur) : void
    {
        for ($i = 1; $i <= 10; $i++) {
            // juste pour Myriam
            echo "<br>" . $valeur . " x " . $i . " = " . $valeur * $i;
        }
    }

    tableMult(8);


    ?>
</body>

</html>