<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        include "./includes/header.php"; 
    ?>
    
    <main>
    <?php
        if (isset($_GET['p'])){
            include "./" . $_GET['p'] . ".php"; 
        }
        else {
            include "./accueil.php";
        }
    ?>
    </main>

    <?php
        include "./includes/footer.php"; 
    ?>

</body>

</html>