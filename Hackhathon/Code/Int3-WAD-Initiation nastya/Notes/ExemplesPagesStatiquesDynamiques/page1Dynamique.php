<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    Bonjour les WADs 22, voici une page PHP (dynamique)

    <?php
    print "<h3>Je suis un print dans php</h3>";
    ?>

    Je suis encore du HTML
    <br><br>

    <table border="1">
        <!-- border est vieux comme le monde, utilisez style -->
        <tr>
            <!-- tr: table row -> une ligne du tableau -->
            <td>Paula</td> <!-- td: table data -> une colonne du tableau -->
            <td>Lola</td>
            <td>Marie</td>
        </tr>
        <tr>
            <td>Camille</td>
            <td>Maryam</td>
            <td>Miriam</td>
        </tr>
    </table>

    <!-- voici un autre tableau, cette fois genéré en PHP -->
    <table border="1">
        <?php
        $tab1 = ['Paula', 'Coco', 'Nastya']; // ce tableau est censé de venir d'une Base de données
        $tab2 = ['Lola', 'Loli', 'Marie'];

        print "<tr>";
        foreach ($tab1 as $nom) {
            print "<td>" . $nom . "</td>";
        }
        print "</tr>";

        print "<tr>";
        foreach ($tab2 as $nom) {
            print "<td>" . $nom . "</td>";
        }
        print "</tr>";


        ?>
    </table>

    <br>

    <?php
    print date("d-m-y h:i:s");
    ?>



</body>

</html>