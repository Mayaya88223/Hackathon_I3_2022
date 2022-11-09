<?php
$personnes = [
				['nom'=>'Pepe',
				'age'=> 25,
				'nationalite'=> 'Japonaise'],
				['nom'=>'Carole',
				'age'=> 30,
				'nationalite'=> 'Française'],
				['nom'=>'Klass',
				'age'=> 40,
				'nationalite'=> 'Belge']
			];
/*				
foreach ($personnes as $index => $unePersonne){
	echo $unePersonne['nom'];
	echo "<br>";
	echo $unePersonne['age'];
	echo "<br>";
}

echo "<br><br>";
foreach ($personnes as $index => $unePersonne){
	
	foreach ($unePersonne as $clePersonne => $valeurPersonne){
		echo $clePersonne." : ";
		echo $valeurPersonne;
		echo "<br>";
		
	}
}
*/
echo "<br><br>";
/*
echo "<table>";
echo "<th>Nom</th>";
echo "<th>Age</th>";
echo "</table>";
*/

echo "<table>";
foreach ($personnes[0] as $clePersonne => $valeurPersonne){
	echo "<th>".$clePersonne."</th>";
}
foreach ($personnes as $index => $unePersonne){
	echo "<tr>";
	foreach ($unePersonne as $clePersonne => $valeurPersonne){
		echo "<td>".$valeurPersonne."</td>";
	}
	echo "</tr>";
	
}
echo "</table>";			

?>