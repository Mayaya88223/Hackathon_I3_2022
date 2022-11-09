<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire 1</title>
</head>
<body>
    Voici un lien tout simple:
    <!-- <a href = "./ex1FormulaireTraitement.php">Aller vers ex1FormulaireTraitement</a><br><br> -->

    Voici un formulaire:<br>
    <form action="./ex2FormulaireTraitement.php" method="POST">
        Nom<input type="text" name="nom"><br>
        Date Naissance<input type="date" name="dateNaissance"><br>
        Hobby<input type="text" name ="hobby"><br>
        <button>Send</button>
    </form>
</body>
</html>