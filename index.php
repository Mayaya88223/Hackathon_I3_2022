<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./View/style-test.css">
    <link rel="stylesheet" href="./View/reset-test.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Apprendre le chinois</title>
</head>


<body>
<header>
        <div class="inner-header">
            <nav class="navbar">
                <ul class="navbar__list">
                    <li class="navbar__item"><a href="index.php?page=categories/categories.html">HOME</a></li>
                    <li class="navbar__item"><a href="#">Apprendre</a></li>
                    <li class="navbar__item"><a href="#">Jouer</a></li>
                    <li class="navbar__item"><a href="#">LOGOUT</a></li>
<?php
  if (isset($_POST['logout'])) {
    // Insérez ici le code PHP pour effectuer la déconnexion de l'utilisateur
  }
?>    
                    
                    </li>
                </ul>
            </nav>
        </div>
    </header>
 




        <?php

    // include ("./View/1_login.php");
     //include ("./View/3_inscription.php");
     if(!isset($_GET['page']))
     {

        include ("./View/test/Compte/1_login.php");
     }
     else
     {
        include("./View/".$_GET['page']);
     }
        ?>

</body>

</html>