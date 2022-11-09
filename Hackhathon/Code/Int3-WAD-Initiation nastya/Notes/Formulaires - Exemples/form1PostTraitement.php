<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form1 traitement</title>
</head>
<body>
    <?php
        // $_POST : array qui contient toutes les données du formulaire
        // qui a appelé cette page
        print_r ($_POST);
        var_dump ($_POST);

        print ("<br>");
        print ($_POST['nom']);
        print ("<br>");
        print ($_POST['age']);

        $nom = $_POST['nom']; // on devrait filtrer
        $age = $_POST['age']; // on devrait filtrer
        
        // on fait quoi qui ce soit avec les variables:
        // afficher, rechercher dans une BD

        if ($age >= 18){
            echo "<h1>Bienvenue</h1>";
        }
        else {
            echo "<h1>Pas possible!</h1>"; 
        }
        
    ?>
</body>
</html>