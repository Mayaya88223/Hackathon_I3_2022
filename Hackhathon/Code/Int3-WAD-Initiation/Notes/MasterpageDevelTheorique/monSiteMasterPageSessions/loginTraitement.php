<?php
// prémiere ligne du script, pour accéder à la session
session_start();

// 1. Récuperer le login $_POST['login'] et le mot de pass
$login = $_POST['login'];
$password = $_POST['password'];

// 2. Chercher le login dans la BD et obtenir son password
// FAKE
$fakeLogin = "wad";
$fakePassword = "wad";

// 3. Comparer le password reçu du formulaire avec le password de l'user obtenu de la BD
if ($login == $fakeLogin && $password == $fakePassword) {
    // 4. Si ok, aller vers l'accueil
    // après avoir mis le login dans la session
    $_SESSION ['loginConnecte'] = $login;
    header('location: ./index.php');

} else {
    // 5. Si pas ok, aller vers la page de login en envoyant un message dans la URL
    header('location: ./login.php?error=badPass');
}
?>
