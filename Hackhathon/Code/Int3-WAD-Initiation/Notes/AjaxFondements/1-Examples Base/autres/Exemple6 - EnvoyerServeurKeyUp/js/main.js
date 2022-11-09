$(document).ready(function(){
	$("#inputExtraitNom").keyup (function (){
		console.log ("input changé");
		$.ajax({
				method:"POST",
				dataType: "json",
				data: {
					extraitNom: $("#inputExtraitNom").val(),
				},
				url: "./traitement.php",
				cache: false,
				success: function (donneesServeur){
					console.log (donneesServeur);
					
				},
				error: function (data){
					console.log("Une erreur s'est produite");
				}
		});
		
	});
	
});
