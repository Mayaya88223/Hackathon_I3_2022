// doc sur les promeses (vanilla et sans fetch ni async) 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises


// definition de la promesse
function ajaxPromesse() {
    return new Promise(function (resolve, reject) {
        let url = "./traitement.php"; 
        let req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200)
                    resolve(JSON.parse(req.responseText)); // appel AJAX succés : lancer le resolve - envoyer la réponse déjà en JSON (choix)
                else
                    reject(Error(req.statusText)); // appel AJAX échec : lancer le reject - envoyer le code d'erreur
            }
        };
        req.onerror = function () {
            reject(Error("network error"));
        };
        req.send(/*data*/);
    });
}

document.getElementById("afficherSeries").addEventListener("click", function () {
    ajaxPromesse()
        .then((data) => { // quoi faire dans le resolve
            console.log(typeof (data));
            // on reçoit un string contenant JSON qu'on transforme en array
            console.log (data);
            for (index in data) {
                // à nous de le mettre dans le DOM comme on veut...
                document.getElementById("divSeries").append(data[index]);
                document.getElementById("divSeries").appendChild(document.createElement("br"));

            }
        })
        .catch((error) => { // quoi faire dans le reject
            console.log(error);
        })
});
