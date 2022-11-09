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

    // l'exerice fait avec de films au lieu de pays, mais c'est le même principe
    $filmRealisateurs = [
        [
            'titre' => 'Psycho',
            'realisateurs' => ['Alfred Hitchcock', 'Bergman']
        ],
        [
            'titre' => 'Alien',
            'realisateurs' => ['Ridley Scott', 'Kurosawa']
        ],
        [
            'titre' => 'Eyes wide shut',
            'realisateurs' => ['Stanley Kubrick']
        ],
        [
            'titre' => 'Matrix',
            'realisateurs' => ['Wachowsky I', 'Wachowsky II']
        ]
    ];
    var_dump($filmRealisateurs);

    foreach ($filmRealisateurs as $index => $arrayFilm) {
        foreach ($arrayFilm as $key => $value) {
            if (is_array($value) == false) {
                // ce n'est pas un array, je peux faire echo
                echo "<h4>" . $key . " : " . $value . "<h4>";
            }
            else {
                foreach ($value as $nomRealisateur){
                    echo "<h5>". $nomRealisateur. "</h5>";
                }
            }
        }
    }
    ?>
</body>

</html>