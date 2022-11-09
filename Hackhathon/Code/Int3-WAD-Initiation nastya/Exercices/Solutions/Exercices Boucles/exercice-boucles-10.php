<?php

for ($heure = 0; $heure <= 23; $heure++ ){
    print ("\n" . $heure);
    for ($minutes = 5; $minutes < 60; $minutes +=5){
        print ("\n\t". $minutes);
        for ($secondes = 5; $secondes < 60; $secondes += 10){
            print ("\n\t\t". $secondes);
        }
    }
}