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
    $film1 = [
        'titre' => 'Alien',
        'realisateur' => 'Scott'
    ];
    $film2 = [
        'titre' => 'Eyes wide shut',
        'realisateur' => 'Kubrick'
    ];
    $film3 = [
        'titre' => 'Totoro',
        'realisateur' => 'Miyazaki'
    ];
    $lesFilmes = [$film1,$film2,$film3];
    var_dump ($lesFilmes);
   
    $lesFilmes2 = [
        [
            'titre' => 'Alien',
            'realisateur' => 'Scott'
        ],
        [
            'titre' => 'Eyes wide shut',
            'realisateur' => 'Kubrick'
        ],
        [
            'titre' => 'Totoro',
            'realisateur' => 'Miyazaki'
        ]
    ];
    var_dump ($lesFilmes2);
    
    $lesFilmes2[1]['titre'] = "Hunger games";
    var_dump ($lesFilmes2);


    ?>

</body>

</html>