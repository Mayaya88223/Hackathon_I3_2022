<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!-- <img src="./images/loup1.jpg" style="max-width:20%;" >

<img src="./images/loup2.jpg" style="max-width:20%;" >


<img src="./images/loup3.jpg" style="max-width:20%;" >
<img src="./images/loup4.jpg" style="max-width:20%;" >
<img src="./images/loup5.jpg" style="max-width:20%;" >
<img src="./images/loup6.jpg" style="max-width:20%;" > -->

    <?php
    for ($i = 1; $i <= 6; $i++) {
        print("<img src='./images/loup" . $i . ".jpg' style='max-width:20%;'>");
    }
    ?>

    <?php
    // 1. Obtenir tous les fichiers qui se trouvent dans le dossier images
    // et les mettre dans un array (scandir)
    $mesImages = scandir("./images");
    
    unset ($mesImages[0]);
    unset ($mesImages[1]);
    
    var_dump ($mesImages);

    // 2. Parcourir avec foreach et genérér les images
    foreach ($mesImages as $nomFichierImage){
        print ("<img src='./images/" . $nomFichierImage . "' style='max-width:20%'>");
        // print ($nomFichierImage);
    }    

    ?>

</body>

</html>