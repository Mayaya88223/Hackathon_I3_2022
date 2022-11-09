<?php

for ($i = 50; $i < 100; $i++){
    if ($i % 2 != 0){
        print ($i);
    }
}

for ($i = 51; $i < 100; $i+=2){
        print ($i);
}



// 0 % 8 => 0
// 1 % 8 => 1
// .
// .
// 6 % 8 => 6
// 7 % 8 => 7
// 8 % 8 => 0 --------
// 9 % 8 => 1
// 10 % 8 => 2
// 11 % 8 => 3
// 12 % 8 => 4
// .
// .
// 15 % 8 => 7
// 16 % 8 => 0 -------
// 17 % 8 => 1
// .
// .
// 24 % 8 => 0 --------




// 9 divEntiere 4 = 2  // division entière
// 8 divEntiere 2 = 4 
// 10 divEntiere 3 = 3

// 9 % 4 = 2 -> div: 2 , reste: 1 (le modulo) 
// 8 % 2 = 4 -> div: 4 , reste: 0 (le modulo)
// 10 % 3 = 3 -> div: 3, reste: 1 (le modulo)

// 2 % 2 -> 0 - paire
// 3 % 2 -> 1 - impaire
// 4 % 2 -> 0 - paire
// 5 % 2 -> 1 - impaire
// 6 % 2 -> 0 - paire


// % reste de la division
// 0 / 10 -> 0 
// 1 / 10 -> 1
// .
// .
// 9 / 10 -> 9
// 10 / 10 -> 0
// 10 / 10 -> 0

