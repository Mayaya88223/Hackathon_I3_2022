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
    function somme($v1, $v2)
    {
        echo $v1 + $v2;
    }

    somme(4, 6);


    // version avec return
    function sommeReturn($v1, $v2)
    {
        return $v1 + $v2;
    }


    print ("<br>La somme est : " . sommeReturn(4, 6));

    ?>
</body>

</html>