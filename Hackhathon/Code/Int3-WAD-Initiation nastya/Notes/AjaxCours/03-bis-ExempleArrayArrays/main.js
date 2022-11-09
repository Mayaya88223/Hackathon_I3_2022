document.getElementById("afficher").addEventListener("click", (evenement) => {
    let xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function () {
        // console.log (xhr.readyState); // la propriété porte le nom "readyState"
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {  // le status http
                
                console.log (xhr.responseText); // le string ne nous sert pas
                console.log (typeof(xhr.responseText));

                let arrObj = JSON.parse (xhr.responseText);
                console.log (arrObj);
                console.log (typeof(arrayObj));

                // parcourir en js avec forEach...

                // document.getElementById("contenuReponse").innerHTML = 
                //     obj.nom + " aime bien " + obj.hobby + " et vient de " + obj.nationalite;
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