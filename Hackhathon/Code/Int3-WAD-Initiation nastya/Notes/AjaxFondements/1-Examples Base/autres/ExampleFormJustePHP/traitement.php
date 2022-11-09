<html>
<head>
<meta charset="utf-8">
</head>
<body>

<?php

echo "Le nom est: ".$_POST['nom'];
echo "<br>";
echo "Le prenom est: ".$_POST['prenom'];

if (strlen($_POST['nom'])<3){
	echo "<h3>Le nom est trop court!";
}

?>
</body>
</html>
