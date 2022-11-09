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

<body>
    <?php
    
    echo "fonction echanger qui n'echange rien!";
    function echanger($valx, $valy)
    {
        $temp = $valx;
        $valx = $valy;
        $valy = $temp;
    }

    $x = 5;
    $y = 7;

    echanger($x, $y);
    echo "<br>On change? x: " . $x . " . y:" . $y;

    echo "<br>fonction echanger qui echange, car on utilise des reférences!";

    function echangerReference(&$valx, &$valy)
    {
        $temp = $valx;
        $valx = $valy;
        $valy = $temp;
    }

    $x = 5;
    $y = 7;

    echangerReference($x, $y);
    echo "<br>On change (reférence) ? x: " . $x . " . y:" . $y;


    // fonction qui multiplie x 2 tous les éléments d'un array
    // en modifiant l'array original
    function fois2Array(array &$unArray): void
    {
        for ($i = 0; $i < count ($unArray) ; $i++){
            $unArray [$i] = $unArray[$i] * 2;
        }
        
    }

    $arrVals = [4, 8, 10];
    
    print ("<br>Test pas de return, voici le contenu: ");
    $lalala = fois2Array($arrVals);
    var_dump ($lalala);
    print ("<br>Fin test pas de return");

    echo "<br>Array fois 2: ";
    fois2Array($arrVals);
    print_r($arrVals);
    
    $arrNoms = ['Julie', 'Grace', 'Marwa'];
    sort ($arrNoms);
    echo "<br>Essayons sort: ";
    print_r ($arrNoms);
    
    // considérons une fonction fois2 où on ne veut pas utiliser de reférences
    // Alors on doit créer une fonction qui génére un nouvel array et le renvoie
    function fois2ArrayNonReference (array $unArray) : array {
        for ($i = 0; $i < count ($unArray) ; $i++){
            $unArray[$i] = $unArray[$i] * 2;
        }
        return $unArray;
    }
    
    $arrVals2 = [10, 20, 30];
    echo "<br>Array fois 2 par valeur: ";
    $arrVals2 = fois2ArrayNonReference($arrVals2);
    print_r ($arrVals2);

    
    // fonction qui multiplie x 2 tous les éléments d'un array
    // en modifiant l'array original avec un foreach
    function fois2ArrayForeach(array &$unArray): void
    {
        foreach ($unArray as $cle => &$valeur) {
            // $unArray [$cle] = $unArray[$cle] * 2; // mais pas de & dans le foreach!
            $valeur = $valeur * 2;
        }
    }
    $arrVals3 = [100, 200, 300];
    echo "<br>Array fois 2 avec foreach: ";
    fois2ArrayForeach($arrVals3);
    print_r($arrVals3);

    







    ?>
</body>

</html>