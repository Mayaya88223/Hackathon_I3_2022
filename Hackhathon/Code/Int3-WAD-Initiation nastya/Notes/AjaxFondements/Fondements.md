# Résume AJAX en JavaScript

Ajax permet d'envoyer de données à un serveur et de les recevoir sans
devoir "changer de page" (c.à.d. modifier la URL).

**1** . Créer une **page principale** (ce qui envoie/reçoit les données au/du serveur)

**2** . Créer les éléments de la page. **Un ou plusieurs parmi ces éléments lancera l'appel AJAX au serveur** (ex: champ de texte dans formulaire de recherche, liste déroulante...)

**3** . **Choisir l'événement qui lancera l'appel** au serveur (ex: clic d'un bouton, changement de l'élément sélectionné dans une liste). Si on a un bouton dans un formulaire, son comportement sera normalement modifié pour ne pas faire le submit au serveur.
Rien ne nous empêche d'avoir un bouton sans formulaire.

**4** . Créer **une page de traitement** qui enverra la réponse (ex: le serveur cherche dans une BD et renvoie les données)

<br>

## 1. Création du script JS 

<br>

Ex.: un script qui détecte le clic d'un bouton,  lance la requête au serveur et incruste de données reçues dans le DOM. 
Dans ce script on doit:

**a)** **Affecter l\'événement** au bouton/liste/div ou quoi qui ce soit le déclencheur de l'appel AJAX (addEventListener)

**b)** Dans le code de l’événement on doit:

- **créer l\'objet XHR**

- **définir** le code de **l'événement onreadystatechange de l'objet XHR** . onreadystatechange est un événement qui se lance plusieurs fois pendant la communication client/serveur 

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

On doit au moins définir quoi faire chez le client quand le status est 4 (DONE). Le serveur aura envoyé un code HTTP (200,404,500...). Dans ce cas de figure, on doit créer: 

\- le **code en cas de succes**: on a fait l'appel au serveur et tout est ok (ex: on reçoit les données que le serveur à chercher dans la BD - code HTTP 200, 304). Dans ce cas, on peut faire quoi qui ce soit dans le client avec la réponse (ex: incruster de données dans le DOM)

\- Créer le **code en cas d\'erreur** (ex: l'appel AJAX échoue car il y a une erreur dans le serveur - code 404, 500, etc...)

**d)** Une fois on a défini quoi faire dans chaque situation, on peut lancer l'appel au serveur (**open** et **send**)

<br>

## 2. Localiser les erreurs:

<br>

Pour debugger les erreurs d'un appel AJAX : 

\- Aller dans le navigateur sur l\'ongle NETWORK

\- Cliquer dans la requête au serveur (404, 200, 304 \...) qui correspond à l'appel AJAX

\- Cliquer dans l\'onglet RESPONSE pour voir la réponse du serveur

\- Il peut avoir des erreurs de JavaScript qu\'on peut voir dans la console

<br>

## 3. Codes de readyState:

<br>

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

<br>

## 4. Codes de status HTTP (not found, ok, erreur interne...):

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

