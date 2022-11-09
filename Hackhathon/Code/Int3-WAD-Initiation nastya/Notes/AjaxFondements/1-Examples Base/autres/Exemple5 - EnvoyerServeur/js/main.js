$(document).ready(function(){
	$("#btnCalculer").click (function (){
		console.log ("button click");
		$.ajax({
				method:"POST",
				//dataType: "json",
				data: {
					nomDuProduit: $("#nomProduit").val(),
					//age: 45,
					//prenom: $("#prenom").val()
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
