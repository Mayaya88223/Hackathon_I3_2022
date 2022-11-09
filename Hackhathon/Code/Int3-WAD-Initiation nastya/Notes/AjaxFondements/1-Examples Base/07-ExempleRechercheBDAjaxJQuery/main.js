$(document).ready(function(){
	$("#boutonRecherche").click (function (evenement){
		
		evenement.preventDefault();
		$.ajax({
				method:"POST",
				dataType: "json",
				data: {
					selectSexe: $("#selectSexe").val(),
				},
				url: "./traitement.php",
				cache: false,
				success: function (donneesServeur){
					// on obtient les données sous la forme d'un array d'objets
					console.log (donneesServeur);
					
				},
				error: function (data){
					console.log("Une erreur s'est produite");
				}
		});
		
	});
	
});
