<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        
    </head>
    <body>
      
        <?php
        include '../config/db.php';
        
        try{
           $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
        } 
        catch (Exception $e) {
            die('Erreur');
        }
        
        
        
        // si il y de valeurs vides dans le formulaire, on recharge à nouveau la page du formulaire
        // et on affiche un message d'erreur. 
        // On n'a pas de formulaire dans cette page, alors on envoie une variable "error" 
        // dans la URL. Dans l'autre page on obtient la valeur en utilisant $_GET['error']
        
        
        $valsRemplies=false;
        foreach ($_POST as $key => $value) {
            if (empty($value)){
                $db=null;
                header('location:../index.php?page=insert-evenement&error=Remplissez tous les champs');
            }
            else{
                $valsRemplies=true;
            } 
                
        }

        if ($valsRemplies){
            foreach ($_POST as $key => $value) {
                $$key=htmlspecialchars($value);
            }
            $sql="INSERT INTO evenements SET titre=:titre, lieu=:lieu , description=:description, dateEvenement=:dateEvenement";
            $stmt=$db->prepare($sql);
            
            
            $stmt->bindParam(":titre", $titre);
            $stmt->bindParam(":lieu", $lieu);
            $stmt->bindParam(":description", $lieu);
            $stmt->bindParam(":dateEvenement", $dateEvenement); // attention à insérer un format yyyy/mm/dd
            
//            var_dump($stmt);
            if (!$stmt->execute()){
                echo "<BR />Error:";
                $stmt->closeCursor();
                $db=null;
        
                header('location:../index.php?page=insert-evenement&error=Erreur insertion');

            };
            header ('location: ../index.php?page=list-evenements');
            
        }
        
        
       
        ?>
    </body>
</html>