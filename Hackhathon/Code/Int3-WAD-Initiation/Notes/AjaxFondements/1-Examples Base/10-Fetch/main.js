// doc sur les promeses (vanilla et sans fetch ni async) 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises

document.getElementById("afficherSeries").addEventListener("click", function () {

    // Si on veut envoyer un form on peut. Ici on le crée, mais 
    // on a juste à le prendre du DOM 
    // let form = new FormData(document.getElementById("monForm"));
    let form = new FormData();
    form.append('login', 'Jane');
    form.append('password', 'lepass');

    fetch("./traitement.php",
        {
            body: form,
            method: "post"
        })
        .then((response) => { // response contient le résultat de la résolution de la promesse
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then((json) => {

            console.log(json);
        })
        .catch((error) => {
            console.log(error);
        })

});

