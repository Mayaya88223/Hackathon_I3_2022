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
    $pays = [
        ['nom'=>'France',
        'capital'=> 'Paris'],
        ['nom'=>'Italie',
        'capital'=> 'Rom'],
        ['nom'=>'Belgique',
        'capital'=> 'Bruxelles'],
        
    ];
    var_dump ($pays);

    foreach ($pays as $arrayUnPays){
        print ("<br>La capital de ". $arrayUnPays['nom']. 
        " est ". $arrayUnPays['capital']);
    }
    ?>    
</body>
</html>