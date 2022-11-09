## Master-page 
<br>

Création d'un site contenant une barre de navigation (liens). 
On chargera à chaque fois le contenu de la page cible d'un lien dans le body de l'index.php. Cela implique qu'on charge **toujours** la page index.php, où on incrustera les autres pages. Nous allons developper ce contep en cours.

Cet exmple nous aidera a montrer le concept de **master page**.
Ce concept très basique nous aidera à **mieux comprendre l'idée de** **template** et de **routing**, omni presente dans tous les frameworks.

Nous allons voir de quoi il s'agit au fur et à mesure!

Créez un dossier **master-page** où vous allez créez tout votre code. 

1. Créez un dossier dans **master-page** (**1-monSite**). Créez un fichier index.php contenant ultra-simple contenant une barre de navigation. Il y aura juste deux liens, chaque lien vers une page php. Créez les pages cibles de ces deux liens. Peu importe pour le moment le contenu de chaque page... un message où une image suffiront. 
En plus de la nav, le site doit contenir un header et un footer qui se trouvera dans toutes les pages (mettez juste un bête message dans chacun)

2. Faites une copie du dossier precedant dans un autre dossier **2-monSiteIncludes**. Créez de fichiers externes pour la nav, le header et le footer et **utilisez include** pour les inclure dans les pages

3. Faites une copie du dossier precedant dans un autre dossier **3-monSiteMasterPage**. Transformez les liens des pages et le code de l'index pour **créer une masterpage** (à developper pendant le cours)

4. Faites une copie du dossier precedant dans un autre dossier **4-monsiteFormulaire**. Créez une page contenant un **formulaire simple** et une autre pour le traiter. Pensez bien au lien à mettre dans l'action du formulaire... 

5. Faites une copie du dossier precedant dans un autre dossier **5-monSiteMasterPageSession**. Si vous savez gérer la **session**, **créez des pages pour faire login et logout**. Vous pouvez faire un fake login sans BD (comparez le couple login-pass avec le contenu de deux variables dans la page de traitement)

