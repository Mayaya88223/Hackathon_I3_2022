<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercices 9 et 10</title>
    </head>
    <body>
        <?php
        echo "<h3>9. Créez une fonction qui reçoit un array et renvoie un array inversé :</h3>";
            function inverseTableau($array){
                $inverted = [];
                for ($i = count($array) - 1; $i >= 0 ; $i--){
                    $inverted[] = $array[$i]; 
                }
                return $inverted; 
            }
            // attention qu'ici je n'ai pas fourni la définition de afficheTableau()
            afficheTableau(inverseTableau($vals));
    
            echo "<h3>10. Créez une fonction qui reçoit un array et le renverse (l'array original change, on a besoin d'utiliser une référence) :</h3>";
            $listPeople = ["Mimi", "Susan", "Nora", "Michael", "Maria"];
            function renverse(array &$array) : void {
                $inverted = [];
                for ($i = count($array) - 1; $i >= 0 ; $i--){
                    $inverted[] = $array[$i]; 
                } 
                $array = $inverted;
            }
            var_dump($listPeople);
            echo "<br>";
            renverse($listPeople);
            var_dump($listPeople);
        ?>
    </body>
</html>
