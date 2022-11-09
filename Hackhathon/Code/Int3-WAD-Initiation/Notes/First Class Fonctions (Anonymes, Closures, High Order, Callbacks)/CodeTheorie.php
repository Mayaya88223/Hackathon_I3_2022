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
    // 1. Fonctions anonymes

    // fonction standard, pas anonyme
    function hello(string $msg = null): void
    {
        echo "Hello " . $msg;
    }
    hello();

    // fonction anonyme, pas de nom!!!
    // on peut les stocker dans une variable et dans des arrays
    $hello = function (string $msg): void {
        echo "<br>Hello anonyme " . $msg;
    };
    $hello("Laure"); // n'oubliez pas le $
    $arrayFonctions = [$hello, $hello, $hello]; // ça ne sert à rien ici, mais on montre qu'on peut faire un array de fonctions

    echo "<br>";
    foreach ($arrayFonctions as $key => $val) {
        $val(rand(1, 10));
    }

    $autreArray = [
        function (string $msg): void {
            echo "<br>f1 " . $msg;
        },
        function (): void {
            echo "<br>f2";
        }
    ];
    $autreArray[0]("coucou f1");
    $autreArray[1]();

    $autreHello = $hello;
    $autreHello("nanana");

    // Envoi de fonctions en paramètre
    $arrPrix = [40, 50, 100];

    // Programmation standard 
    // Fonction normale qui reçoit un array de prix et renvoie un nouvel array contenant les prix TVAC
    function fonctionArrayTVAC(array $unArray): array
    {
        $arrayRes = [];
        foreach ($unArray as $val) {
            $arrayRes[] = $val * 1.21;
        }
        return ($arrayRes);
    }
    $arrPrixTVAC = fonctionArrayTVAC($arrPrix);
    var_dump($arrPrixTVAC);

    // Programmation avec fonctions anonymes
    $fArrayTVAC  = function (array $unArray): array {
        $arrayRes = [];
        foreach ($unArray as $val) {
            $arrayRes[] = $val * 1.21;
        }
        return ($arrayRes);
    }; // pas oublier ;
    $arrPrixTVAC = $fArrayTVAC($arrPrix); // n'oubliez pas le $ :)
    var_dump($arrPrixTVAC);


    echo "<br><br>";

    /////////////////////////////////////////////////

    // on va avoir un array sur lequel appliquer une fonction
    // MAIS la fonction qu'on applique est créé pour agir sur UN SEUL élément
    $arrPrix = [10, 100, 1000];

    $elemTVAC = function (float $prix): float {
        return ($prix * 1.21);
    };
    // on envoie une fonction en paramètre
    $nouvelTVAC = array_map($elemTVAC, $arrPrix); // notez qu'on envoie la variable mais on spécifie pas de params, 
    // car array map parcourt l'array 
    var_dump($nouvelTVAC);

    // on va faire un fakeArrayMap rudimentaire
    $arrPrix = [10, 100, 1000];

    // dans le fake on peut mettre juste un array en paramètre
    function fakeArrayMap(callable $uneFonction, array $unArray): array
    {
        $nouvelArray = [];
        foreach ($unArray as $val) {
            $nouvelArray[] = $uneFonction($val);
        }
        return $nouvelArray;
    }
    echo "<br><br>Utilisons fake array map<br>";
    $nouvelTVAC = fakeArrayMap($elemTVAC, $arrPrix);
    var_dump($nouvelTVAC);

    ////////
    $elemTVAC = function (float $prix): float {
        return ($prix * 1.21);
    };

    $doubler = function (float $prix): float {
        return ($prix * 2);
    };

    $reduire = function (float $prix): float {
        return ($prix - $prix * 0.20);
    };

    $arrPrix = [200, 400, 600];
    $arrTVAC = array_map($elemTVAC, $arrPrix);
    echo "<br>";
    var_dump($arrTVAC);
    $arrDoubles = array_map($doubler, $arrPrix);
    echo "<br>";
    var_dump($arrDoubles);
    $arrReduit = array_map($reduire, $arrPrix);
    echo "<br>";
    var_dump($arrReduit);

    /////





    // closures

    // Ex: générer une fonction qui affiche un message au choix suivi d'un nom

    // Avec Closures, on peut créer un générateur de fonctions
    function afficheMessage($msg)
    {
        $nombreFois = 5;
        return function (string $nom) use ($nombreFois, $msg): void {
            // notez que "nombreFois" et "contenu" sont accésibles dans cette fonction
            for ($i = 0; $i < $nombreFois; $i++) {
                echo ("<br>" . $msg . " " . $nom);
            }
        };
    }

    $maFonc = afficheMessage("C'est trop bien!");
    $maFonc("Elise"); // on fait appel à la fonction , et elle utilise la valeur de $nombreFois, 
    // qui est externe à son contexte mais stockée en mémoire 
    $maFonc("Lola");

    echo "<br><br>";



    // Exemples: Exo. 7

    // fonctions de base
    $funcLowerCase = function (string $str): string {
        return strtolower($str);
    };
    $funcUpperCase = function (string $str): string {
        return strtoupper($str);
    };

    // array contenant les fonctions
    $arrayFonctionsCase = [$funcLowerCase, $funcUpperCase];

    // fonction qui fait appel à toutes les fonctions de l'array
    $caller = function (callable $fonction): void {
        $msg = 'Caroline CAP';
        print($fonction($msg) . '<br>');
    };
    // chaque élément de l'array $arrayFonctionsCase est une fonction.
    // array_map appliquera une fonction à la fois 
    // Le code de $caller fait juste appel à chaque fonction de l'array 
    array_map($caller, $arrayFonctionsCase);

    echo "<br>";

    // Exo 7. Extension: On veut un message différent pour chaque fonction. 
    // array_map doit alors lancer une fonction de l'array de fonctions 
    // avec un message d'un array de messages. Chaque fonction sera appliqué 
    // à un message.

    // array contenant les fonctions
    $arrayFonctionsCase = [$funcLowerCase, $funcUpperCase];
    $messages = ['DUBIDUBI', 'hey hey hey!'];

    // fonction qui fait appel à toutes les fonctions de l'array
    $caller = function (callable $fonction, string $message): void {
        print($fonction($message) . '<br>');
    };
    // chaque élément de l'array $arrayFonctionsCase est une fonction.
    // array_map appliquera une fonction à la fois 
    // Le code de $caller fait juste appel à chaque fonction de l'array 
    array_map($caller, $arrayFonctionsCase, $messages);





    // Exemples : Exo. 8,9,10,11,12
    $somme = function ($v1, $v2) {
        return $v1 + $v2;
    };
    $multip = function ($v1, $v2) {
        return $v1 * $v2;
    };
    echo "<br>";
    echo $somme(4, 5);
    echo "<br>";
    echo $multip(4, 5);

    $arrCalc = [$somme, $multip];
    echo "<br>";
    echo $arrCalc[0](100, 200);
    echo $arrCalc[1](100, 200);

    $arr1 = [10, 20, 30];
    $arr2 = [100, 200, 300];
    echo "<br>";
    $res1 = array_map($arrCalc[0], $arr1, $arr2);
    var_dump($res1);

    // Exemples fonctions renvoyées dans return 

    function generateurAffiche()
    {
        return (function ($msg): void {
            echo "<br>Je suis la nouvelle fonction et j'affiche " . $msg;
        });
    }
    echo "<br><br><br>";
    $fn = generateurAffiche(); // me renvoie une fonction
    $fn("Alice");
    $fn("Julie");

    function generateurCalcul()
    {
        return (function ($v1, $v2): int {
            return $v1 + $v2;
        });
    }
    echo "<br><br><br>";
    $fn = generateurCalcul();
    $somme = $fn(100, 200);
    echo "<br>La somme est : " . $somme;

    echo "<br><br><br>";

    // Exemples CLOSURES

    // fonction qui génére des headers (h1, h2, h3...)
    $genHeader = function (string $texte, string $type) {
        echo "<" . $type . ">" . $texte . "</" . $type . ">";
    };

    $genHeader("mon texte", "h1");
    $genHeader("autre texte", "h3");
    $genHeader("voici!", "h4");
    $genHeader("mon texte", "h2");


    // Closures
    // Créer une fonction qui renvoie une autre fonction. C'est cette dernière qui crée le header.
    function genFonctionHeader(string $typeHeader): callable
    {
        echo "<br>Je génére une fonction pour créer des headers: " . $typeHeader;

        $fn = function ($texte) use ($typeHeader) {
            echo "<" . $typeHeader . ">" . $texte . "</" . $typeHeader . ">";
        };
        return $fn;
    };

    $fh1 = genFonctionHeader("h1"); // on veut une fonction qui génére des h1

    $fh1("mon texte h1");
    $fh1("autre mon texte h1");

    $fh1 = genFonctionHeader("h3"); // on veut une fonction qui génére des h1
    $fh1("voici un h3");

    echo "<br><br><br>";

    // fonction dice sans closures
    function dice(int $max): int
    {  // un dé qui renvoie une valeur ayant une max (les faces du dé)
        return (mt_rand(1, $max));
    }

    $v1 = dice (6);
    echo "<br>Mon dé a généré la valeur: ".$v1;
    $v2 = dice (12);
    echo "<br>Mon dé a généré la valeur: ".$v2;
    
    // fonction generatrices de dés. On choisi le type de dé et la fonction créera toujours une valeur qui corresponde à ce dé
    
    // juste pour changer, cette fonction n'est pas anonyme. Attention quand on fait la l'appel! genDice au lieu de $genDice
    function genDice (int $maxFaces) : callable {
        $fn = function () use ($maxFaces) : int {
            return (mt_rand (1, $maxFaces));
        };
        return $fn;
    };

    $unDe = genDice(5);
    echo "<br>Mon dé a généré la valeur:" . $unDe();

    $d10 = genDice (10);
    $arr10 = [ $d10(), $d10(), $d10()];
    echo " <br>";
    var_dump ($arr10);



    ?>
</body>

</html>