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
    $filmRealisateurs = [
        'Psycho' => 'Alfred Hitchcock',
        'Alien' => 'Ridley Scott',
        'Eyes wide shut' => 'Stanley Kubrick'
    ];
    print ($filmRealisateurs['Alien']);

    foreach ($filmRealisateurs as $film => $realisateur){
        print ("<br>Le film <b>".$film."</b> a été fait par ".$realisateur);
    }
    
    print ("<table>");
    print ("<tr>");
    print ("<th>Titre</th>");
    print ("<th>Realisateur</th>");
    print ("</tr>");
    
    foreach ($filmRealisateurs as $titre => $realisateur){
        print ("<tr>");
        print ("<td>".$titre."</td>");
        print ("<td>".$realisateur."</td>");
        print ("</tr>");
    }
    print ("</table>")





    ?>

<style>
td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
}

td {
    text-align: center;
}

tr:nth-child(even) {
    background-color: #eee;
}

th[scope="col"] {
    background-color: #696969;
    color: #fff;
}

th[scope="row"] {
    background-color: #d7d9f2;
}

caption {
    padding: 10px;
    caption-side: bottom;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
}


</style>
</body>
</html>