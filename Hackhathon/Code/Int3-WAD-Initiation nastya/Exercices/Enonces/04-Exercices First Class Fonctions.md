# Exercices


1. Créer une fonction anonyme qui reçoit un string et renvoie le string en minuscules (utilisez strtolower)
2. Créer une fonction anonyme qui reçoit un string et renvoie le string en majuscules (utilisez strtoupper)
3. Créer un array contenant ces deux fonctions
4. Faites appel à ces deux fonctions en utilisant l'array. Une ligne pour chaque appel.
5. Faites une boucle qui parcourt l'array en faisant appel à chaque fonction dans l'array
6. Rajoutez une nouvelle fonction dans l'array qui met en majuscules uniquement la première lettre (utilisez uc_first)
7. Créez une fonction "caller" capable de lancer une fonction reçue en paramètre et l'appliquer à un string.

    **Ex:** "caller" reçoit la fonction **to_lower**, l'applique à un string fixe (une variable dans la fonction **caller**) et affiche le résultat 

    Utilisez array_map pour que **caller** fasse appel à tous les fonctions de votre array (déjà crée dans les exercices précédents) 

8.  Créer une fonction anonyme qui calcule la somme de deux valeurs
9.  Créer une fonction anonyme qui calcule la multiplication de deux valeurs
10. Créer un array contenant ces deux fonctions
11. Faites appel à ces deux fonctions en utilisant l'array

12. Utilisez array_map pour faire la somme de deux arrays
```php
$arr1 = [10,20,30];
$arr2 = [100,200,300];

// on veut
$res = [110,220,330]; // la somme
```
13. Faites une boucle qui parcourt l'array en faisant appel à chaque fonction dans l'array
14. Rajoutez une nouvelle fonction dans l'array qui calcule la soustraction

15. Regardez la doc d'array_filter. Utilisez cette fonction pour filtrer cet array d'années :

```php
$arr = [1980,1990,2010,2011,2012,2013];
```
On veut un nouvel array contenant uniquement les valeurs > 2000.


16. Nous avons un array contenant de données des citoyens de Bruxelles :
```php
$personnes = [

['nom' => 'Marwa',
'annee' => 2000],
['nom' => 'Anaïs',
'annee' => 1998],
['nom' => 'Gina',
'annee' => 2002],
['nom' => 'Jude',
'annee' => 1997],

]
``` 
Utilisez array filter pour obtenir les personnes qui sont nées après l'année 2000.