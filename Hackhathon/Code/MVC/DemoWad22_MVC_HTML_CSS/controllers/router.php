<?php

if(isset($_GET["page"]))
{
    if($_GET["page"] == "contact") 
        require("./controllers/contact.php");
    
    else if($_GET["page"] == "faq") 
        require("./controllers/faq.php");

    else if($_GET["page"] == "categories")
        require("./controllers/categories.php");
}
else{
    require("./controllers/homePage.php");
}

?>