$(document).ready(function(){
    
    $('#afficherListePersonnes').click (function(){
		$.ajax({
			url: './traitement.php',
			method: 'GET',
			dataType: 'json',
			success: function(donneesRecues){
				// donneesRecues est un array d'objets
				// car JQuery appelle JSON.parse lui-même
				console.log (typeof(donneesRecues));
				console.log (donneesRecues);

				$("#divListePersonnes").append("<ul></ul>");
				for (var i=0;i<donneesRecues.length;i++){
				   $("#divListePersonnes ul").append("<li>Nom: "+donneesRecues[i].nom+"</li>");
				   $("#divListePersonnes ul").append("<li>Prenom: "+donneesRecues[i].prenom+"</li>");
				   $("#divListePersonnes ul").append("<li>Age: "+donneesRecues[i].age+"</li>");
				}
			},
			error: function (){
				console.log ("Erreur");
			}
		});
	});
    
})

