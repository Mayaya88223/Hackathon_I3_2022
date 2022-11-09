<?php

$password= "coucou";
$passwordHash = password_hash($password,
								PASSWORD_DEFAULT,
								array ('cost'=>12));
								
echo "Le password hashé est: ".$passwordHash;								


