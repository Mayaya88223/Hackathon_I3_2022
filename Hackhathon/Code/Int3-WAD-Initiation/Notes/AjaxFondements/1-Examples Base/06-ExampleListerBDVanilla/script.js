boutonAfficher.addEventListener ('click', function (evenement){
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function (){
		
		if (xhr.readyState == 4)
		{
			if (xhr.status == 200){

				var arrayPersonnages = JSON.parse (xhr.responseText);
				arrayPersonnages.forEach (function (elementDuArray) {
					// console.log (elementDuArray);
					var prenom = elementDuArray.firstname;
					var nom = elementDuArray.lastname;
					var texte = prenom + " " + nom;
					var unLi = document.createElement ("li");
					unLi.innerHTML = texte;
					listePersonnages.appendChild (unLi);
					
				});
				
				
				
			}
			else {
				console.log ("Il y a un problème: " + xhr.readyState + "," + xhr.status);
			}
		}
		
		
	}
	
	xhr.open ("GET", "./traitement.php");
	xhr.send (null);
	
});