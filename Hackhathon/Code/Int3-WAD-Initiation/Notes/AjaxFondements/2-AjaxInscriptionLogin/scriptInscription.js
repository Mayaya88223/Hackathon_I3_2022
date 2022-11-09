formInscription.addEventListener ("submit", function (evenement){
	// éviter le comportement par défaut (c.à.d. réaliser le action)
	// de l'événement submit
	evenement.preventDefault();
});

btnEnvoyer.addEventListener ('click', function (evenement){
	var xhr = new XMLHttpRequest();
	// créer un objet FormData contenant toutes les données du formulaire 
	// formInscription, qui se trouve dans le DOM
	var formulaire = new FormData (formInscription);

	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4){
			if (xhr.status==200){
				console.log (xhr.responseText); // le message du serveur concernant l'inscription
				divMessage.innerHTML = xhr.responseText;
			}
			else {
				console.log ("error dans AJAX! "+ xhr.status);
			}
		}
	}
	
	// on appelle le serveur et on lui envoie le formulaire
	xhr.open ('POST','./traitementInscription.php');
	xhr.send (formulaire);
	
	
	
	
});