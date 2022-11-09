<!DOCTYPE html>
<html>
		
		
	    <div>
            <form action="./index.php?page=traitement-search" method="POST">
                <label for="titre">Titre</label>
                <input type="text" name="titre" /><br />
                <label for="lieu">Lieu</label>
                <input type="text" name="lieu" /><br />
                <label for="dateEvenement">À partir de</label>
                <input type="text" name="dateEvenement" /><br />
                <input type="submit" name="" value="Confirmer" />
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