<?php

function read()
{
        $fr=fopen("php://stdin","r");   // open our file pointer to read from stdin
        $input = fgets($fr,128);        // read a maximum of 128 characters
        $input = rtrim($input);         // trim any trailing spaces.
        fclose ($fr);                   // close the file handle
        return $input;                  // return the text entered
}

// Les boucles servent à répéter des actions!
// On les utilise dans plusieurs situations:

// On commence par WHILE

// Ex1 : Répéter une action pendant qu'une condition est vraie

// print ("Voulez-vous un café?");
// $reponse = read();

// // on pourrait penser à utiliser des ifs
// if ($reponse == "oui" || $reponse == "non"){
//     print ("Votre café svp...");
// }
// else {
//     print ("Reponse mauvaise");
// }
// comment permettre, par exemple, que l'user se trompe plusieurs fois?
// on devrait répéter le code!!!
// print ("Voulez-vous un café?");
// $reponse = read();

// on pourrait penser à utiliser des ifs
// if ($reponse == "oui" || $reponse == "non"){
//     print ("Votre café svp...");
// }
// else {
//     print ("Reponse mauvaise");
// }
// print ("Voulez-vous un café?");
// $reponse = read();

// ce n'est pas possible si on veut permettre de se tromper à plusieurs reprises!!

// on utilise un while
// print ("Voulez-vous un café?");
// $reponse = read();

// condition pour rester coincé : en français -> on a une réponse, et la réponse doit être différente de oui
// ET différent de non.

// print ("\nQui êtes-vous?");
// $nom = read();
// while ($nom != "Stefania" AND $nom != "Julie"){
//     print ("\nPas possible d'entrer pour vous");
//     print ("\nQui êtes-vous?");
//     $nom = read();
// }

// for ($nom=read();$nom != "Stefania" AND $nom != "Julie";$nom = read() ){
//     print ("\nQui êtes-vous?");
//     print ("\nPas possible d'entrer pour vous");
// }


// print ("Bienvenue ".$nom);

// while ($reponse != "oui" AND $reponse != "non") {
//     print ("\nVoulez-vous un café?");
//     $reponse = read();
// }
// print ("\nVotre réponse est: " . $reponse);



// Ex 2. Compter avec de boucles
// Afficher les valeurs de 0 a 5
$i = 0;
print ("Decompte while: ");
while ($i < 6){
    print ("\n" . $i++);    // post-incrementation. on pourrait pré-incrémenter et on aurait un autre résultat ++$i
}


$i = 0;
print ("Decompte while: ");
while ($i < 6){
    print ("\n" . $i); 
    $i = $i +1;
}

// $i++ est égal à $i = $i+1 -> changer la valeur de la variable
// $i++ n'est pas égal à $i + 1 -> $i +1 est juste une expression

// $i + 1;
// for ($i = 0; $i < 6; $i = $i + 1 ){ // même chose que mettre $i++. Jamais $i = $i++
//     print ("\n" . $i);
// }


// Ex. 3: Compter + condition
// $nombreEssais = 1;
// print ("\nQui est le meilleur groupe d'Interface?");
// $rep = read();

// while ($rep != "WAD21" AND $nombreEssais < 3){
//     $nombreEssais ++;
//     print ("\nVous avez tort!!");
//     print ("\nEssayez encore:");
//     $rep = read();
// }
// if ($rep == "WAD21"){
//     print ("T'as bien raison!");
// }
// else {
//     print ("T'as tort, le meilleur groupe est WAD21");
// }

// Ex 4. Accumuler un résultat

// faire l'addition des chiffres entre 1 et 5 (résultat: 15). On ne demande rien
$res = 0;
for ($i = 0; $i < 6 ; $i++ ){
    $res += $i; // res est un accumulateur : $res = $res + $i
}
print ("\nresultat: " . $res);

// faire l'addition des chiffres entre 20 et 30. On ne demande rien
$res = 0;
for ($i = 20; $i < 31 ; $i++ ){
    $res += $i; // res est un accumulateur : $res = $res + $i
}
print ("\nresultat: " . $res);








