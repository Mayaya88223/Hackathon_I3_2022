// exemple 3
document.getElementById ("afficherPaysCapitales").addEventListener ("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				console.log (typeof(xhr.responseText));
				// on reçoit un string qu'on doit transfomer en objet JS avec parse
				var objetJS = JSON.parse (xhr.responseText);
				console.log (objetJS);
				console.log (typeof(objetJS));
				for (index in objetJS){
					divPaysCapitales.appendChild (document.createElement("br"));
					divPaysCapitales.appendChild (document.createElement("br"));
					divPaysCapitales.append(index);
					divPaysCapitales.appendChild (document.createElement("br"));
					divPaysCapitales.append(objetJS[index]);
					// pour afficher le contenu de l'objet   
					// on peut utiliser les deux notations (objet et array)
					console.log ("Nom du pays: "+objetJS.nom);
					console.log ("<br>Nom du pays: "+objetJS['nom']);
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

