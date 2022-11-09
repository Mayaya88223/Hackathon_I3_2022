<!DOCTYPE html>
        <?php

          
            
            try{
                $db= new PDO (DBDRIVER.': host='.DBHOST.';port='.DBPORT.';dbname='.DBNAME.';charset='.DBCHARSET, DBUSER, DBPASS); 
            } 
            catch (Exception $ex) {
                die('Erreur ; '.$ex->getMessage());
            }
            
            $sql="SELECT * FROM evenements";
            $stmt= $db->prepare($sql);
            $stmt->execute();
            
            $rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
            $stmt->closeCursor();
        ?>
        <div class="listeEvents">
        	<table>
            <?php

			foreach ($rows as $row){
					echo "<tr>";
					foreach ($row as $value){
						echo "<td>".$value."</td>"; 
					}
					echo " <td><a href='./process/traitement-delete.php?id=".$row['idEvenement']."'>Delete</a></td><td><a href='./index.php?page=update-evenement&idEvenement=".$row['idEvenement']."'>Update</a><br /></td>";   
					echo "</tr>";
                        }
              
            ?>
			</table>
            
        </div>
    </body>
</html>