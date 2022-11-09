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
        print ("Le chat choisi est: <br>");
        // les images se trouvent dans le dossier /img, il faut créer le chemin /img/chatXX
        print ("<img style='width:25%' src='./img/". $_POST['select_chat'] . "'>");

    ?>
    <br>
    <a href="./ex07.php">Revenir en arrière</a>
</body>

</html>