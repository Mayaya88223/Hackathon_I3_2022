<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Voici la page qui donne toujours le même résultat:
    <br>
    Mon compteur: 
    <?php
        if (!isset($compteur)){
            $compteur = 0;
        } 
        $compteur = $compteur + 1;

        echo $compteur;
        


    ?>
</body>
</html>