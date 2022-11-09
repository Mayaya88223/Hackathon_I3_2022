<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div>
            <form action="./process/traitement-insert.php" method="POST">
                <label for="titre">Titre</label>
                <input type="text" name="titre" /><br />
                <label for="lieu">Lieu</label>
                <input type="text" name="lieu" /><br />
                <label for="description">Description</label>
                <input type="text" name="description" /><br />
                <label for="dateEvenement">Date</label>
                <input type="date" name="dateEvenement" /><br />
                <input type="submit" name="submit-insert" value="Confirmer" />
            </form>
        </div>
        
        
        <?php
            
           if( !empty($_GET)){
                if(!empty($_GET['error'])){
                    echo "<p style='color: red;'>".$_GET['error']."</p>";
                }
            }
        ?>
    </body>
</html>