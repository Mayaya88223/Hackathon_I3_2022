<?php $folder = "/tigrebleu/"?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo $folder . "Assets/css/reset.css" ?>">
    <link rel="stylesheet" href="<?php echo $folder . "Assets/css/style.css" ?>">
    <script src="<?php echo $folder . "JS/phaser.min.js" ?>"></script>
    <title>Document</title>
</head>

<body>
    <?php
    # trouver le chemin du serveur et du répertoire racine
    $path = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
    $path .= $folder . dirname($folder);
    echo $path;

    # Utiliser <?php echo $path . " "; pour des liens 
    ?>
    <header>
        <div class="inner-header">
            <nav class="navbar">
                <ul class="navbar__list">
                    <li class="navbar__item"><a href="#">Item 1</a></li>
                    <li class="navbar__item"><a href="#">Item 2</a></li>
                    <li class="navbar__item"><a href="#">Item 3</a></li>
                    </li>
                </ul>
            </nav>
        </div>
    </header>


    <section class="section section--page">
        <h4>"<?php echo $path . "/Assets/css/reset.css"; ?>"</h4>
        <div class="page__inner d-flex">
            <div class="text-box">
                <div d-flex>
                    <!-- <h2 class="h2--lesson">Couleurs : Niveau 1</h2> -->
                    <h3>Couleurs: Leçon1</h3>
                    <div id="game-wrapper">
                    </div>

                </div>
                <div class="tigre">
                    <img src="<?php echo $path . "/Assets/images/deco/tigre-bleu-lg.svg "; ?>" alt="tigre bleu">
                </div>
    </section>
    <script src="<?php echo $folder . "JS/Chiffres2.js" ?>"></script>
</body>

</html>