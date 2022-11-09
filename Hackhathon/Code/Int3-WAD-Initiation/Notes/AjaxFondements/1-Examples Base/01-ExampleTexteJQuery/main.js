$(document).ready(function(){
    
    $('#afficherSeries').click (function(){
       $.ajax({
			url: './traitement.php',
			method: 'GET',
			// on ne recoit pas du JSON
			success: function(donneesRecues){
			   console.log (typeof(donneesRecues));
			   console.log (donneesRecues);
			   // on recoit du code HTML, pas une structure de donnees
			   $('#divSeries').html(donneesRecues);	   
			},
			error: function(){
				console.log ("Problème dans la requête");
			}
	   });
    });
    
});

