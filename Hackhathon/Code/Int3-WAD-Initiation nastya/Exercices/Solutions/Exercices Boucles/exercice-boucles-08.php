<?php



// ce code nous permet de lire du clavier
function read()
{
    $fr = fopen("php://stdin", "r");   // open our file pointer to read from stdin
    $input = fgets($fr, 128);        // read a maximum of 128 characters
    $input = rtrim($input);         // trim any trailing spaces.
    fclose($fr);                   // close the file handle
    return $input;                  // return the text entered
}


$multiplication = 1 ;
for ($val = read(); $val <> -1; $val = read() ) {
    $multiplication *= $val;
}
print ("\nLa multiplication est: " . $multiplication);