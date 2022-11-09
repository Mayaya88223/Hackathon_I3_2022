document.getElementById ("afficherSeries").addEventListener ("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				console.log (typeof(xhr.responseText));
				// on reçoit un string contenant JSON qu'on transforme en array
				var tableauJS = JSON.parse (xhr.responseText);
				console.log (typeof(tableauJS));
				console.log (tableauJS);
				for (index in tableauJS){
					// à nous de le mettre dans le DOM comme on veut...
					document.getElementById("divSeries").append(tableauJS[index]);
					document.getElementById("divSeries").appendChild (document.createElement("br"));
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

