- [Exercices de boucles, arrays, fonctions](#exercices-de-boucles-arrays-fonctions)
- [Exercices de création de fonctions (+arrays)](#exercices-de-création-de-fonctions-arrays)
- [Exercices de fonctions d\'Arrays natives](#exercices-de-fonctions-darrays-natives)


<br>

# Exercices de boucles, arrays, fonctions

<br>

1.  Créez une boucle **for** qui affiche 10 fois \"Bonjour, je suis dans une boucle !\"

2.  Créez une boucle **for** qui affiche les valeurs entre 1 et 100 (incluses)

3.  Créez une boucle **for** qui affiche les valeurs entre 10 et 50 (incluses)

4.  Créez un array **$vals** contenant les valeurs 20,50,7,54

5.  Rajoutez les valeurs 150 et 300 à l\'array précédant (ailleurs de la déclaration de l\'array)

6.  Créez une boucle **foreach** pour afficher l\'array $vals. Créez une boucle **for** pour afficher l\'array **$vals**

7.  Créez une fonction qui reçoit un nom et affiche \"Bonjour (nom)!\". Testez-la avec plusieurs noms

8.  Créez une fonction **afficheTableau** qui reçoit un array et affiche son contenu. Utilisez foreach pour vous faciliter la tâche. Testez-la avec l\'array **$vals**

9.  Créez une fonction qui reçoit un array et renvoie un array inversé

10. Créez une fonction qui reçoit un array et le renverse (l'array
    original **change**, on a besoin d'utiliser une référence)

11. Créez un array associatif $film1 contenant le nom, le genre et le réalisateur d\'un film. Créez $film2 et $film3 contenant les  données d\'autres films

12. Affichez le contenu d\'un des films qu\'on vient de créer en
    utilisant une boucle foreach

13. Créez une fonction **afficheAssoc** qui reçoit un array associatif
    et affiche son contenu en utilisant une boucle foreach. Testez la
    avec l\'array que vous venez de créer

14. Rajoutez une \"dateSortie\" à chacun de films crées en 11)

15. Appelez la fonction **afficheAssoc** que vous avez créé pour voir le
    contenu de chaque film. On devrait voir la dateSortie en plus du
    nom, genre et réalisateur...

16. Effacez le réalisateur du $film1. Affichez le contenu du film1 pour
    vous assurer que le réalisateur n\'est plus là

17. Créez une fonction **soustraction** qui renvoie la soustraction de
    deux valeurs reçues en paramètre. Ex: soustraction (25,15) va
    renvoyer la valeur 10

18. Modifiez la fonction précédente pour que, avant de renvoyer le
    résultat de la soustraction, elle affiche \"Le résultat est
    négatif!\" si ce résultat est négatif

19. Créez une fonction **afficheValeurs** qui affiche tous les entiers
    qui se trouvent entre deux valeurs reçues comme paramètre. Par
    exemple:

```php
afficheValeurs (40,100) affichera toutes les valeurs entre 40 et 100

afficheValeurs (20,80) affichera toutes les valeurs entre 20 et 80

etc...
```

20. Le code suivant nous posera de problèmes. Pourquoi? Qu\'est-ce
    qu\'on peut faire pour l\'arranger?


```php
$i=0;
while ($i<15){
    echo "Salut à tous!".$i;
}
```

21. Le code suivant nous posera de problèmes. Pourquoi? Arrangez-le

```php
$tab= array(4,5,1,7);
for ($i=0;$i\<10;$i++){
    echo $tab\[i\];
}
```

22. Créez un array contenant 5 noms d\'acteurs

23. Créez une fonction **afficheTableau** qui affiche le contenu d\'un
    tableau indexé (pas associatif). Appelez cette fonction pour
    afficher le contenu du tableau d\'acteurs

24. Créez un array associatif contenant de couples personne-âge

25. Affichez le contenu avec une boucle foreach

26. Créez un array contenant le nom de 4 langues

27. Changez le contenu de la position 3 par \"Danois\"

28. Créez une boucle (un for, un foreach et un while) pour afficher le
    contenu de l\'array

29. Amélioriez les boucles for et while précédents en utilisant la
    fonction **count**

30. Effacez l\'element de la position 4 dans l\'array en utilisant la
    fonction **unset**

31. Utilisez la fonction **array\_search** avec deux paramètres pour
    afficher la position d\'un certain élément dans l\'array et
    \"Element pas trouvé\" dans le contraire

32. Créez un array vide $languesCopie. Créez une boucle qui rajoute
    chaque element de l\'array $langues dans l\'array $languesCopie

33. Créez les fonctions suivantes

    a.  **afficher** qui reçoit un array indexé (pas associatif) et
        affiche ses valeurs

    b.  **afficherHTML** qui reçoit un array indexé (pas associatif) et
        construit un petit tableau HTML contenant les valeurs de
        l\'array

    c.  **afficherCase** qui reçoit deux parametres:


34. un array indexé (pas associatif) et affiche ses valeurs

35. un string **$case** contenant le mot \"majuscules\" ou
    \"minuscules\"

La fonction afficherCase doit afficher les valeurs de l\'array en
majuscules ou minuscules selon la valeur du paramètre $case. Pour ce
faire, regardez la documentation des fonctions **strtoupper** et
**strtolower**

36. Nous avons besoin d'un système qui puisse choisir aléatoirement le nom d'un élève.
Les noms se trouvent dans un array, et à chaque fois qu'on recharge la page on obtient un nouveau nom.
Tous les noms doivent être choisis avant d'en répéter un choix.


<br>

# Exercices de création de fonctions (+arrays)

1.  Développez une fonction qui crée un array de 25 entiers aléatoires
    (utilisez mt\_rand) et l\'affiche

2.  Modifiez la fonction précédente pour qu\'elle puisse recevoir le
    nombre de valeurs qui contient l\'array

3.  Développez une fonction capable de créer un array de 25 entiers
    aléatoires (utilisez rand) et le renvoyer. Testez-la.

4.  Développez une fonction capable de créer un array d\'un nombre
    aléatoire de valeurs (entre 20 et 40) et le renvoie. Affichez son
    contenu dans le script principal, ainsi que le nombre d\'éléments de
    l\'array

5.  Créez une fonction qui reçoit un array associatif et affiche son
    contenu dans un tableau HTML

6.  Créez une fonction qui reçoit un array associatif et renvoie un
    nouvel array contenant uniquement ses clés

7.  Modifiez l\'exercice précédent pour que la fonction renvoie un array
    contenant les clés tries par ordre alphabétique

8.  Créez une fonction qui reçoit un array associatif et renvoie un
    nouvel array contenant uniquement ses valeurs

<br>

# Exercices de fonctions d\'Arrays natives
<br>

1.  Affichez les chiffres pairs entre 0 et 100. Affichez les chiffres
    impairs entre 0 et 100

2.  Affichez un tableau HTML contenant trois colonnes : la première
    contient de chiffres pairs, la deuxième de chiffres impairs et la
    troisième de chiffres aléatoires entre 0 et 100 (fonction **rand**,
    voir la documentation PHP sur le net). Créez les en-têtes pour les
    colonnes

3.  Créez un array contenant les chiffres pairs entre 0 et 100 en
    utilisant

    -   Une boucle for

    -   Une boucle while

4.  Créez un array d\'un nombre aléatoire d\'entiers (min. 10 valeurs et
    max. 30 valeurs).

Affichez l\'array et le nombre d\'éléments de l\'array.

5.  Utilisez **array\_slice** pour créer un nouveau tableau contenant
    les 10 premières valeurs de l\'array précédant (array\_slice
    n\'efface pas des valeurs de l\'array original)

6.  Triez les éléments de l\'array en utilisant la fonction **sort**.
    Comment est-ce qu\'on pourrait trier les valeurs en ordre descendant
    ? Cherchez la fonction dans la documentation de PHP. Quel type
    d\'array vous avez utilisé, indexé ou associatif ?

7.  Créez un array associatif contenant des pays-capitales. Affichez son
    contenu en utilisant foreach

8.  Rajoutez deux nouveau pays à votre array et imprimez son contenu en
    utilisant **print\_r**

9.  Faites la même chose en utilisant array\_push()

10. Triez l\'array en utilisant **asort**. Pourquoi ce n\'est pas une
    bonne idée d\'utiliser **sort** dans ce cas ?

11. Trouvez la fonction pour trier l\'array par pays au lieu de par
    villes

12. Créez une boucle pour afficher un tableau HTML contenant les pairs
    ville-pays. Les villes s\'afficheront en gras

13. Utilisez la fonction **array\_slice** pour extraire les trois
    premiers pays de votre array et les stocker dans un nouvel array

14. Créez un array pour stocker les informations d\'un mp3 (nom, auteur,
    style, durée).

Créez plusieurs \"morceaux\" de cette manière

15. Créez une boucle capable d\'afficher les infos d\'un morceau dans un
    tableau HTML

16. Créez un array bidimensionnel $disque contenant les morceaux que
    vous venez de créer

17. Rajoutez un nouveau morceau au disque

18. Utilisez **array\_slice** pour extraire les deux premiers morceaux

19. A partir de l\'array de l\'exercice 4, utilisez **array\_slice**
    pour

    -   Eliminer les valeurs à partir de la vingtième position de
        l\'array

    -   Insérer les valeurs 99 et 100 juste avant la 5ème position de
        l\'array

    -   Remplacer les valeurs dans les positions 2 et 3 par 2000 et 3000

Utilisez print\_r pour vous assurer que les résultats sont corrects

20. Utilisez la fonction **explode** pour transformer un string
    contenant de valeurs séparées par virgules en un array

21. Utilisez la fonction **implode** pour créer un string à partir des
    valeurs d\'un array

22. Utilisez la fonction **array\_merge** pour fusionner deux arrays

23. Créez un array vide $hobbies

-   Rajoutez des hobbies au tableau

-   Affichez le tableau

    1.  Avec print\_r

    2.  Avec var\_dump

    3.  Avec une boucle foreach

    4.  Avec une boucle for

    5.  Avec une boucle while

    6.  Avec une boucle for en utilisant la fonction **count**

    7.  Avec une boucle while en utilisant la fonction **count**

    8.  En commençant par le dernier élément avec un while (utilisez
        aussi **count**)

24. Créez un array associatif $acteur1 contenant les couples

Nom -- Van Damme

Prenom -- Jean Claude

-   Rajoutez le couple clé-valeur \"Nationalité -- Belgique\" au tableau
    $acteur1

-   Affichez le tableau $acteur1 en utilisant un boucle foreach qui

    1.  affiche les clés (Nom, ....) et les valeurs de l\'array (Van
        Damme...)

    2.  affiche uniquement les clés de l\'array

    3.  affiche uniquement les valeurs de l\'array

-   Rajoutez quelques acteurs qui vous aimez bien au tableau

-   Affichez le tableau

    1.  Avec print\_r

    2.  Avec une boucle foreach en affichant uniquement les valeurs (Van
        Damme, Jean Claude, Belgique) de l\'array

    3.  Avec une boucle for

    4.  Avec une boucle while

    5.  Avec une boucle for en utilisant la fonction **count**

    6.  Avec une boucle while en utilisant la fonction **count**

    7.  En commençant par le dernier élément avec un while (utilisez
        aussi **count**)

25. La fonction **array\_map** nous permet d\'appliquer une fonction
    (\"callback\") de notre choix à chaque élément de l\'array (cherchez
    vous-mêmes la documentation de cette fonction).

La fonction **reçoit** deux paramètres :

-   Le nom de la fonction qu\'on va appliquer sur chaque élément (qui
    doit être créé préalablement)

-   L\'array sur lequel on veut appliquer la fonction

La fonction **renvoie** :

-   L\'array modifié
