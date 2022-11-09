
- [Exercices sur les formulaires (I)](#exercices-sur-les-formulaires-i)
- [Exercices sur les formulaires (II)](#exercices-sur-les-formulaires-ii)
  - [Exercice 1 : Génération des éléments d'un formulaire HTML en PHP](#exercice-1--génération-des-éléments-dun-formulaire-html-en-php)
  - [Exercice 2 : Génération des éléments d'un formulaire HTML en PHP](#exercice-2--génération-des-éléments-dun-formulaire-html-en-php)
  - [Exercice 3](#exercice-3)
  - [Exercice 4](#exercice-4)
  - [Exercice 5](#exercice-5)
  - [Exercice 6 : cinéma](#exercice-6--cinéma)
  - [Exercice 7: frais d'essence](#exercice-7-frais-dessence)
  - [Exercice 8: listes déroulantes](#exercice-8-listes-déroulantes)
  - [Exercice 9](#exercice-9)
  - [Exercice 10](#exercice-10)
  - [Exercice 11](#exercice-11)
  - [Exercice 12](#exercice-12)
- [Exercices: Fonctions de base personnalisées](#exercices-fonctions-de-base-personnalisées)
- [Exercices Strings + fonctions de Strings + Formulaires](#exercices-strings--fonctions-de-strings--formulaires)
- [Exercices: Arrays + fonctions Array](#exercices-arrays--fonctions-array)
- [Exercices sur les sessions](#exercices-sur-les-sessions)
- [Exercice sur les BDs](#exercice-sur-les-bds)

<br>


# Exercices sur les formulaires (I)


1.  Créez un site contenant un formulaire où l'utilisateur saisira son
    prénom, nom et âge. Le site doit afficher "Bienvenu XXXX XXXX, vous
    avez XXXX ans!"

2.  Créez une page (html ou php) contenant un formulaire où on saisit un nom et un
    prénom. Une autre page (php) traitera les données envoyées et affichera
    un message de salutation. Si les valeurs rentrées correspondent à
    votre nom et prénom, le script affichera le message "Que la force
    soi avec toi." et un lien vers le site officiel de Star Wars

3.  Créez un site où l'utilisateur doit deviner un chiffre au hasard
    entre 0 e 10 (ce chiffre est créé par l'ordinateur en utilisant la
    fonction mt_rand()). Si la personne gagne, affichez une photo comme
    prix. Conseil : Apprenez à utiliser la fonction avant d'essayer de
    créer le site

4.  Créez un script contenant un formulaire où on saisit deux valeurs
    entières. Un autre script traitera les données envoyées et affichera
    toutes les valeurs entières qui existent entre les deux dans un
    tableau HTML

5.  (Optionnel) Créez un jeu de lotto en PHP. Stockez les valeurs gagnantes dans un
    array.

6.  Créez un formulaire qui permette de saisir un prix et le rajoute une
    TVA du 12%. L'utilisateur cliquera sur un bouton et le résultat du
    calcul sera affiché dans une autre page.

7.  Créez un formulaire qui nous permette de choisir le nom d'un animal
    d'une liste déroulante. Quand on envoie les données, une image de
    l'animal choisi sera affichée. Les images se trouvent dans le
    serveur

8.  Créez un formulaire qui nous permette d'introduire un prix et de
    calculer le prix TVAC. La TVA est choisie par l'utilisateur parmi
    les valeurs d'une liste déroulante. Forcez (HTML) à l'utilisateur
    à saisir une valeur numérique.

9.  Pour une application web de réservations de chambres dans un hôtel
    nous avons besoin d'un formulaire permettant de choisir le nombre
    de chambres de chaque type (simples, doubles, suites) souhaitées par un client.
    Fixez le prix de chaque type de chambre dans une variable.
    Une fois les données seront envoyées, on calculera le prix total de la
    réservation.

10. Nous avons une liste de produits dans un array. Créer un code PHP
    capable d'afficher une liste déroulante contenant tous les produits.

11. Remplacez la liste déroulante pour des images de chaque produit avec
    de radio buttons

12. Créez un formulaire où l'utilisateur peut saisir un prix. Le
    formulaire a aussi une liste déroulante contenant de possibilités de
    paiement et un bouton « Payer ». Quand l'utilisateur clique sur le
    bouton payer on affiche le prix final : pour Mastercard on rajoute 5
    euros au prix et pour VISA 3 euros).

13. Créez un formulaire qui permette d'introduire un prix et le
    rajouter la TVA. Cette fois ci l'utilisateur choisit la valeur de
    TVA parmi plusieurs valeurs en utilisant des radios-buttons

14. Créez un formulaire où on saisit un prix. Le formulaire doit avoir
    aussi une caisse à cocher "Réduction" qui permet d'appliquer une
    réduction d'un 10% au prix

15. Créez un formulaire contenant un prix. La page doit contenir deux
    radio buttons "Envoyer à domicile" ou "Retirer sur place".
    Rajoutez un bouton "Envoyer" qui nous permettra d'envoyer les
    données du formulaire et afficher le prix. Si le client demande
    l'envoi à domicile le prix sera augmenté de 5 euros

16. Créez un générateur de langue de bois (petit et simple) similaire à
    <http://www.encyclopedie-incomplete.com/?Le-Pipotron-Generateur-Automatique>

Si vous voulez un défi plus grand, essayez d'implémenter
l'Enrhubatron!

17. Créez un formulaire qui permette à un utilisateur d'introduire son
    login et son password.

    -   Aucun de deux ne peut être vide ;)

    -   Les deux doivent contenir uniquement des lettres et des numéros
        et avoir entre 8 et 30 caractères

Si les valeurs sont correctes, le script les affiche en majuscule.
Utilisez les fonctions **ctype, strlen** et **strtoupper** pour vous
faciliter la tâche

<br><br>

# Exercices sur les formulaires (II)

## Exercice 1 : Génération des éléments d'un formulaire HTML en PHP

<br>
Nous voulons faire un site qui affiche de photos de loups. Nous
avons une petite bibliothèque de 10 images pour le moment, mais on compte rajouter de nouvelles.

Créez un formulaire où on peut juste saisir le nombre de photos qu'on veut afficher. Quand on clique un bouton, le site nous affichera le nombre de photos qu'on a choisi.

Astuce: Stockez les photos dans un même dossier (/img/chats) sous le nom
img1.jpg, img2.jpg... etc.

Important: Gênerez le HTML qui affiche les images en utilisant du PHP,
car ça rendra très facile de changer le nombre d'images sans modifier
une seule ligne de code.

<br>

## Exercice 2 : Génération des éléments d'un formulaire HTML en PHP

<br>
Pour une application d'achat de billets d'avions on a besoin d'un
formulaire où on indique le nombre de passagers qui prendront le vol.
Une fois qu'on a choisi le nombre de passagers, notre site affichera un
nouveau formulaire où on peut introduire le nom, prénom et date de
naissance de chaque passager.

Dans ce nouveau formulaire il y aura un bouton "Envoyer" qui renvoie
les données vers une autre page php. Dans cette dernière page, affichez
le contenu reçu du formulaire ($_POST) pour vous assurer que les
données ont été bien envoyées.

<br>

## Exercice 3

<br>
Créez un formulaire qui demande l'âge à l'utilisateur. Si
l'utilisateur a moins de 18 ans vous le redirigerez vers :

Si l'utilisateur a plus de 18 ans redirigez-le vers :

https://www.youtube.com/watch?v=5Cb3ik6zP2I
>
Utilisez la fonction :
>
header ("location: <http://www.lesite.com>");

<br>

## Exercice 4

<br>

Un utilisateur saisit le nom d'un animal et on affiche plusieurs images
de cet animal qui se trouvent dans le serveur

Astuce: les images se trouvent dans le dossier **img** du serveur et
portent le nom de l'animal plus un index. Ex: chat1.jpg, chat2.jpg,
chat3.jpg, chien1.jpg, chien2.jpg, chien3.jpg

<br>

## Exercice 5

<br>

Modifiez l'exercice précédent pour que les noms de fichier contenant les images soient stockés dans un array en php.

L'utilisateur saisi le nom d'un animal et on doit chercher toutes les images qui contiennent ce nom (ex: chatmarrant.jpg, tristechat.jpg) et les afficher

<br>

## Exercice 6 : cinéma

<br>

Un cinéma a établi plusieurs tarifs pour ses clients en fonction de
l'âge et de son statut (étudiant ou pas étudiant). Ils offrent un site
web qui permet aux clients potentiels de calculer le prix de ses
entrées. Si le client a moins de 12 ans, le prix sera de 4 euros. Le
prix normal est de 8 euros sauf pour les étudiants, qui ont une
réduction du 20%. Trouvez la manière de créer une formulaire qui puisse vous convenir (regardez de sites existants).

<br>

## Exercice 7: frais d'essence

<br>

Créez un formulaire qui permette à l'utilisateur de calculer le prix
d'un trajet en voiture d'un certain nombre de km. L'utilisateur peux
choisir entre une voiture diesel où essence. Considérez que le prix/km
moyen d'une voiture diesel est de 0.25euros/km et que le prix
d'essence est de 0.30 euros/km.

<br>

## Exercice 8: listes déroulantes

<br>

1.  Créez un formulaire qui nous permette de choisir un pays d'une liste déroulante. Quand on clique sur un bouton il nous affichera un drapeau du pays ainsi que le nom de sa capitale.

Étant donné qu'on ne dispose pas de bases de données, utilisez des array associatifs dans le script qui reçoit les données

2.  Créez un formulaire qui nous permette de choisir un pays d'une
    liste déroulante.

Quand on clique sur un bouton il nous redirigera vers le site
Wikipédia contenant l'information de ce pays (utilisez la fonction
"header")

3.  Modifiez le formulaire précédant pour pouvoir choisir la langue en
    plus du pays.

<br>

## Exercice 9

<br>

Nous avons classifié le temps de différents pays dans les catégories
Chaud, Froid, Gelé.

Chaud : Maroc, Mexique, Espagne
>
Froid : Belgique, Angleterre, Holland
>
Gelé : Norvège, Islande, Finlande

L'utilisateur va choisir un pays d'une liste dans un formulaire et on va lui indiquer s'il fait chaud, froid ou gelé. Vous pouvez inclure une image illustrant le temps du pays.

<br>


## Exercice 10


<br>

Créez un formulaire de login pour votre site. L'utilisateur doit saisir
un login et un mot de pass.

-   Aucun de champs ne peut pas être vide

-   Le login doit avoir 10 caractères au maximum

Réalisez la vérification en PHP. Vous pouvez rajouter un control dans le
propre HTML en utilisant l'attribut « pattern » des inputs.

<br>

## Exercice 11

<br>

Créez le jeu pierre-papier-ciseaux en PHP. L'utilisateur joue contre
l'ordinateur.


<br>

## Exercice 12

<br>

Nous allons créer un site capable de "deviner" nos gouts de TV.
L'utilisateur du site doit saisir un mot clé sur une thématique qui lui
intéresse et il sera redirigé automatiquement vers le site d'une série
qui pourra lui plaire (utilisez "header")

    Dark
    Élite
    Into the night
    Breaking Bad
    The wire
    True Detective
    Dexter
    Peaky blinder


<br>

# Exercices: Fonctions de base personnalisées

1.  Créez une fonction qui nous dise bonjour

2.  Créez une fonction qui calcule et affiche la somme de deux valeurs

3.  Créez une fonction qui affiche la table de multiplication d'une
    valeur envoyée en paramètre

4.  Créez une fonction qui reçoit une chaine de caractères et l'affiche
    en bleu dans un titre principal (H1)

5.  Créez une fonction qui reçoit un texte et l'affiche dans un titre
    principal dans une couleur choisie

6.  Créez une fonction qui reçoit un array et affiche ses éléments

7.  Créez une fonction qui reçoit un prix en paramètre et affiche le
    prix TVAc

8.  Créez une nouvelle version de la fonction précédente pour qu'elle
    renvoie la valeur TVAc calculée (cette fonction n'affiche rien).

9.  Nous voulons créer un jeu de lotto. Développez une fonction
    valeursLotto() qui affiche 6 valeurs entières aléatoires (utilisez
    la fonction déjà existante mt_rand)

10. On veut utiliser cette fonction dans plusieurs jeux différents.
    Créez une nouvelle version de la fonction précédente capable de
    recevoir le nombre de valeurs à générer

11. Nous avons un array contenant de prix. Utilisez la fonction qui
    calcule la TVA pour afficher tous ces prix avec la TVA

12. Nous avons un panier dans un tableau sous la forme
    **produits=>prix **:

Calculer le total du panier avec une fonction.

13. Créez un array de prix de vols. Créez une fonction qui reçoit un
    array et crée un tableau HTML contenant tous les prix. Les prix qui
    dépassent 300 euros seront affichés en rouge

14. Créez une fonction qui génère un array contenant un nombre aléatoire
    de prix (max 20) dont la valeur est aussi aléatoire (entre 100 et
    800 euros)

15. Créer une nouvelle version de la fonction de 12) qui, au lieu
    d'afficher les valeurs dans la fonction même, stocke les valeurs
    dans un array qui est renvoyé (return).

16. Créez une fonction qui reçoit un array associatif et affiche son
    contenu dans un tableau HTML. Le texte sera affiché dans la couleur
    qu'on envoie en paramètre à la fonction

17. Créez une fonction qui reçoit un array de noms et renvoie un nouvel
    array contenant tous les noms en majuscule (paramètre par
    valeur). Affichez ce nouvel array dans le script principal

18. Créez une fonction qui reçoit un array de noms et modifie son
    contenu en mettant tous les noms en majuscule (paramètre par
    référence). Affichez l'array original modifié dans le script
    principal

19. Créez une fonction qui reçoit un array associatif contenant de
    couples "VilleDepart-VilleDestination" et renvoie un nouvel array
    trié par ses indexes (les villes de départ)

20. Créez une fonction qui reçoit un array associatif et renvoie un
    nouvel array trié par ses valeurs (les villes de destination)

21. Nous voulons générer de noms complets de personnages pour un jeu de
    vidéo. Créez une fonction capable de générer un array de noms
    complets à partir d'un array de noms et un autre de prénoms.

Note: Pour éviter de générer à chaque fois les mêmes couples, utilisez
la fonction shuffle, capable de mélanger au hasard les éléments d'un
array

22. Nous voulons programmer un jeu de cartes en PHP et on doit stocker
    les noms des cartes dans un array. Trouvez la manière la plus
    efficace de le faire.

23. Utilisez la fonction array_rand pour vous aider à prendre une carte au hasard

24. Créez une fonction qui reçoit un array associatif et renvoie un
    nouvel array contenant uniquement ses valeurs

25. Créez une fonction qui reçoit un array associatif et renvoie un
    nouvel array contenant uniquement ses clés (indexes)

26. Vous avez reçu un array contenant de noms de villes en minuscules.
    Créez une fonction qui vous affiche les éléments de l'array en
    majuscules dans une liste HTML

27. Répétez l'exercice précédent, mais cette fois la première lettre de
    chaque ville sera en majuscule (chercher des infos sur la fonction
    uc_first)


<br>

# Exercices Strings + fonctions de Strings + Formulaires

<br>

1.  Créez une fonction qui reçoit un array de strings (ex: noms de
    personnes) et affiche chaque string ainsi que son nombre de
    caractères (utilisez **strlen**)

2.  Vous êtes en train de faire un moteur de recherche de vols.
    L'utilisateur saisie uniquement une ville de départ dans un
    formulaire. Quand il clique, l'application affiche le nom de toutes
    les villes auxquelles on peut voyager à partir de la ville choisie.
    Pour simuler la BD, créez un array contenant quelques villes de
    départ et leurs destinations :

```php

$vols = array (
"Bruxelles"=>array("Paris", "Londres","Bucarest"),
"Rome"=>array ("Paris","Varsovie","Milan"),
"Pekin"=>array ("New York","Istambul","Seoul")
);

```  

3.  Modifiez l'exercice précédent pour que l'utilisateur puisse saisir
    des espaces avant ou après la ville sans affecter le résultat

4.  Modifiez l'exercice précédent pour que l'utilisateur puisse saisir
    la ville en majuscules et minuscules sans affecter le résultat

5.  Créez une fonction qui reçoit un array contenant de noms
    d'utilisateurs et qui affiche l'information dans un tableau HTML.
    Si un nom a plus de 10 caractères il sera affiché en rouge

6.  Nous avons déjà une liste de noms (strings) dans un array. Nous
    voulons créer un nouvel array contenant uniquement les trois
    premières lettres de chaque nom. Utilisez la fonction **substr**.

7.  Nous voulons créer des adresses mail pour les utilisateurs de notre
    site. Nous avons un tableau $noms et un tableau $prenoms. Créez
    une fonction qui renvoie un tableau contenant des adresses de la
    forme *prenom.nom@monsite.be*

Ex: herbie.hancock@monsite.be

Affichez le tableau contenant les adresses dans le code du script
principal

8.  Modifiez l'exercice précédent pour que la fonction affiche son
    résultat toujours en majuscules. Cherchez sur le net comment mettre
    en majuscules un string en php.

9.  Créez une fonction qui reçoit un texte et cherche le mot "bombe" à
    l'intérieur du texte reçu. Si le mot s'y trouve, un message de
    "Vous êtes un terroriste! La NSA vous observe!" sera affiché.
    Utilisez la fonction **strstr**, regardez la documentation pour
    comprendre son fonctionnement

10. Nous sommes en train de développer une application pour smartphone
    et on veut créer une fonction qui reçoit array contenant de noms de
    personnes, affiche tous les noms qui commencent par une lettre reçue
    en paramètre (utilisez **substr**)

11. Créez une fonction qui reçoit un array de strings (ex: noms de pays)
    et transforme toutes ses valeurs en majuscules ou minuscules selon
    la valeur d'un deuxième paramètre (true ou false)

12. Créez une fonction qui reçoit un array de strings et une lettre. La
    fonction renvoie un array contenant tous les valeurs de l'array qui
    commencent par cette lettre (utilisez **strpos**)

13. Créez une fonction qui reçoit un texte et un mot. La fonction
    affiche le nombre d'occurrences du mot dans le texte
    (**str_count**)

14. Créez une fonction qui reçoit un fragment de texte et deux mots en
    paramètre. La fonction remplace le premier mot par le deuxième dans
    le texte et le renvoie (str_replace)

15. Créez une fonction qui reçoit un array de noms de produits et
    transforme la première lettre de chaque nom en majuscule
    (**ucfirst**)

16. Utilisez **printf** pour imprimer la valeur d'un string et d'un
    entier à votre choix

17. Créez une fonction qui reçoit un array de noms strings et renvoie un
    array contenant la taille de chaque string de l'array original

18. Créez une fonction qui reçoit un array de strings et renvoie un
    array associatif contenant les strings de l'array et la taille de
    chaque string

<br>

# Exercices: Arrays + fonctions Array

<br>

1.  Afficher un tableau HTML contenant trois lignes de 10 valeurs: la
    première contient de chiffres pairs (commencez par 0), la deuxième
    de chiffres impairs (commencez par 1) et la troisième de chiffres
    aléatoires entre 0 et 100 (fonction **ht_rand**, voir la
    documentation PHP sur le net).

2.  Vous avez cet array :

```php
$disque1= [
'titre'=>'Hard Groove',
'groupe'=>'Roy Hargrove',
'style'=> 'Jazz-Funk']
``` 

Utilisez la fonction **implode** pour créer une requête SQL a la forme :

```sql
INSERT INTO disques (titre, groupe, style) VALUES ('Hard Groove', 'Roy Hargrove', 'Jazz-Funk')
```  

3.  Créez un array d'un nombre aléatoire d'entiers (min. 10 valeurs et
    max. 30 valeurs).

Affichez l'array et le nombre d'éléments de l'array.

4.  Utilisez **array_slice** pour créer un nouveau tableau contenant
    les 10 premières valeurs de l'array précédant (array_slice
    n'efface pas des valeurs de l'array original)

5.  Triez les éléments de l'array en utilisant la fonction **sort**.
    Comment est-ce qu'on pourrait trier les valeurs en ordre
    descendant? Cherchez la fonction dans la documentation de PHP. Quel
    type d'array vous avez utilisé, indexé ou associatif?

6.  Créez un array associatif contenant des villes-capitales. Affichez
    son contenu en utilisant foreach

7.  Rajoutez deux nouveau pays à votre array et imprimez son contenu en
    utilisant **print_r**

8.  Faites la même chose en utilisant array_push()

9.  Triez l'array en utilisant **asort**. Pourquoi ce n'est pas une
    bonne idée d'utiliser **sort** dans ce cas?

10. Trouvez la fonction pour trier l'array par pays au lieu de par
    villes

11. Créez une boucle pour afficher un tableau HTML contenant les pairs
    ville-pays. Les villes s'afficheront en gras

12. Utilisez la fonction **array_slice** pour extraire les trois
    premiers pays de votre array et les stocker dans un nouvel array

13. Créez un array pour stocker les informations d'un mp3 (nom, auteur,
    style, durée).

Créez plusieurs "morceaux" de cette manière

14. Créez une boucle capable d'afficher les infos d'un morceau dans un
    tableau HTML

15. Créez un array bidimensionnel $disque contenant les morceaux que
    vous venez de créer

16. Rajoutez un nouveau morceau au disque

17. Utilisez array_slice pour extraire les deux premiers morceaux

18. A partir de l'array de l'exercice 3, utilisez array_splice pour

    a.  Eliminer les valeurs à partir de la vingtième position de
        l'array

    b.  Insérer les valeurs 99 et 100 juste avant la 5ème position de
        l'array

    c.  Remplacer les valeurs dans les positions 2 et 3 par 2000 et 3000

> Utilisez print_r pour vous assurer que les résultats sont corrects

19. Utilisez la fonction explode() pour transformer un string contenant
    de valeurs séparées par virgules en un array

20. Utilisez la fonction implode pour créer un string à partir des
    valeurs d'un array

21. Utilisez la fonction array_merge pour fusionner deux arrays

<br>

# Exercices sur les sessions

<br>

1)  Programmez le jeu pierre, papier et ciseaux. Utilisez la session
    pour stocker les ponctuations des joueurs (utilisateur vs. Machine)

Modifiez le jeu précédant : si un utilisateur gagne plus de 5 fois, on
le redirige vers un script qui affiche l'écran de la victoire
(fonction header)

2)  Créez une page contenant une barre de navigation avec deux liens :
    login et contenu.

L'utilisateur doit être connecté pour visualiser le « contenu » du
site (ex : une page contenant des affiches de films)
>
Pour se connecter, l'utilisateur clique sur login et il sera redirigé
vers une page pour saisir son login et son password.
>
Si le login est « WEB » et le password est « MASTER » il sera redirigé
vers la page du contenu. Sinon, il sera redirigé vers la page de
login.
>
Rajoutez maintenant un lien « logout » à la barre de navigation. Ce
lien est uniquement visible si l'utilisateur a fait login
correctement.

3)  Créez un formulaire simple contenant une liste déroulante remplie de
    noms de produits. Chaque fois que l'utilisateur choisit un produit
    et clique sur un bouton "Accepter" le produit choisit est stocké
    dans le champ de session "nomProd" comme un string. La valeur sera
    écrasée chaque fois qu'on clique sur "Accepter".

4)  L'exemple précèdent nous permet de stocker uniquement un produit,
    ce qui n'est pas du tout pratique. Au lieu de stocker la valeur
    d'un seul produit en forme de string on va stocker un array dans la
    session contenant tous les produits.

Le contenu de cet array est mis à jour à chaque fois qu'on choisit un
produit dans le formulaire.

5)  Créez un site qui affiche une liste de produits et leur prix. Un
    bouton à coté de chaque produit permet à l'utilisateur de le
    rajouter au panier. Chaque fois qu'on rajoute un produit on peut
    voir le contenu actuel du panier.

6)  Dans l'exercice précèdent, rajoutez les contrôles nécessaires pour
    permettre à l'utilisateur d'introduire le nombre d'unités de
    chaque produit.

7)  Rajoutez un bouton dans le script principal qui vous permette
    d'afficher une liste de produits choisis ainsi que le prix total de
    la commande

<br>

# Exercice sur les BDs

<br>

1.  Créez un site contenant une page d'inscription et une autre de
    login. L'utilisateur remplira un formulaire contenant son nom, login
    et password. Il pourra aussi uploader une photo de profil. Toutes
    les données concernant l'utilisateur seront encodées dans un tableau
    de la BD.

    1.  Rajoutez la vérification du mot de pass dans l'inscription
        (l'utilisateur doit re-taper son mot de pass pour être inscrit.

    2.  Sécurisez les mots de passe du site en utilisant les fonctions
        **password_hash** et **password_verify**

    3.  Filtrer les données du $_POST en utilisant **filter_input**

    4.  Utilisez de variables de session pour que l'utilisateur reste
        connecté sur le site. Vérifiez qu'elles fonctionnent
        correctement

    5.  Créez une page de logout

    6.  Créez une page qui puisse permettre à l'utilisateur de changer
        sa photo de profil

    7.  Créez une page pour supprimer le compte de l'utilisateur qui est
        connecté
