<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>

        
    <body>
        <?php
     
	include '../config/db.php';
        
        try{
            $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
        } 
        catch (Exception $ex){
            die('Erreur');
        }
        
        
        // pas sécurisé
        //$sql="DELETE FROM evenements WHERE id='".$_GET['idEvenement']."'";
        //$db->exec($sql);
        
        // plus sécurisé
        $idEvenement=trim(htmlspecialchars($_GET['idEvenement']));
        $deleteRequete=$db->prepare("DELETE FROM evenements WHERE idEvenement=:idEvenement");
        $deleteRequete->bindParam(":idEvenement", $idEvenement);
        $deleteRequete->execute();
        
        $deleteRequete->closeCursor();
        $db=null;
        header ('location: ../index.php?page=list-evenements');
        ?>
    </body>
</html>
