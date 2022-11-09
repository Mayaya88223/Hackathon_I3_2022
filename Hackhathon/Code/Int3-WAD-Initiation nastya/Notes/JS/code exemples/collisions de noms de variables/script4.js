(function (){
	var nom = "Loulou";	// on déclare "nom" dans script3.js et script4.js, mais dans script4 elle se trouve dans une IIFE 
	console.log ("Dans le script qui affiche: " + nom);
})();

// la définition de la variable "nom" affecte uniquement au contexte de la fonction, pas au contexte global.
// Quand on affiche la variable "nom" dans la page principale, JS cherchera dans le contexte global
