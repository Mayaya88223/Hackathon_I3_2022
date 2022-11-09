<?php

    $page=htmlspecialchars(trim($_GET['page']));
    if (empty($page)){
       
        header ('location: ./index.php?page=list-evenements');
    }
    include 'config/db.php';
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="js/jquery-1.11.1.min.js" type="text/javascript"></script>
        <script src="js/ui/jquery-ui.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="./css/stylesheet.css" />
        <link href="js/ui/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
        <link href="js/ui/jquery-ui.structure.min.css" rel="stylesheet" type="text/css"/>
        <link href="js/ui/jquery-ui.theme.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/launcher.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="container">
                <?php include './includes/header.php'; ?>
                <?php include './includes/nav.php'; ?>
                <?php include './pages/'.$page.'.php' ?>
                <?php include './includes/footer.php' ?>
        </div>
    </body>
<html>