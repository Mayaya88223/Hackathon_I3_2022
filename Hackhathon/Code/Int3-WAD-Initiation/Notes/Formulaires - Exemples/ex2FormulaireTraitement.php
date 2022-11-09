<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Je suis dans la page qui va traiter le form<br><br>
    <?php
        // formulaire POST: tous les couples clé-valeur sont stockés dans $_POST
        // En plus en voit les valeurs dans l'URL du navigateur
        print ("Voyons le contenu du formulaire POST");
        // Un array POST est crée
        var_dump ($_POST);
        // imprimer directement le contenu du form implique de risques. On utilisear
        // htmlspecialchars(), htmlentities() etc... pour éviter l'injection du code
        print ("<h5>Bienvenue ".$_POST['nom'].
            ", vous êtes néé le ". $_POST['dateNaissance']. 
            ", vous aimez bien ". $_POST['hobby']. "</h5>");
    ?>
</body>
</html>