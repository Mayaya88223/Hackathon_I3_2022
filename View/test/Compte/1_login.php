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
                        <a href="#">Pas de compte ? S'inscrire ici.</a>
                        <a href="#">Mot de passe oublié ?</a>
                    </div>
                </div>
                </div>
        </div>


    </section>
            