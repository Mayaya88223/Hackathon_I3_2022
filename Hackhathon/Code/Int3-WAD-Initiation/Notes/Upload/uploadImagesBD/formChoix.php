<html>
<body>
<!-- un formulaire pour choisir l'image -->
<form enctype="multipart/form-data" action="upload.php" method="POST" >
Selectionnez un fichier:
<input type="file" name="userFile" /><br />
<input type="hidden" name="MAX_FILE_SIZE" value="100000000" />
<button type="submit">Upload</button>
</form>

<body>
</html>
