// exemple 6
document.getElementById ("afficherListePersonnes").addEventListener ("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				console.log (typeof(xhr.responseText));
				// on reçoit un string qu'on doit transformer en JSON
				var reponseJSON = JSON.parse (xhr.responseText);
				console.log (typeof(reponseJSON));
				

				var ul = document.createElement ("ul");
				divListePersonnes.appendChild(ul);
				
				for (var i=0;i<reponseJSON.length;i++){
					for (index in reponseJSON[i]){
						var li = document.createElement ("li");
						li.innerHTML = index + " : " + reponseJSON[i][index];
						ul.appendChild(li);
						
					}
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


