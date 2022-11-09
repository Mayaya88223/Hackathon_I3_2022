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


    // par valeur: $v1 et $v2 sont de copies des variables qu'on envoie dans l'appel
    function addition(&$v1, $v2)
    {
        $v1 = 20;
        return $v1 + $v2;
    }

    $val1 = 5;
    $val2 = 10;

    $somme = addition($val1, $val2);
    print("<h4>La somme est : " . $somme . "</h4>");
    print($val1);


    // $val1 = 5

    $a = 10;
    $b = 20;
    $c = &$a;
    $c = 30;


    print($a); // 
    print($b); // 20
    print($c); // 30

    $tab = [4, 10, 15, 20];

    // 1. function pour renverser un tableau (modifie l'original)
    function renverser(&$tableau)
    {
        // $tableauTemp[0] = $tableau[3];
        // $tableauTemp[1] = $tableau[2];
        // $tableauTemp[2] = $tableau[1];
        // $tableauTemp[3] = $tableau[0];
        $tableauTemp = [];
        for ($i = count($tableau) - 1; $i >= 0; $i--) {
            $tableauTemp[] = $tableau[$i];
        }
        $tableau = $tableauTemp;
    }

    renverser($tab);
    print_r($tab);

    // 2. function qui reçoit un tableau et renvoie un nouveau tableau
    // Le tableau renvoyé est le tableau original ayant ses éléments renversés
    $tab2 = ['Paula', 'Fred', 'Laura'];
    
    function renverserParValeur($tableau)
    {
        $tableauTemp = [];
        for ($i = count($tableau) - 1; $i >= 0; $i--) {
            $tableauTemp[] = $tableau[$i];
        }
        return ($tableauTemp);
    }

    $nouveauTableauRenverse = renverserParValeur($tab2);
    print_r ($nouveauTableauRenverse);

    ?>
</body>

</html>