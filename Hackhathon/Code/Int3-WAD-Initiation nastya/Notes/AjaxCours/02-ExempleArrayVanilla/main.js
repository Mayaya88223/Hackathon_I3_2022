document.getElementById("afficher").addEventListener("click", (evenement) => {
    let xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function () {
        // console.log (xhr.readyState); // la propriété porte le nom "readyState"
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {  // le status http
                
                console.log (xhr.responseText); // le string ne nous sert pas
                console.log (typeof(xhr.responseText));

                let arrayNomsJS = JSON.parse (xhr.responseText); // eq. à json_decode
                console.log (arrayNomsJS); // le string ne nous sert pas
                console.log (typeof(arrayNomsJS));
                
                let div = document.getElementById("contenuReponse");

                let ul = document.createElement("ul");
                for (index in arrayNomsJS){
                    let li = document.createElement("li");
                    li.innerHTML = arrayNomsJS[index];
                    ul.appendChild (li);
                }
                div.appendChild (ul);
                


                // JSON.parse (xhr.responseText);
                
                // document.getElementById("contenuReponse").innerHTML = xhr.responseText;
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