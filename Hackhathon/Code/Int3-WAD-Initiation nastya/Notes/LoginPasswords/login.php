<?php


session_start();

    
include "./config/db.php";
try{
    
    $email=filter_input (INPUT_POST,'email');
    $pass=filter_input (INPUT_POST, 'pass');
    
    
    try{
        $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
    } 
    catch (Exception $e) {
         die('Erreur');
    }
    
    
    
    $sql= "SELECT pass FROM users WHERE email = :email";
    $statement= $db->prepare($sql);
    $statement->bindValue (':email',$email);
    $statement->execute();
	    
    
    $resultat= $statement->fetchAll (PDO::FETCH_ASSOC);
    
    $motDePasseDB=$resultat[0]['pass'];
    // var_dump ($motDePasseDB);
	// var_dump (password_verify ($pass,$motDePasseDB));
    
    if (password_verify ($pass,$motDePasseDB)===false)
    {
        echo ('<br />Invalid pass');
    }
    else {
        echo "OK!";
    }
    
    
} catch (Exception $ex) {
    
}