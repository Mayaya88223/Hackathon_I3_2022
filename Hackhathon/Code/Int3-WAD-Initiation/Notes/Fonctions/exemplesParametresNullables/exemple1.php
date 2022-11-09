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

    // ce tableau vient d'une BD

    // $noms = ['Nastya','Eleonore','Lola'];
    $noms = null;

    // afficherTableau (?array $noms) : bool
    // returns: true si l'array n'est pas null

    function afficherTableau (?array $noms) : bool {
        if ($noms != null){
            foreach ($noms as $unNom){
                echo "\n" . $unNom;        
            }
            return true;
        }
        else {
            return false;
            // echo "<br>Il n'y a pas de résultats";
        }
    }

    afficherTableau ($noms);

    function disBonjourOpt (string $nom ){
        if ($nom == ""){
            $nom = "Madame/Monsieur";
        }
        echo "<br>Bonjour, " . $nom;   
    }
    disBonjourOpt("Clifford Brown"); // Bonjour, Clifford Brown
    disBonjourOpt(); // Bonjour Madame/Monsieur car paramètre inexistant
    disBonjourOpt(null); // Bonjour Madame/Monsieur car paramètre inexistant
    

    ?>
</body>
</html>