<?php
$title;

if(isset($_GET["page"]))
{
    if($_GET["page"] == "contact") 
        $title = "Page de contact";

    else if($_GET["page"] == "faq")
        $title = "Page de Foire au questions"; 

    else if($_GET["page"] == "categories")
        $title = "Présentation des catégories principales";
}
else{
    $title = "Page d'accueil";
}


require("./views/head.php");
?>
