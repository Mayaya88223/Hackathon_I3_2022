form1.addEventListener ("submit", function (evenement){
	// éviter le comportement par défaut (c.à.d. réaliser le action)
	// de l'événement submit
	evenement.preventDefault();
});

boutonRecherche.addEventListener ('click', function (evenement){
	var xhr = new XMLHttpRequest();
	// créer un objet FormData contenant toutes les données du formulaire 
	// form1, qui se trouve dans le DOM
	
	
	var formulaire = new FormData (form1);

	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status==200){
				//console.log (typeof (xhr.responseText));
				//console.log (xhr.responseText);
				// transformer le string en objet JS
				var objPersonnages = JSON.parse (xhr.responseText);
				console.log (objPersonnages);
				// vider le ul (effacer son contenu, le mettre à vide)
				listePersonnages.innerHTML = "";
				
				// avec un for
				/*
				for (var i=0;i < objPersonnages.length; i++){
					
					var unLi = document.createElement("li");
					unLi.innerHTML = objPersonnages[i].lastname + " " + objPersonnages[i].firstname;
					listePersonnages.appendChild (unLi);
					
				}
				*/
				
				// avec un foreach
				/*
				objPersonnages.forEach (function (unElement){
					var unLi = document.createElement("li");
					unLi.innerHTML = unElement.lastname + " " + unElement.firstname;
					listePersonnages.appendChild (unLi);
				});
				*/
				
				// avec un for-in
				for (unIndex in objPersonnages){
					var unLi = document.createElement("li");
					unLi.innerHTML = objPersonnages[unIndex].lastname + " " + objPersonnages[unIndex].firstname;
					listePersonnages.appendChild (unLi);			
				}
								
			}
			else {
				console.log ("error dans AJAX! "+ xhr.status);
			}
		}
	}
	
	// on appelle le serveur et on lui envoie le formulaire
	xhr.open ('POST','./traitement.php');
	xhr.send (formulaire);
	
	
	
	
});