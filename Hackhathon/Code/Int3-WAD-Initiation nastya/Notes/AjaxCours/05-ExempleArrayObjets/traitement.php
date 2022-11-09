<?php

include "./Produit.class.php";

$p1 = new Produit ("bombon", 1);
$p2 = new Produit ("chocolat", 2.5);
$p3 = new Produit ("frites", 3);

$arr = [$p1, $p2, $p3];

echo json_encode($arr);

?>