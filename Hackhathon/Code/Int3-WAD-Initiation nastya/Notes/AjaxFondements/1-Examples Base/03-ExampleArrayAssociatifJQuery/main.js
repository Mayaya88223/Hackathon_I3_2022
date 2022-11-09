
$(document).ready(function(){
    
    $('#afficherPaysCapitales').click (function(){
       $.ajax({
			url: './traitement.php',
			method: 'GET',
			dataType: 'json', // on reçoit du JSON
			success: function(donneesRecues){
				
				// donneesRecues contient l'objet JS
				// JQuery appelle lui-même JSON.parse
				console.log (typeof(donneesRecues));
				console.log (donneesRecues);
				
				for (index in donneesRecues){
					$('#divPaysCapitales').append(index);
					$('#divPaysCapitales').append(donneesRecues[index]);
				}
				// pour afficher le contenu de l'objet   
				// on peut utiliser les deux notations (objet et array)
			   console.log ("Nom du pays: "+donneesRecues.nom);
			   console.log ("Nom du pays: "+donneesRecues['nom']);
			},
			error: function(){
				console.log ("Erreur");
			}
	   });
	});
       
        
    
})

