

<?php
     
        
    try{
        $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
    } 
    catch (Exception $ex) {
        die('Erreur ; '.$e->getMessage());
    }
    
    $url="<script>http://cuca.org</script>";
    var_dump ($_GET['idEvenement']);
    $correctId= filter_input(INPUT_POST, 'idEvenement', FILTER_VALIDATE_INT);
    
    var_dump($correctId);
            
    $sql="SELECT * FROM evenements WHERE idEvenement=:idEvenement";
    $statement= $db->prepare($sql);
    $statement->bindValue(":idEvenement",  filter_input(INPUT_GET,'idEvenement'),PDO::PARAM_INT);
    $statement->execute();
    
    $rows=$statement->fetchAll(PDO::FETCH_ASSOC);
    $idEvenement=$rows[0] ['idEvenement'];
    $titre=$rows[0] ['titre'];
    $lieu=$rows[0] ['lieu'];
    $dateEvenement=$rows[0] ['dateEvenement'];
    var_dump($rows);
?>

<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div>
            <h4>
                Modifiez les données du film
            </h4>
        </div>
        <div>
            <form action="./process/traitement-update.php?idEvenement=<?php echo $id; ?>"  method="POST">
                <input type="hidden" name="idEvenement" value="<?php echo $idEvenement;?>" /><br />
                <label for="titre">Titre</label>
                <input type="text" name="titre" value="<?php echo $titre ?>" /><br />
                <label for="lieu">Lieu</label>
                <input type="text" name="lieu" value="<?php echo $lieu ?>" /><br />
                <label for="dateEvenement">Date</label>
                <input type="date" name="dateEvenement" value="<?php echo $dateEvenement ?>" /><br />
                <input type="submit" name="" value="Confirmer" />
            </form>
        </div>

        <?php
            
        ?>
    </body>
</html>