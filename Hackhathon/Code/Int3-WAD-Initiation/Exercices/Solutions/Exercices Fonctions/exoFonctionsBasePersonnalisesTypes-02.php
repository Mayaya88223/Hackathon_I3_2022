<?php
declare(strict_types=1);
?>

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
    // sans return
    function somme(int $v1, int $v2): void
    {
        echo $v1 + $v2;
    }

    somme(4, 5);


    // version avec return
    function sommeReturn(int $v1, int $v2): int
    { 
        return $v1 + $v2;
    }


    print("<br>La somme est : " . sommeReturn(4, 6));

    ?>
</body>

</html>