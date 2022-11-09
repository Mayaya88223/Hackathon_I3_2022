<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple fonctions</title>
</head>
<body>
    Le produit: GSM Samsung Galaxy S20
    <br>
    Prix :

    <?php
    $prix = 500;
    echo $prix;

    ?>
    <br>
    Le prix TVAC est : 

    <?php

    function calculePrixTVAC ($val){
        $prixTVAC = $val * 1.21;
        echo $prixTVAC;
    }

    $prixTotal = calculePrixTVAC($prix);
    echo "<h2>".$prixTotal."</h2>";
    echo "<table style='border: 1px solid'><tr><td>".$prixTotal."</td></tr></table>";

    mail ("adresse@gmail.com", $prixTotal);
    ?>

</body>
</html>