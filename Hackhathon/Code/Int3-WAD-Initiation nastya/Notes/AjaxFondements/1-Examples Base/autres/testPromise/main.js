document.getElementById ("afficherSeries").addEventListener ("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				
				console.log (typeof(xhr.responseText));
				document.getElementById("divSeries").innerHTML =  xhr.responseText;
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

