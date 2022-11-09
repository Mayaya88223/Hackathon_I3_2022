<?php

// fonction normale bonjour
function bonjour ($nom){
	print ("<br/>Bonjour ".$nom."!");
}
bonjour ("Melinda");

// fonction anonyme stockée dans une variable : car le langage traite les fonctions
// comme membres "first class" du langage
$direBonjour = function ($nom){ 
	print ("<br/>Bonjour ".$nom."!"); 
};
$direBonjour("Melinda");

// un autre exemple, même situation
$addition=function ($val1,$val2){
	print ("<br/>L'addition est: ".($val1+$val2));
};
$addition(50,60);

// un autre exemple, même situation avec return
$additionRet=function ($val1,$val2){
	return($val1+$val2);
};
$res=$additionRet(50,60);
print ("<br/>L'addition est: ".$res);

// fonction anonyme qui utilise une variable en 
// dehors de sa portée 
// elle "capture" l'état de l'environnement où elle se trouve,
// elle devient une "closure"
$max=10;
$tableMult = function ($chiffre) use ($max){
	// $max n'est pas accéssible si on n'utilise pas "use". Pas besoin en JS
	for ($i=0;$i<=$max;$i++){
		print ("<br/>La multip de ".$chiffre."x".$i."=".($chiffre*$i));
	}	
};
$tableMult(5);

// L'évolution normale de ce genre de fonctions est de se retrouver
// dans une autre fonction:
// fonction qui génére de fonctions qui affichent des tableaux
// de multiplication. Voir l'utilisation pour mieux comprendre
$genTables = function ($maxVals): callable{ 
    return (function ($chiffre) use ($maxVals): void {
        // $max n'est pas accéssible si on n'utilise pas
        // "use". Pas besoin d'use en JS
        for ($i=0;$i<=$maxVals;$i++){
            print ("<br/>La multip de ".$chiffre."x".$i."=".($chiffre*$i));
        }
        print ("<hr>");	
    });
};

// utilisation

// tables de 5 valeurs
$multMax5 = $genTables(5); // dans cet appel, la fonction utilise la valeur de la variable $max
$multMax5 (3); // pour le chiffre 3, 5 valeurs
$multMax5 (7); // pour le chiffre 3, 5 valeurs

// tables de 10 valeurs
$multMax5 = $genTables(10); // dans cet appel, la fonction utilise la valeur de la variable $max
$multMax5 (2); // pour le chiffre 3, 5 valeurs
$multMax5 (4); // pour le chiffre 3, 5 valeurs









// fonction qui echange les valeurs de deux variables
// qui se trouvent en dehors de sa portée, juste un exemple théorique
$x=50;
$y=100;

$echange= function () use (&$x,&$y){
	$temp=$x;
	$x=$y;
	$y=$temp;
	print ("Salut");
};

$echange();
print ("<br/>Les valeurs échangées sont: ");
print ("x: ".$x." ; "."y: ".$y);

// Le fait de stocker de fonctions dans de variables 
// donne beacoup de souplesse au langage
// On peut, para exemple, créer un array de fonctions

