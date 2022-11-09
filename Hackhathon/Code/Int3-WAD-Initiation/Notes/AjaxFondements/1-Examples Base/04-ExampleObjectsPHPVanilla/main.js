// exemple 4
document.getElementById ("afficherPersonne").addEventListener ("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				
				// on reçoit un string qu'on doit transformer en JSON
				var reponseJSON = JSON.parse (xhr.responseText);
				
				console.log (typeof(reponseJSON));			
				console.log (reponseJSON);
				for (index in reponseJSON){
					divPersonne.append(reponseJSON[index]);
					divPersonne.append(document.createElement("br"));
				}

			}
			else {
				console.log ('Error: ' + xhr.status);
			}
		}

	};
	xhr.open ('GET', 'traitement.php');
	// on n'envoie rien au serveur
	xhr.send (null);
});


