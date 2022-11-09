<h1>Contact</h1>


<form method="POST" action="">
        <label for="firstname">Prénom : </label>
        <input autocomplete  id="firstname" placeholder="Votre prénom" 
            name="firstName" type="text"><br>

        <label>Mot de passe : </label>
        <input id="password" placeholder="ex : toto1234" type="password" name="password"><br>
        <button id="seePassword">Voir le password</button>
        
        <br>
        <br>

        <label>Homme</label><input type="radio" value="H" name="gender">
        <label>Femme</label><input type="radio" value="F" name="gender">
        <label>N/C</label><input type="radio" value="NC" name="gender">

        <br>
        <br>

        <label>PS</label><input type="checkbox" value="Playstation" name="console">
        <label>Switch</label><input type="checkbox" value="Nintendo Switch" name="console">
        <label>PC</label><input type="checkbox" value="Personal computer" name="console">
        
        <br>
        <br>

        <label for="favB">Browser : </label>
        <input list="browsers" id="favB" name="favBrowser" type="text"><br>

        <datalist id="browsers">
            <?php
            foreach($datalist as $row)
            {
                echo "<option value='$row'>";
            }
            ?>
        </datalist>

        <br>
        <br>

        <select name="age">
            <option disabled></option>
            <option value="<12">< 12 ans</option>
            <option value="1218">> 12 ans && < 18 ans</option>
            <option value=">18">> 18 ans</option>
        </select>

        <br>
        <br>

        <select multiple="true" name="tech">
            <option disabled></option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Node">Node</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="C#">C#</option>
            <option value="Java">Java</option>
            <option value="JS">JS</option>
        </select>

        <br>
        <br>

        <label for="salary">Salaire souhaité : </label>
        <input id="salary" type="number"  name="salaireDemander">

        <br>
        <br>
        

        <label for="email">Email de contact : </label>
        <input id="email" type="email" required name="email">

        <br>
        <br>

        <label for="province">Province souhaitée : </label>
        <input id="province" type="search" required name="province">

        <br>
        <br>


        <label for="tel">Tel de contact : </label>
        <input id="tel" type="tel" required name="tel">

        <br>
        <br>

        <label for="identityCard">Carte d'identité</label>
        <input type="file" id="identityCard" name="identityCard">

        <br>
        <br>


        <label for="passportColor">Couleur du passport</label>
        <input type="color" id="passportColor" name="passportColor">

        <br>
        <br>


        <label for="dateDisponibility">Date de disponibilité pour nouvel emploi</label>
        <input type="date" id="dateDisponibility" name="dateDisponibility">

        <br>
        <br>


        <label for="heureStartDay">Heure souhaitée pour commencer la journée</label>
        <input type="time" id="heureStartDay" name="heureStartDay">

        <br>
        <br>

        
        <label for="timeToCompleteForm">Date et heure de remplissage du formulaire</label>
        <input type="datetime-local" id="timeToCompleteForm" name="timeToCompleteForm">

        <br>
        <br>

        <label for="monthToFire">Mois d'engagement</label>
        <input type="month" id="monthToFire" name="monthToFire">

        <br>
        <br>

        
        <label for="weekToFire">Numéro de semaine d'engagement</label>
        <input type="week" id="weekToFire" name="weekToFire">

        <br>
        <br>


        <label for="primeSalarial">Prime salarial</label>
        <input type="range" min="1000" max="2000" id="primeSalarial" name="primeSalarial">

        <br>
        <br>

        <input type="image" id="sendByImage" 
        src="https://interactive-examples.mdn.mozilla.net/media/examples/login-button.png" 
        name="sendByImage">

        <br>
        <br>


        <input type="hidden" id="csrf_token" value="123456789987654321" name="csrf_token">

        <br>
        <br>


        <input type="submit" value="Envoyer">

        <br>
        <br>

        <ul>
            <li>Contact : <a href="mailto:l@l.l">Mail</a></li>
            <li>Contact : <a href="tel:0497312523">Tel</a></li>
        </ul>
    </form>


    <script>
        let button = document.getElementById("seePassword")

        button.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e)

            let inputPassword = document.getElementById("password")

            if(inputPassword.type == "password")
                inputPassword.type = "text"
            else
                inputPassword.type = "password"

        })
    </script>