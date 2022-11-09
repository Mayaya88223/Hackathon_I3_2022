<?php


// Choisir emplacement
$dossier = "./upload/";
// D'abord créer un nom unique pour éviter les doublons.
$idUnique = uniqid().date ("Y-m-d-H-i-s");
$uploadFile= $idUnique.basename ($_FILES['fichier']['name']);

// Enregistrer le fichier dans l'emplacement. 
if ( move_uploaded_file($_FILES['fichier']['tmp_name'], $dossier . $uploadFile  ) ) { 
  echo json_encode('upload ok'); 
} else { 
  echo json_encode('upload erreur'); 
}


?>