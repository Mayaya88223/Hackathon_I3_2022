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
    // 1. Créez une fonction qui affiche bonjour (reçoit un nom). Mettez-la dans une variable 
    // et faites appel à cette fonction
    $bonjour = function (string $msg = null) {
        echo "<h5>Bonjour " . $msg . "</h5>";
    };

    $bonjour();
    $bonjour("tout va bien");

    // 2. Nous avons un array de messages.
    // nous voulons utiliser la fonction bonjour 
    // pour afficher tous les messages 
    $arr = ["nous sommes en cours", "on a faim", "ça serait bien de faire la pose"];
    foreach ($arr as $val) {
        $bonjour($val);
    }
    // array_map($bonjour, $arr);

    // 3. Créez une fonction qui renvoie une valeur * 2
    // et stockez-la dans une variable
    $fois2 = function (float $val): float {
        return ($val * 2);
    };
    echo $fois2(5);

    // 4. Utilisez array_map sur cet array
    // pour obtenir un nouvel array
    // où les éléments seront multiplies fois 2
    $a = [5, 6, 7, 8];
    $a = array_map($fois2, $a);
    foreach ($a as $val) {
        echo "<br>" . $val;
    }

    // 5. On veut faire un jeu de lotto. Nous avons besoin de générer les valeurs
    // gagnants dans un tableau. Créez une fonction capable de générer un tableau 
    // d'un certain nombre de valeurs entre 0 et 20 (le nombre de valeurs sera envoyée en paramètre) 
    $genereArrayLotto = function (int $nombreValeurs): array {
        $vals = [];
        for ($i = 0; $i < $nombreValeurs; $i++) {
            $vals[] = mt_rand(0, 20);
        }
        return $vals;
    };

    // var_dump ($genereArrayLotto (4));
    // var_dump ($genereArrayLotto (2));



    // la generatrice reçoit le min et le max
    $genereFonctionLotto = function (int $min, int $max): callable {
        // la fonction générée reçoit le nombre de valeurs
        return (function (int $nombreValeurs) use ($min, $max) {
            $vals = [];
            for ($i = 0; $i < $nombreValeurs; $i++) {
                $vals[] = mt_rand($min, $max);
            }
            return $vals;
        });
    };

    // valeurs entre min et max
    $lotto50 = $genereFonctionLotto(1, 50);
    var_dump($lotto50(6)); // valeurs entre 1 et 50
    var_dump($lotto50(2)); // valeurs entre 1 et 50


    $res = $genereFonctionLotto(1, 4)(3);

    $lotto100 = $genereFonctionLotto(1, 100);
    var_dump($lotto100(3)); // valeurs entre 1 et 100
    var_dump($lotto100(5)); // valeurs entre 1 et 100

    ?>
    <script>
        document.write("<h1>Maintenant en JS!</h1>");
        // 1. Créez une fonction qui affiche bonjour (reçoit un nom). Mettez-la dans une variable 
        // et faites appel à cette fonction
        const bonjour = function(msg) {
            document.write("<h5>Bonjour " + msg + "</h5>");
        };
        bonjour();
        bonjour("tout va bien en JS");


        // 2. Nous avons un array de messages.
        // nous voulons utiliser la fonction bonjour 
        // pour afficher tous les messages 
        let arr = ["nous sommes en cours", "on a faim", "ça serait bien de faire la pose"];

        arr.forEach(bonjour);

        arr.forEach(function(valeur) {
            document.write("<br>Afficher une valeur: " + valeur);
        });

        // un autre exemple forEach
        arr.forEach(val => document.write("<br>Afficher une valeur: " + val));

        // un autre exemple forEach, plusieurs lignes de code
        arr.forEach(val => {
            document.write("<br>Hello");
            document.write("<br>Afficher une valeur: " + val);
        });

        // 3. Créez une fonction qui renvoie une valeur * 2
        // et stockez-la dans une variable
        const fois2 = function(val) {
            return (val * 2);
        };

        const fois2Arrow = (val1) => {
            return (val1 * 2);
        };

        document.write("<br>Sans arrow: " + fois2(5));
        document.write("<br>Avec arrow1: " + fois2Arrow(5));
        
        const fois2ArrowSimple = val => val * 2;
        document.write("<br>Avec arrow simple: " + fois2ArrowSimple(5));

        const sommeArrow = (v1,v2,v3) => {
            // on peut faire ce qu'on veut ici
            return v1 + v2 + v3;
        };
        document.write ("<br>La somme est: " + sommeArrow(3,4,6));



        
        
    
    
    </script>


</body>

</html>