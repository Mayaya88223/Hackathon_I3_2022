$(document).ready(function (){
		console.log ("Le DOM est chargé, ok!");
		$("#changeContenu").click (function(){
			console.log ("Bouton cliqué!");
			$.ajax({
				url: "./traitement.php",
				success: function (donnees){
					console.log("log: "+donnees);
					$("#divContenu").html(donnees);
					
				}
			});
			
		});
});
