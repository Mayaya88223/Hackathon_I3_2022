<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!-- on va générer le select en php à partir d'un array! -->
    <form method="POST" action="./ex07Traitement.php">
        <select name="select_chat">
            <?php
            $liensImages = ['chat01.jpg', 'unLynx.jpg', 'chatfurax.jpg', 'kittyLynx.jpg'];
            foreach ($liensImages as $indice => $lienImage) {
                // ça a l'air compliqué mais ce ne l'est pas. Il faut juste décortiquer et faire partie par partie....
                print("<option value='" . $lienImage . "'>Choix chat position " . $indice . "</option>");
            }
            ?>
        </select>
        <button type="submit">Montre moi mon chat!</button>
    </form>

</body>

</html>