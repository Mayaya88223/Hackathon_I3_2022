
        
        <?php

            include '../config/db.php';
            
            try{
                $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
            } 
            catch (Exception $ex) {
                die('Erreur');
            }
            
            $idEvenement=htmlspecialchars(trim($_POST['idEvenement']));
            $titre=htmlspecialchars(trim($_POST['titre']));
            $lieu=htmlspecialchars(trim($_POST['lieu']));
            $dateEvenement=htmlspecialchars(trim($_POST['dateEvenement']));
            
            
            
            // requêtes preparées:
            $statement=$db->prepare("UPDATE evenements SET titre=:titre, lieu=:lieu, dateEvenement=:dateEvenement WHERE idEvenement=:idEvenement ");
            $statement->bindValue(":titre", $titre);
            $statement->bindValue(":lieu", $lieu);
            $statement->bindValue(":dateEvenement", $dateEvenement);
            $statement->bindValue(":idEvenement", $idEvenement);
            $statement->execute();
            
            
            
            
            // enlevez cette ligne pour tester
            header ('location: ../index.php?page=list-evenements');

        ?>

         

