<?php

// exercice 5
// for ($i = 50; $i <= 100; $i++) {
//     if ($i % 2 == 1) {
//         print("\n" . $i);
//     }
// }

// modulo est le reste de la division entière => %
// 10/5 = 2 - reste->0
// 10/3 = 3 - reste->1

// 10/2 = 5 - reste->0 chiffre pair
// 11/2 = 5 - reste->1 chiffre impair
// 12/2 = 5 - reste->0 chiffre pair
// 13/2 = 5 - reste->1 chiffre impair
// etc...


for ($i = 51; $i <= 100; $i += 2) { // $i = $i+2
    print("\n" . $i);
}

for ($i = 50; $i <= 99; $i+=2) { 
    $i++;
    print("\n" . $i);
}
