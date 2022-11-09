$(document).ready(function(){
	$("#btnChanger").click (function (){
		console.log ("button click");
		$.ajax({
				method:"POST",
				dataType: "json",
				url: "./traitement.php",
				success: function (donneesServeur){
					console.log("Tout va bien:"+donneesServeur);
					
					$("#divMessage").html(donneesServeur[0]);
					$("#divMessage").append(","+donneesServeur[1]);
					$("#divMessage").append(","+donneesServeur[2]);
					
					console.log (donneesServeur);
					console.log(typeof(donneesServeur));
					
				},
				error: function (data){
					console.log("Une erreur s'est produite");
				}
		});
		
	});
	
});
