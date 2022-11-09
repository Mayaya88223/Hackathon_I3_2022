document.getElementById("afficher").addEventListener("click", (evenement) => {
    let xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function () {
        // console.log (xhr.readyState); // la propriété porte le nom "readyState"
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {  // le status http
                document.getElementById("contenuReponse").innerHTML = xhr.responseText;
            }
            else {
                // window.location.href = "./pageErreur.html";
                document.getElementById("contenuReponse").innerHTML = "Erreur";
            }
        }
    }

    xhr.open("GET", "./traitement.php");
    xhr.send(null);
})