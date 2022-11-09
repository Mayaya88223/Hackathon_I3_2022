<?php
// exemple 4

class Personne{
    public $nom;
    public $prenom;
    public $age;
    
    
    function __construct($nom, $prenom, $age) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
    }
    
}
// on crée un objet en PHP et en l'encode en JSON, ça sera un objet en javascript
$personne1= new Personne("Dupont","Marie",56);
echo json_encode($personne1);



