<?php

// decommenter pour forcer la vérification des types
declare(strict_types=1);

// Si la config de PHP n'affiche pas des erreurs on doit 
// modifier le php.ini ou rajouter ces trois lignes.
// Cette situation arrive dans la config de XAMPP par défaut de linux
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

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



    function calculeAire(int $largeur, int $hauteur): void
    {
        $aire = $largeur * $hauteur;
        echo "L'aire est: " . $aire;
    }

    function afficheIMC($taille, $poids)
    {
        echo "<br>Votre IMC est : " . ($poids / ($taille * $taille) * 10000);
    }

    afficheIMC(174, 70);

    // du n'importe quoi! et on n'obtient pas d'erreur
    // afficheIMC("Poulet","Chocolat");

    // on spécifie les types
    function afficheIMCTypes(int $taille, int $poids)
    {
        echo "<br>Votre IMC est : " . ($poids / ($taille * $taille) * 10000);
    }

    afficheIMCTypes(174, 70); // correct

    // afficheIMCTypes("174","70"); // erreur si stric_types = 1, autrement casting
    // observez que l'éditeur se plaint!

    // afficheIMCTypes("Poulet","Chocolat");


    // paramètre nullable
    function disBonjour(?string $nom)
    {
        echo "<br>Bonjour, " . $nom;
    }

    disBonjour("Hanna"); // Bonjour, Hanna
    // disBonjour(); // erreur, car on attends un paramètre, Too few arguments 
    disBonjour(null); // Bonjour, 
    // pas d'erreur, null est un paramètre
    // disBonjour(3.2); // erreur, 3.2 n'est pas un string 


    // paramètre optionnel : il sera null si on ne l'envoie pas 
    function disBonjourOpt(string $nom = null)
    {
        if ($nom == null) {
            $nom = "Madame/Monsieur";
        }
        echo "<br>Bonjour, " . $nom;
    }
    disBonjourOpt("Clifford Brown"); // Bonjour, Clifford Brown
    disBonjourOpt(); // Bonjour Madame/Monsieur car paramètre inexistant


    // UNION types

    // on ne fixe pas le paramètre à un seul type, mais à plusieurs (c'est un OR)
    // ex: Les paramètres de cette fonction peuvent être int ou float
    function afficheSurfaceChambre(int|float $val1, int|float $val2)
    {
        echo "<br>La surface est : " . ($val1 * $val2);
    }

    afficheSurfaceChambre(4, 5.0); // ok!
    afficheSurfaceChambre(4.0, 5.0); // ok!
    // afficheSurfaceChambre (4,"Tripel Karmeliet"); // bref...

    // Specification des types dans la valeur de retour
    function obtenirDivision(int $val1, int $val2): float
    {
        $res = $val1 / $val2;
        return $res;
    }

    $laDivision = obtenirDivision(5, 7);
    echo "<br>Voici la division, obtenu grâce à la fonction : " . $laDivision;


    /**
     * obtenirDivisionCheck calcule la division de deux entiers. Renvoie un float 
     * ou null si le dénominateur est 0
     *
     * @param  mixed $val1
     * @param  mixed $val2
     * @return float
     */
    function obtenirDivisionCheck(int $val1, int $val2): float | null
    {
        if ($val2 == 0) {
            $res = null;
        } else {
            $res = $val1 / $val2;
        }
        return $res;
    }



    echo "<br>Voici la division, obtenu grâce à la fonction : " . obtenirDivisionCheck(4, 3);
    // echo de null n'afficher rien
    echo "<br>Voici la division, obtenu grâce à la fonction : " . obtenirDivisionCheck(4, 0);

    // echo "<br>Voici la division, obtenu grâce à la fonction : " . obtenirDivisionCheck (4.0,0); // ne marchera pas, la fonction doit recevoir deux ints


    ?>

</body>

</html>