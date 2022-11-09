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

    $tab = ["Paris", "Bruxelles","Namur" ];


    $tab[0] = "Tokyo";


    $filmRealisateurs = [
        'Psycho' => 'Alfred Hitchcock',
        'Alien' => 'Ridley Scott',
        'Eyes wide shut' => 'Stanley Kubrick'
    ];

    $filmRealisateurs ['Psycho'] = 'Ed Wood';
    
    foreach ($filmRealisateurs as $film => $realisateur){
        print ("<br>Le film <b>".$film."</b> a été fait par ".$realisateur);
    }
    ?>    
</body>
</html>