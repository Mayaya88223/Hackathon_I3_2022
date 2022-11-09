<?php
    declare (strict_types = 1);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<h1 style="color:blue;">La vie est belle mais je veux aller chez moi!</h1> 

<body>
    <?php


    function afficheTexteEnCouleur (string $texte, string $couleur) : void {
        print ("<h1 style=\"color:"  . $couleur . ";\">". $texte. "</h1>");
    }

    afficheTexteEnCouleur ("Totoro", "green");
    afficheTexteEnCouleur ("Chez moi", "red");
    ?>
</body>

</html>