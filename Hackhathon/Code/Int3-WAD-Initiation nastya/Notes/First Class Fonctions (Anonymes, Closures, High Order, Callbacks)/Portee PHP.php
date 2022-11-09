<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $val1 = "Loli"; // portée globale, mais pas accéssible dans les fonctions
        // echo $val1;

        function uneFonction (){
            // global $val1;
            echo $val1; // pas accésible depuis la fonction, elle est déclarée dans une portée externe
        };

        function f1 (){
            $v1 = 3;
            function f2(){
                echo $v1; // pas accésible depuis la fonction, elle est déclarée dans une portée externe
            }
        }

    ?>
    <script>
    val1 = "Loulou"; // si on ne met rien la variable est globale, accéssible depuis partout
    function f1 (){
        val1 = "Lucie";
        console.log (val1);
    }
    f1();
    
    var val2 = "Loulou var"; // si on met var, elle est accéssible dans tous les scopes internes (les fonctions, par exemple)
    function f2 (){
        val2 = "Lucie var";
        console.log (val2);
    }
    f2();
    
    let val3 = "Loulou let"; // si on met let, elle est accéssible dans tous les scopes internes (les fonctions, par exemple)
    function f3 (){
        val3 = "Lucie let";
        console.log (val3);
    }
    f3();

    console.log (val1);
    console.log (val2);
    console.log (val3);

////////
    function f4(){
        v1 = "Pepe"; // je crée une variable globale, à éviter à tout prix!

        function f5(){
            v1 = "Lola";
            console.log (v1);
        };

        f5();
    }
    f4();
    console.log (v1);



    </script>
</body>
</html>

