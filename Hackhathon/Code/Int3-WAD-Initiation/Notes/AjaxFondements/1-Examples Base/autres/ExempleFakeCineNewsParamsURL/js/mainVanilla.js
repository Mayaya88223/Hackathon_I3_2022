
document.getElementById ("recherche").addEventListener ("keyup", function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				listeFilms.innerHTML = "";
				console.log (typeof(xhr.responseText));
				// on reçoit un string qu'on doit transformer en JSON
				var reponseJSON = JSON.parse (xhr.responseText);
				//console.log (typeof(reponseJSON));
				console.log("Tout va bien: "+reponseJSON);
				for (i=0;i<reponseJSON.length;i++){
					listeFilms.append(reponseJSON[i]['titre']);
					listeFilms.appendChild (document.createElement("br"));
					console.log (reponseJSON[i]['titre']);
				}

			}
			else {
				console.log ('Error: ' + xhr.status);
			}
		}

	};
	xhr.open ('POST', 'traitement.php');
	// on envoie le contenu du form et un message
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xhr.send("titreRecherche="+recherche.value+"&unMessage=coucou"); 
	
	
});

