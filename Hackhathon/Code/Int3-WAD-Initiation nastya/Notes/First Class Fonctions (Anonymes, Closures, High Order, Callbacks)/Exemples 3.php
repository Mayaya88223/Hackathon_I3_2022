<?php
// fonction pour parcourir l'array
function parcourirArray($unArray,$callback){
	foreach ($unArray as $val){
		$callback ($val);
	}
	
}
// fonction callback nommée, pas mise dans une variable
function fois2($val){
	print ("<br/>".($val*2));
}

$arr1=[4,5,6];
parcourirArray($arr1,"fois2");

// fonction callback anonyme
$fois3 = function ($val){
	print ("<br/>".($val*3));
};

print ("<br/><br/>Callback avec fonction anonyme stockée dans une variable (1)");
parcourirArray($arr1, $fois3 );


print ("<br/><br/>Callback avec fonction anonyme 'jetable' (2) ");
// Observez les similarités avec JS (ex: addEventListener ("blablabla", function (){}))
parcourirArray($arr1,function ($val){
	print ("<br/>".($val*4));
});

// Exercice: Faire un callback capable de calculer 
// la somme des éléments d'un array.
// (Vous devez utiliser "use")
print ("<br/><br/>Callback avec fonction anonyme et use. ");
print ("C'est necessaire quand on veut accèder a une variable ");
print ("qui ne se trouve pas dans la portée de la fonction");
$total=0;
parcourirArray($arr1,function($val) use (&$total){
	$total=$total+$val;	
});
print ("<br/>Le total est: ".$total);



print ("<br/><br/>Callback avec fonction anonyme et use dans une autre fonction");
print ("<br/>Pour simplifier l'appel.");
function calculerSomme ($unArray){
	$total=0;
	parcourirArray($unArray,function($val) use (&$total){
		$total=$total+$val;	
	});
	return ($total);
}

$maSomme=calculerSomme($arr1);
print ("<br/>La somme est: ".$maSomme);

// utilisation d'array_map
print ("<br/><br/>Array_map avec fois2");
array_map ("fois2",$arr1);

print ("<br/><br/>Array_map avec fonction anonyme");
array_map(function($val){
		print ("<br/>".$val);
},$arr1);

print ("<br/><br/>Array_map avec fois3");
array_map ($fois3,$arr1);

print ("<br/><br/>Array_map avec plusieurs arrays");
function fois2V2($val1,$val2,$val3){
	print ("<br/>".($val1*2));
	print ("<br/>".($val2*2));
	print ("<br/>".($val3*2));
}
array_map ("fois2V2",[4,5,8],[20,30,50],[-4,-6,8]);

// array_map peut renvoyer un array 
// contenant les éléments de l'array original une 
// fois qu'on a appliqué le callback sur chaque élément
function rajouteTva($val){
	$prixTvac= $val*1.21;
	return ($prixTvac);
}

print ("<br/><br/>");
$tabTvac=array_map ("rajouteTva",[100,200,300]);
print_r($tabTvac);

// addition de deux tableaux en utilisant un callback
function additionner($val1,$val2){
	return ($val1+$val2);	
}
$addition=array_map ("additionner",[10,20,30],[50,30,50]);
print_r($addition);

// Exercice: vous avez cet array:
// ["Marie","Laure","Samiha","Stella","Melissa"]
// utilisez array map et un callback pour 
// transformer tous les noms en majuscules




