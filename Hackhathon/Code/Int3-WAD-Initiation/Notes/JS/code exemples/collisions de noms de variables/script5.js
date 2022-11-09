(function (){
	var nom = "Isabelle";	// on déclare "nom" dans un IIFE à chaque fois. La page principale ne le trouvera pas 
	console.log ("Dans le script qui affiche: " + nom);
})();

// la définition de la variable "nom" affecte uniquement au contexte de la fonction, pas au contexte global.
// Quand on affiche la variable "nom" dans la page principale, JS cherchera dans le contexte global
// et nous affichera une erreur