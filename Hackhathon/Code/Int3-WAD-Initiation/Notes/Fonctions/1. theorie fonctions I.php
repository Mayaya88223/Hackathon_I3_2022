<?php

declare(strict_types=1);


// Dans ce fichier on montre plein d'exemples des fonctions et leur utilisation

// une fonction sans parametres
function bonjour(): void
{
	echo "bonjour!";
}

// et son appel:
bonjour();



// une fonction qui reçoit un parametre
function bonjourPerso(string $nom): void
{
	echo "bonjour " . $nom . "!";
}


// et son appel:
bonjourPerso("Ismael");
$unNom = "Lola";
bonjourPerso($unNom);



// une fonction qui reçoit deux parametres et fait une operation avec eux
// (ex: afficher l'aire d'un rectangle). Pas de return.
function calculeAire(int $largeur, int $hauteur): void
{
	$aire = $largeur * $hauteur;
	echo "L'aire est: " . $aire;
}

// et son appel:
calculeAire(20, 10);



// une fonction qui reçoit deux parametres et RENVOIE une valeur
// qu'on peut utiliser dans le code principal
// ex: calculer l'aire d'un rectangle et le renvoyer (return)
// au code principal
function calculeAire2(int $largeur, int $hauteur): int
{
	$aire = $largeur * $hauteur;
	return $aire;
}
// et son appel:
// 1. Stocker la valeur renvoyée dans une variable
$aire1 = calculeAire2(5, 10);
// 2. L'utiliser selon mes besoins (ex: afficher)
echo "L'aire est: " . $aire1;

// ex: la mettre dans un array
$aire2 = calculeAire2(10, 20);
$aire3 = calculeAire2(5, 5);

$aires = [$aire1, $aire2, $aire3];
$aires2 = [calculeAire2(10, 20), calculeAire2(50, 20), calculeAire2(10, 40)];


// une fonction qui crée un nouvel array et le renvoie (pas d'affichage)
function fois2(array $arr): array
{
	$nouvelArray = [];
	foreach ($arr as $val) {
		$nouvelArray[] = $val * 2;
	}
	return $nouvelArray;
}
$unArray = [4, 4, 3, 3];
$arrayFois2 = fois2($unArray);





// voici une fonction qui crée de sauts à la ligne
function br(int $nombreBr): void
{
	for ($i = 0; $i < $nombreBr; $i++) {
		echo "<br />";
	}
}
// fonction qui genere un tableau HTML
// d'une seule ligne. Le nombre 
// de colonnes est reçu en parametre
// et chaque cellule contient une valeur
function monTableau1(int $nombreColonnes): void
{
	echo "<table>";
	echo "<tr>";
	for ($i = 1; $i <= $nombreColonnes; $i++) {
		echo "<td>" . $i . "</td>";
		// pour avoir de valeurs aléatoires
		// echo "<td>".rand(0,60)."</td>"; 
	};
	echo "</tr>";
	echo "</table>";
}

// afficher la table de multiplication 
// dans un tableau HTML. Valeur en parmetre.
function tableMult(int $val, int $max): void
{
	echo "<table border='1'>";
	echo "<tr>";
	for ($i = 1; $i <= $max; $i++) {
		echo "<td>" . $i . "</td>";
	}
	echo "</tr>";
	echo "<tr>";
	for ($i = 1; $i <= $max; $i++) {
		echo "<td>" . $i * $val . "</td>";
	}
	echo "</tr>";
	echo "</table>";
}

// fonction qui affiche le contenu d'un array 
// reçu en parametre avec echo
function afficheArray(array $tableau): void
{
	foreach ($tableau as $val) {
		echo "<br>" . $val;
	}
}

// fonction qui affiche le contenu d'un array
// (associatif) reçu en parametre avec echo
function afficherTableauAssociatif(array $tableau): void
{
	foreach ($tableau as $key => $val) {
		echo "La specialité de " . $key;
		echo " est " . $val . "<br />";
	}
}
