<?php


$array1=[40,60,70];

// fonction qui affiche un array
function afficherArray($unArray){
	foreach ($unArray as $val){
		var_dump ($val);
		print("<br/>");
	}
}
afficherArray($array1);


// fonction qui parcourt un array
// en appliquant une autre fonction reçue en paramétre
function parcourirArray($unArray, $callback){
	foreach ($unArray as $val){
		$callback($val);
	}
}

// fonction qui agit sur UN élément
function afficheElement($elem){
	print ("L'élément est: ".$elem."</br>");
}

// fonction qui agit sur UN élément
function afficherFois10($unVal){
	print ("<br/>".$unVal*10);
}

// Appel à la fonction qui parcourt l'array :
// on lui envoie la fonction (callback) qui agit sur un élément en paramètre
parcourirArray($array1,"afficheElement");

// Ici on fait pareil
// Appel à la fonction qui parcourt l'array :
// on lui envoie la fonction (callback) qui agit sur un élément en paramètre
print ("<br/>Afficher toutes les valeurs *10");
parcourirArray($array1,"afficherFois10");


function afficheTVAC($unVal){
	print ("<br/>".$unVal*1.21);
}
// encore pareil ici :)
print ("<br/>Afficher toutes les valeurs TVAC");
parcourirArray($array1,"afficheTVAC");


function afficherPlusGrand50($val){
	if($val>50){
		print ("<br/>".$val);		
	}
}
print ("<br/>Afficher toutes les valeurs plus grandes que 50");
parcourirArray($array1,"afficherPlusGrand50");


// parcourir en lançant deux callbacks!
$arrayVilles=["Bruxelles","Paris","Londres"];
function parcourirArrayDoubleCallback ($unArray, $callback1,$callback2){
	foreach ($unArray as $val){
		$callback1($val);
		$callback2($val);
	}
}

function afficheMayuscules($val){
	print ("<br/>".strtoupper($val));
}
function afficheTroisPremieresLettres($val){
	print ("<br/>".substr($val,0,3));
}
parcourirArrayDoubleCallback($arrayVilles,"afficheMayuscules","afficheTroisPremieresLettres");





