<?php


declare(strict_types = 1);

// À partir de PHP8 on peut faire appel aux fonctions en utilisant des paramètres nommés,
// ce qui nous permet de choisir un ordre ou de ne pas envoyer certains
// voyons quelques exemples
function calculerPrix (int $prixBase, int $tva = 0, int $reductionFidelite = 0, int $reductionFetes = 0){
    $prixFinal = $prixBase * (1 + $tva / 100);
    $prixFinal = $prixFinal * (1 - $reductionFidelite / 100) ;    
    $prixFinal = $prixFinal * (1 - $reductionFetes / 100) ;    
    return $prixFinal;
}

echo calculerPrix(prixBase: 1000 , reductionFetes : 10);
// qu'est-ce qu'on gagne? 
// Imaginez qu'on ne veut faire appel à la fonction uniquement avec quelques paramètres
// qui ne se suivent pas dans la signature de la fonction.
// Par exemple : prixBase (1000) et reductionFidelite (5)
// On ne peut pas faire : 
// calculerPrix (1000, ,5);
// Mais grâce aux paramètres nommés on peut faire calculerPrix (prixBase:1000, reductionFidelite:10)



?>
