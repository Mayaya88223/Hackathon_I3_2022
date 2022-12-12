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

<section class="section section--page">
        <div class="hero__inner">
            <div class="hero-left d-flex">
                <img src="./Assets/images/deco/tigre-bleu-lg.svg" alt="tigre-bleu">
            </div>
            <div class="hero-right">
                <h2 class="hero__title">Bienvenue à Shuihu</h2>
                <h4>Apprenez le chinois à travers des jeux amusants !</h4>
                <div class="form__container">
                    <div class="form__top">
                        <form action="./View/test/Compte/2_loginTraitement.php" method="POST" class="form">
                            <div class="form__input">
                                <label for="login" class="label">E-mail:</label>
                                <input type="email" placeholder="Saisissez votre nom d'utilisateur" id="login"
                                    name="login" class="input input--text" required="">
                            </div>
                            <div class="form__input">
                                <label for="password" class="label">Mot de passe :</label>
                                <input type="text" placeholder="Saisissez votre mot de passe" id="password"
                                    name="password" class="input input--text" required="">
                            </div>

                            <input type="submit" value="Se connecter" class="btn btn--submit">
                            <a href="#" class="link link--submit"></a>
                        </form>
                        <?php
                        if (isset ($_GET['error'])){
                            // traiter les différents types d'erreur
                            switch ($_GET['error']){
                                case "badPass":
                                    echo "<h5>Le pass est incorrecte</h5>";
                                    break;
                            }
                        }
                    ?>
                    </div>
                    <div class="form__bottom">
                        <a href="index.php?page=test/Compte/3_inscription.php">Pas de compte ? S'inscrire ici.</a>
                        <a href="index.php?page=test/Compte/7_ResetPassword.php">Mot de passe oublié ?</a>
                    </div>
                </div>
                </div>
        </div>


    </section>
    </body>

</html>