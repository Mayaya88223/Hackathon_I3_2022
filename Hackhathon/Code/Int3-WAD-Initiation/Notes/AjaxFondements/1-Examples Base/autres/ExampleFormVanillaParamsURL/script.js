// code AJAX
document.getElementById ("boutonSubmit").addEventListener ("click", function (e){
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
				if (xhr.readyState == 4){
				
					if (xhr.status == 200) {
						message.innerHTML =  (xhr.responseText);
							
					}
				
				}
		}
		
		
		xhr.open ('POST', 'traitement.php');
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send ("nom=" + nom.value + "&prenom=" + prenom.value);
});


