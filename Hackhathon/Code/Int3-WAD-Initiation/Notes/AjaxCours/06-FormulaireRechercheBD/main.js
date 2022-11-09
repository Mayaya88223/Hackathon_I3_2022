// événement pour le champ de recherche par titre
document.getElementById("txtTitre").addEventListener("keyup", (event) => {

    let val = event.target.value;

    if (val == "") { // on ne veut aucun résultat
        document.getElementById("resultat").innerHTML = "";
        return; // on sort de la fonction
    }

    console.log(val);

    let xhr = new XMLHttpRequest();
    let formulaire = new FormData(document.getElementById("formulaireHTML"));

    xhr.onreadystatechange = (event) => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {

                let reponse = JSON.parse(xhr.responseText);

                // s'il y a des érreurs on les gére
                if (reponse.erreurs.length > 0) {
                    // debugger (console.log)
                    // afficher message dans le dom
                    // - un div caché s'affiche
                    // - on le cache à chaque appel
                    // .....
                    // ré-diriger (windows.location.href="....")
                    return;
                }
                else {
                    let arrayFilms = reponse.donnees;
                    afficheResultat(arrayFilms);
                }
            }
            else {
                console.log("erreur: " + xhr.status);
            }
        }
    };

    xhr.open("POST", "./traitementRecherche.php");
    xhr.send(formulaire);
});



const afficheResultat = function (arrayFilms) {
    if (arrayFilms.length == 0) {
        document.getElementById("resultat").innerHTML = "Aucun film correspond à votre rechercher";
        return;
    }

    // remplir le DOM, vider le div d'abord
    document.getElementById("resultat").innerHTML = "";

    let ul = document.createElement("ul");
    arrayFilms.forEach((elem) => {
        let li = document.createElement("li");
        
        // contenu du li
        li.innerText = elem.titre + ", " + elem.dateSortie;
        // id du li (vient de la BD). Ici on n'a pas vraiment besoin mais c'est important de connaitre l'existence des "data"
        li.dataset.id = elem.id;
        


        // clickable!
        li.addEventListener ("click", (e) => {
            window.location.href = "./afficherFilmComplet.php?id=" + li.dataset.id; 
        });

        ul.appendChild(li);
    });
    document.getElementById("resultat").appendChild(ul);
}


