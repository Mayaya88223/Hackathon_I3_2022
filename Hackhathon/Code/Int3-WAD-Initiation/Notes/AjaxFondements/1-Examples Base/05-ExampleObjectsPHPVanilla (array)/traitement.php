<?php


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

$personne1= new Personne("Dupont","Marie",56);
$personne2= new Personne("Schapira","Isabelle",30);
$personne3= new Personne("Hermant","Margaret",28);

$arrayPersonnes = array ($personne1, $personne2, $personne3);

// encoder des objets php en notation JSON
echo json_encode($arrayPersonnes);




