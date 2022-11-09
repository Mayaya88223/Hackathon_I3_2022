$(document).ready(function(){
	$("#btnChanger").click (function (){
		console.log ("button click");
		$.ajax({
				method:"POST",
				dataType: "json",
				url: "./traitement.php",
				cache: false,
				success: function (donneesServeur){
					console.log("Tout va bien:"+donneesServeur);
					
					
					$("#divMessage").html(donneesServeur['nom']);
					$("#divMessage").append(","+donneesServeur.profession);
					$("#divMessage").append(","+donneesServeur['dateNaissance']);
					
					// exemple: boucle for-in
					for (cle in donneesServeur){
						console.log (cle);
						console.log (donneesServeur[cle]);
					};
					
					
					console.log (donneesServeur);
					console.log(typeof(donneesServeur));
					
				},
				error: function (data){
					console.log("Une erreur s'est produite");
				}
		});
		
	});
	
});
