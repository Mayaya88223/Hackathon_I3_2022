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

    // pas besoin de créer de fonctions génératrices à chaque fois
    $transformation = "majuscules";
    $maFonction = function ($texte) use ($transformation) {
        if ($transformation == "majuscules"){
            $texte = strtoupper($texte);
        }
        echo $texte;
    };

    $maFonction("un texte");
    echo "<br><br>";
    
    // fonction qui génére de fonctions qui CHANGENT une variable, ici un string
    function genChangeTexte($typeChange): callable
    {
        $fn = function (string &$texte) use ($typeChange): void  {
            switch ($typeChange) {
                case "inverser":
                    $texte = strrev($texte);
                    break;
                case "majuscules":
                    $texte =  strtoupper($texte);
            }
        };
        return $fn;
    }
    $inverser = genChangeTexte("inverser");
    
    $texte = "lalala";

    $inverser($texte);
    
    var_dump ($texte);

    $majus = genChangeTexte("majuscules");
    $majus ($texte);
    var_dump ($texte);

    



    ?>
</body>

</html>