
    <?php
        
        try{
            $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
        } 
        catch (Exception $ex) {
            die('Erreur ; '.$ex->getMessage());
        }
        
        
        // on peut aussi obliger à l'utilisateur à remplir au moins un champ
        // ou les champs qu'on veut. 
        
        if (empty ($_POST['titre']) && empty ($_POST['lieu']) && empty ($_POST['dateEvenement'])) {
            header ('location: ./index.php?page=search-evenements&error=Remplisez au moins un champ');
        }
        
        
        
        
        // requête de base
        
        // on rajoute toutes les conditions pour les valeurs du formulaire qui ne sont pas vides
        $fields= array ('titre', 'lieu', 'dateEvenement');
        $criteres=array();
        
        foreach ($fields as $field){
            if (!empty($_POST[$field])){
                if ($field=="dateEvenement"){
                    $criteres[]="dateEvenement >= :dateEvenement";
                }
                else {
                    $criteres[]=$field."=:".$field;
                }
                $params[$field]=$_POST[$field];
            }
        }
        
        
        $sql="SELECT * FROM evenements ";
        if (count($criteres)>0){
            $sql=$sql."WHERE ".implode (" AND ",$criteres);
        }
        $stmt= $db->prepare($sql);    
        $stmt->execute($params);
        $tableau=$stmt->fetchAll();
        
        if ($tableau){
            
            foreach ($tableau as $row){
                echo $row['titre'].' , '.$row['lieu'].' ,  '.$row['dateEvenement'].'. <br />';
            }
        }
        else {
            echo "Pas de resultats";
            
        }
        $stmt->closeCursor();
        $db=null;


        ?>






