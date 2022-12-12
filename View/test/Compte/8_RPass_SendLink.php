<?php

// Vérifie si le formulaire de réinitialisation de mot de passe a été soumis
if (isset($_POST['reset-password-submit'])) {
  
  // Récupère l'adresse email saisie dans le formulaire
  $email = $_POST['email'];
  
  // Vérifie si l'adresse email est valide
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    // Vérifie si l'adresse email existe dans la base de données
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      // Affiche un message d'erreur si la requête SQL échoue
      echo "Erreur SQL!";
    } else {
      mysqli_stmt_bind_param($stmt, "s", $email);
      mysqli_stmt_execute($stmt);
      $result = mysqli_stmt_get_result($stmt);
      if (mysqli_num_rows($result) > 0) {
        // Si l'adresse email existe, génère un jeton de réinitialisation de mot de passe et l'envoie à l'utilisateur par email
        $token = bin2hex(random_bytes(50));
        $sql = "INSERT INTO password_reset (email, token) VALUES (?, ?)";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
          // Affiche un message d'erreur si la requête SQL échoue
          echo "Erreur SQL!";
        } else {
          mysqli_stmt_bind_param($stmt, "ss", $email, $token);
          mysqli_stmt_execute($stmt);
          // Envoie l'email à l'utilisateur avec le lien de réinitialisation de mot de passe
          $to = $email;
          $subject = "Réinitialisation de votre mot
