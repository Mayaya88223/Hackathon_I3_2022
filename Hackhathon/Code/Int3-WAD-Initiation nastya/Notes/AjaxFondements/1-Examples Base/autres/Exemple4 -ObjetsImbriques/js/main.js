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
					
					// exemple: boucle for-in
					for (cle1 in donneesServeur){
						console.log (cle1);
						//console.log (donneesServeur[cle1]);
						for (cle2 in donneesServeur[cle1]){
							console.log (donneesServeur[cle1][cle2]);
						}
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
