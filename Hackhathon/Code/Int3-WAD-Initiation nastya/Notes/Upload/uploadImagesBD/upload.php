<html>

<body>

	<head>
		<meta charset='UTF-8' />
	</head>
	<?php

	// Cet script décrit comment realiser un UPLOAD
	echo "Array FILES:<BR />";

	foreach ($_FILES as $key => $val) {
		print_r($key);
		echo ":";
		print_r($val);
		echo "<BR />";
	}


	// INFOs BASIQUES SUR LE UPLOAD: http://php.net/manual/fr/features.file-upload.post-method.php

	// Emplacement: Le fichier choisi dans le formulaire a été téléchargé et stocké temporairement dans 
	// le dossier temporaire du système, à moins qu'un autre dossier soit fourni avec la directive upload_tmp_dir du php.ini
	// Attention: le fichier est effacé quand le script finit! On doit le déplacer à un autre dossier avant
	// (ex: "./uploadFolder") la fin de l'execution du script en utilisant la fonction "move_uploaded_file")


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
	// Le code d'erreur associé au téléchargement du fichier. 


	// Afficher le nom du fichier choisi chez le client 
	// (chez certains navigateurs on obtient tout le chemin du fichier)
	print_r($_FILES['userFile']['name']);
	// Afficher le nom du fichier (sans le chemin)
	print_r(basename($_FILES['userFile']['name']));



	// Etape 1:
	// --------
	// Donner un nom et un emplacement (dossier existant) à notre fichier dans le serveur
	// On donne un nom pour le dossier
	$uploadDir = "./img/";
	// On essaie de générer un nom de fichier unique. Ici on concatene déjà le dossier, faites selon vos besoins
	$idUnique = uniqid() . date("Y-m-d-H-i-s");
	$uploadFile = $uploadDir . $idUnique . basename($_FILES['userFile']['name']);

	echo "<br />Nom final du fichier dans le serveur:";
	print_r($uploadFile);

	// Etape 2:
	// --------
	// Déplacer le fichier temporaire et le stocker définitivement dans le serveur
	// (Il peut y avoir de problèmes si on n'a pas le permis d'écriture sur le dossier
	// on peut vérifier si l'upload est possible dans un dossier en utilisant la fonction "is_writable")
	if (move_uploaded_file($_FILES['userFile']['tmp_name'], $uploadFile)) {

		echo "<br /> Ok! fichier uploaded";

		// on écris le fichier dans la BD
		include("./config/db.php");

		try {
			$bdd = new PDO(DBDRIVER . ":host=" . DBHOST . ";port=" . DBPORT . ";dbname=" . DBNAME, DBUSER, DBPASS);
		} catch (Exception $e) {
			die("Erreur de connexion BD!");
		}

		// on stocke le fichier dans la BD
		$stmt = $bdd->prepare("INSERT INTO images (file,type,size) VALUES (:file,:type,:size)");

		$file = $uploadFile; // le nom qu'on a crée
		$type = $_FILES['userFile']['type'];
		$size = $_FILES['userFile']['size'];
		$stmt->bindParam(':file', $file);
		$stmt->bindParam(':type', $type);
		$stmt->bindParam(':size', $size);

		if ($stmt->execute()) {
			echo "<BR />Le fichier est maintenant dans le serveur (uploaded) et ses informations ont été stockées dans la BD.";
			echo "<BR /><a href='./afficherImages.php'>Afficher les images</a>";
		};
	} else {
		echo "<br/>Erreur upload";
	}

	?>
</body>

</html>