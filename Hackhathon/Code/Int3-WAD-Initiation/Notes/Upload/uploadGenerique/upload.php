<?php 

print_r ($_FILES);

// INFOs BASIQUES SUR LE UPLOAD: http://php.net/manual/fr/features.file-upload.post-method.php



// Emplacement: Le fichier téléchargé sera stocké temporairement dans 
// le dossier temporaire du système, à moins qu'un autre dossier soit fourni avec la directive upload_tmp_dir du php.ini
// Attention: le fichier est effacé quand le script finit! On doit le déplacer à un autre dossier 
// (ex: "./uploadFolder") en utilisant la fonction "move_uploaded_file")


// $_FILES['userFile']['name']
// Le nom original du fichier, tel que sur la machine du client web. 

// $_FILES['userFile']['type']
// Le type MIME du fichier, si le navigateur a fourni cette information. Par exemple, cela pourra être "image/gif". 
// Ce type mime n'est cependant pas vérifié du côté de PHP et, donc, ne prend pas sa valeur pour se synchroniser. 

// $_FILES['userFile']['size']
// La taille, en octets, du fichier téléchargé. 

// $_FILES['userFile']['tmp_name']
// Le nom temporaire du fichier qui sera chargé sur la machine serveur. 

// $_FILES['userFile']['error']
// Le code d'erreur associé au téléchargement de fichier. 

print_r( basename ($_FILES['userFile']['name']));
print ("<br/>");
print_r($_FILES['userFile']['name']);
print_r("<br/>Contenu de FILES: ");
print_r ($_FILES);

// On doit déplacer le fichier temporaire dans un dossier du serveur 

// 1. créer le nom du fichier
$uploadDir = "./uploadFolder/";
$uploadFile= $uploadDir.basename ($_FILES['userFile']['name']);

print_r($uploadFile);
// 2. le déplacer dans le dossier définitif
if (move_uploaded_file($_FILES['userFile']['tmp_name'], $uploadFile)){
 echo "<BR/>Ok! fichier uploaded";
}
else {
	echo "<BR/>Erreur upload";	
}





?>
