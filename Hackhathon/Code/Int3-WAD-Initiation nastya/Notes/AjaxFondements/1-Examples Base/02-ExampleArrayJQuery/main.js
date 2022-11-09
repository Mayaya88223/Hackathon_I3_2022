$(document).ready(function(){
    
    $('#afficherSeries').click (function(){
        $.ajax({
			url: './traitement.php',
            method: 'GET',
            dataType: 'json',
			cache: false,
			success: function(donneesRecues){
				// JQuery lance "parse" lui même
			    console.log (typeof(donneesRecues));
			    console.log (donneesRecues);
				// on reçoit un array au lieu d'un code HTML
				for (index in donneesRecues){
					$('#divSeries').append(donneesRecues[index] + "<br>");
				}
			},
			error: function(){
				console.log ("Erreur");
			}        
		});
   });
});

