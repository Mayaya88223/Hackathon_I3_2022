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
        <select name="select_animal">
            <?php
            $liensImages = [
                'Lemur'=> 'lemur.jpg', 
                'Élephant' => 'elephant.jpg', 
                'Lynx' => 'lynx.jpg', 
                'Chien' => 'chien.jpg'];
            
            foreach ($liensImages as $nom => $unLien) {
                // ça a l'air compliqué mais ce ne l'est pas. Il faut juste décortiquer et faire partie par partie....
                // <option value='chat.jpg'>Chat</option>
                print ("<option value='");
                print ($unLien);
                print ("'>");
                print ($nom);
                print ("</option>");

                // une fois vous êtes ok avec les différentes parties...
                // print("<option value='" . $unLien . "'>" . $nom . "</option>");
            }
            ?>
        </select>
        <button type="submit">Montre moi mon animal!</button>
    </form>

</body>

</html>