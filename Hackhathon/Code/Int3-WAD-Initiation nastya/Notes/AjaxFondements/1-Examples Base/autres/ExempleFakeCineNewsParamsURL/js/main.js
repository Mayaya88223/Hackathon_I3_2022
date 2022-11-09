$(document).ready (function (){
		$("#recherche").keyup(function (){
			$("#listeFilms").empty(); // vider le input

	
			if ($("#recherche").val().length>0){
				
				$.ajax({
					url: "traitement.php",
					dataType: "JSON",
					method:"POST",
					data:{
						titreRecherche: $("#recherche").val()
						
					},
					success: function (donneesServeur){
						console.log("Tout va bien: "+donneesServeur);
						for (i=0;i<donneesServeur.length;i++){
							$("#listeFilms").append(donneesServeur[i]['titre']);
							$("#listeFilms").append("<br/>");
						}
					},
					error: function (e){
						console.log("On a une erreur");
						console.log (e);
					}
					
				});
			}
		});
			
});