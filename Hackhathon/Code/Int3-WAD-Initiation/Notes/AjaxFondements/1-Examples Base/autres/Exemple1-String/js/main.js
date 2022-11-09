$(document).ready(function(){
	$("#btnChanger").click (function (){
		console.log ("button click");
		$.ajax({
				method:"POST",
				url: "./traitement.php",
				success: function (donneesServeur){
					console.log("Tout va bien:"+donneesServeur);
					$("#divMessage").html(donneesServeur);
				},
				error: function (data){
					console.log("Une erreur s'est produite");
				}
		});
		
	});
	
});
