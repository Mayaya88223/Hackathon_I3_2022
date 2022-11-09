$(document).ready(function(){
    // exemple 4
    $('#afficherPersonne').click (function(){
		$.ajax({
			url: './traitement.php',
			method: 'GET',
			dataType: 'json',
			cache: false,
			success: function(donneesRecues){         
				console.log (typeof(donneesRecues));
				console.log (donneesRecues);
			   
				for (index in donneesRecues){
					$('#divPersonne').append(donneesRecues[index]);
				}
			},
			error: function(){
				console.log ("Erreur");
			}
		});
    }); 
});

