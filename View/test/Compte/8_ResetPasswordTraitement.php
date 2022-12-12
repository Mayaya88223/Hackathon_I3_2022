<?php

include "../../../connexion/db.php";
// var_dump ($_POST);

//   // Check if the form has been submitted
//   if (isset($_POST['submit'])) {

//     // Get the email address from the form
//     $email = $_POST['login'];

//     // Check if the email address is valid
//     if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

//       // Connect to the database
//       $db = new mysqli('localhost', 'username', 'password', 'database_name');

//       // Check if the email address exists in the database
//       $result = $db->query("SELECT * FROM utilisateur WHERE login='$login'");
//       if ($result->num_rows == 1) {

//         // Generate a random password
//         $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//         $password = substr(str_shuffle($chars), 0, 8);

//         // Mettre à jour the user's password in the database
//         $result = $db->query("UPDATE utilisateur SET password='$password' WHERE login='$login'");

//         // Envoyer un mail à l'utilisateur avec leur nouveau mot de passe
//         $to = $login;
//         $subject = 'Nouveau Mot de passe';
//         $message = "Votre nouveau mot de passe est : $password\n\nVeuillez vous connecter et changer votre mot de passe dès que possible.";
//         mail($to, $subject, $message);

//         // Rediriger l'utilisateur vers la page d'accueil
//         header('Location: ../../../index.php?page=test/compte/1_login.php');
//       } else {
//         // Si l'adresse mail n'existe pas dans la base de données, envoyer un message d'erreur
//         echo 'Erreur: Cette adresse mail est introuvable dans la base de données';
//       }
//     } else {
//       // Si l'adresse mail est invalide, envoyer un message d'erreur
//       echo 'Erreur: Cette adresse mail est invalide.';
//     }
//   }

  ?>
