$(document).ready(function(){
    
    $('#nom').keyup(function(){
        nomActuel= $('#nom').val();
        $('#divNom').html (nomActuel);
    })
    
    $('#couleur').change(function(){
        $('#divContenu').css("background-color",$('#couleur').val());
        
    })
    
    $('#afficher').click (function(){
		
       $.ajax({
           url: './traitement.php',
           method: 'POST',
           // on envoie un objet literal "data" contenant toutes les données
           data: {
               nom: $('#nom').val()
           }
       }).done(function(donneesRecues){
           console.log (typeof(donneesRecues));
           console.log (donneesRecues);
           $('#divContenu').html(donneesRecues);
           
           
           
       }).error(function(){
           console.log ("error");//alert ("ça ne va pas");
       })
       
        
    })
    
})

