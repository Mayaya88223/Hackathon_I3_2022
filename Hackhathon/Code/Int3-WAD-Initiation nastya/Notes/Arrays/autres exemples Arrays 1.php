<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h4>explication des arrays</h4>
    <?php
    $tab1 = []; // tableau vide
    var_dump($tab1); // afficher le contenu d'une variable  
    $tab2 = ["Alessia", "Zuli", "Joanna"];
    var_dump($tab2);
    // accèder un élément
    echo "<br>" . $tab2[1];
    // modifier un élément
    $tab2[2] = "Manon";
    // effacer un élément
    unset($tab2[1]);
    var_dump($tab2);
    // rajouter un élément (index choisi)
    $tab2[30] = "Belén";
    var_dump($tab2);
    // rajouter un élément (à la fin)
    $tab2[] = "Camille";
    var_dump($tab2);

    // parcourir avec foreach
    echo "<br><br>Contenu du tableau:<br>";
    foreach ($tab2 as $key => $val) {
        echo $val . " ; ";
    }

    $tab3 = [
        'nom' => 'Thao',
        'ville' => 'Bruxelles',
        'hobby' => 'lire'
    ];
    // accèder un élément
    // echo $tab3[0]; // warning! l'index n'existe pas!
    echo "<br>" . $tab3['hobby'];

    // modifier un élément
    $tab3['hobby'] = 'natation';
    // effacer un élément
    unset($tab3['ville']);
    // rajouter un élément
    $tab3['couleur'] = 'bleu';


    // unset ($tab3); // efface la variable
    $tab3['langues'] = ['vietnamien', 'français', 'anglais'];
    $tab3['mascotte'] = [
        'animal' => 'chat',
        'type' => 'siamois',
        'couleur' => 'noir'
    ];
    var_dump($tab3);















    ?>



</body>

</html>