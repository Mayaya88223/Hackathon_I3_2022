<?php

include "./config/db.php";

try {
	$email=filter_input(INPUT_POST,'email', FILTER_VALIDATE_EMAIL);
    if (!$email){
        throw new Exception ('Invalid mail');
    }
    $pass= filter_input(INPUT_POST,'pass');
    if (!$pass|| mb_strlen($pass)<8){
        throw new Exception ('Le password doit avoir au moins 8 caractères');
    }
        
    $motDePasseHash= password_hash(
                $pass,
                PASSWORD_DEFAULT,
                ['cost'=>12]
            );
   if ($motDePasseHash===false){
       throw new Exception ('Problème hashing');
   }
    try{
        $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
    } 
    catch (Exception $e) {
         die('Erreur');
    }
    
    
    $sql= "INSERT INTO users (nom, email, pass) VALUES (:nom,:email,:pass)";
    $statement= $db->prepare($sql);
    
    //var_dump ( $db->errorInfo());
    
    $statement->bindValue (":nom",$nom);
    $statement->bindValue (":email",$email);
    $statement->bindValue (":pass",$motDePasseHash);
    
    if ($statement->execute()){
        echo "<BR/>Inscription reussie";
    }
    else {
        var_dump ( $db->errorCode());
    }
}
catch (Exception $e){
    header ('HTTP/1.1 400 Bad Request');
    echo $e->getMessage();
}
?>