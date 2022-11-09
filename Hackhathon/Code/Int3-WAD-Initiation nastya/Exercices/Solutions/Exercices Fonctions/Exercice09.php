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
    // crée un nouveau tableau renversé , tableau original reste sans modification
    function inverseTableau(array $array): array
    {
        $arrRenverse = [];
        for ($i = count ($array) -1; $i >= 0; $i-- ){
            $arrRenverse[] = $array[$i];
        }   
        return $arrRenverse;
    }
    $arr1 = [3,4,5,6];
    $nouvelArray = inverseTableau ($arr1);
    print_r ($nouvelArray);

    function inverseTableauRef (array &$array): void{
        $arrRenverse = [];
        for ($i = count ($array) -1; $i >= 0; $i-- ){
            $arrRenverse[] = $array[$i];
        }   
        // pas de return, on veut écraser l'array original
        $array = $arrRenverse;
    }
    print ("<br>");
    $arr2 = [9,10,11];
    inverseTableauRef($arr2); // observez qu'on ne capture aucune valeur car pas de return
    print_r ($arr2); // modifié pour toujours!




    ?>
</body>

</html>