- [First Class Functions](#first-class-functions)
- [1. Fonction Anonyme](#1-fonction-anonyme)
- [2. High Order Function](#2-high-order-function)
- [3. Callback](#3-callback)
- [4. Closure](#4-closure)

<br>

# First Class Functions

On dit que dans un langage les fonctions sont **First Class Fonctions** si le langage les traite tels que "citoyens de première classe". Cela veut dire que les **fonctions** seront traitées de la même manière que le reste de types de variable (ex: float, string, Object).

La concrétisation de ce traimement implique qu'un fonction pourra être :
- **stockée** dans une variable
- **envoyée en paramètre** à une autre fonction/méthode
- **renvoyée** dans un return

**First Class Function** est alors juste un traitement qu'on donne aux fonctions.
Il y a plusieurs concepts très importants liés à ce traitement, on va les étudier ici.


<br>

# 1. Fonction Anonyme

Fonction qui ne porte pas de nom. Elle peut être stockée dans une variable, envoyée en paramètre ou renvoyé dans un return

Ex. 1: stockée dans une variable

```php
// anonyme stockée dans une var. Ré-utilisable dans le code

$maFonction = function (){
    echo "Vive la vie";
};

$maFonction();
.
.
.
$maFonction();
.
.
.
```
Ex. 2: envoyée en paramètre
```php

$unArray = ["nom", "prénom", "adresse"];

// lisez la doc d'array_map!

$unArray = array_map (function ($val) {
    // met la valeur reçue en majuscules et le renvoi
    return (ucfirst($val));
}, $unArray);

print_r($unArray);

``` 
On aurait pu créer la fonction d'abord, puis la mettre dans une variable et puis faire appel à array_map:
```php

$unArray = ["nom", "prénom", "adresse"];
$capitalize = function ($val) {
    // met la valeur reçue en majuscules et le renvoi
    return (ucfirst($val));
};

// lisez la doc d'array_map!
$unArray = array_map ($capitalize, $unArray);

print_r($unArray);
``` 

Ex. 3.1: renvoyée dans un return. La fonction renvoyée ne renvoie rien

```php
    function generateurAffiche (){
        return (function ($msg):void {
            echo "<br>Je suis la nouvelle fonction et j'affiche ". $msg;
        });
    }
    echo "<br><br><br>";
    $fn = generateurAffiche(); // me renvoie une fonction
    $fn ("Alice");
    $fn ("Julie");
``` 
Ex. 3.2: renvoyée dans un return. La fonction renvoie quelque chose
```php
    function generateurCalcul (){
        return (function ($v1 , $v2): int{
            return $v1 + $v2;
        });
    }
    echo "<br><br><br>";
    $fn = generateurCalcul();
    $somme = $fn (100,200);
    echo "<br>La somme est : ". $somme;

```


Ex. 3 bis: renvoyée dans un return 

```php
function generateurCalculateurSurfaces(string $nomFigure): callable
{
    // cette fonction crée une fonction qui sera renvoyée
    // pour être utilisée plus tard


    switch ($nomFigure) {
        case "carre":
            return (function (float $cote): float {
                return $cote * $cote;
            });
            break;
        case "cercle":
            return (function (float $rayon): float {
                return pi() * pow($rayon, 2); // pow est la puissance
            });
            break;
        default:
            return null;
    }
}

$calculatriceCarres = generateurCalculateurSurfaces("carre");
echo "<br>Surface de ma chambre (carre): ";
echo $calculatriceCarres(3.5);
echo "<br>Surface d'une autre chambre (carre): ";
echo $calculatriceCarres(12.3);

$calculatriceCercles = generateurCalculateurSurfaces("cercle");
echo "<br>Surface d'un disque de vinyl: ";
echo $calculatriceCercles(15);
```

Ces trois caracteristiques peuvent apparaitre simultanéement.

<br>

# 2. High Order Function 

C'est une fonction qui réalise une ou plusieurs de ces taches:

**1. prendre une (ou plusieurs) d'autres fonctions en paramètre**

**2. renvoyer une fonction comme valeur de retour (return)**

Exemples: map en JS, array_map en php, filter et reduce en JS .... 

Les fonctions d'ordre supérieur sont massivement utilisées dans la programmation fonctionnelle. 

<br>

# 3. Callback 

Fonction qu'on passe à une autre fonction pour qu'elle soit executée (de façon synchrone ou asynchrone)
On les a déjà utilisées systematiquement dans ce document.

<br>

# 4. Closure

Fonction anonyme qui utilise une variable qui a été créé en dehors de sa portée, elle "capture" l'état de l'environnement où elle se trouve

```php

// générer h1, h2, ....
$genHeader = function (string $texte, string $taille){
    echo "<".$taille .">". $texte . "<". $taille .">";
};

$genHeader ("du vin!","h1");
$genHeader ("de l'eau!","h1");
$genHeader ("du riz!", "h4");
$genHeader ("fromage", "h4");

// on pourrait aller plus loin et générer des fonctions spécifiques pour chaque header
// en utilisant une closure
function generateurFonctionHeader ($taille):callable {
    
    // la closure est celle-ci, pas la fonction externe
    $fn = function (string $texte) use ($taille) {
            echo "<".$taille .">". $texte . "<". $taille .">";
        
    };
    return $fn;
}

$h1 = generateurFonctionHeader("h1");

$h1 ("du vin"); 
            // on ne doit plus indiquer la taille, car elle a été definie 
            // quand on appelle le generateur.
            
            // on gagne dans les appels avec notre fonction personnalisée.
            // Et plus la fonction a de paramètres à definir dans le générateur
            // (ici la $taille uniquement, mais on aurait pu rajouter la couleur)
            // plus on gagnera dans les appels sucessives comme celle-ci 
$h1 ("de l'eau");

$h4 = generateurFonctionHeader("h4");
$h4 ("du riz");
$h4 ("fromage");




```


```php
<?php
// fonction qui génére de fonctions qui affichent de tableau
// de multiplication. Voir l'utilisation pour mieux comprendre
$genTables = function ($maxVals): callable{ 
    return (function ($chiffre) use ($maxVals): void {
        // $max n'est pas accéssible si on n'utilise pas
        // "use". Pas besoin d'use en JS
        for ($i=0;$i<=$maxVals;$i++){
            print ("<br/>La multip de ".$chiffre."x".
                    $i."=".($chiffre*$i));
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
```

<br>



