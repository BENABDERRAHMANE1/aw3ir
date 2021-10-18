
function validation() {

    document.getElementById("resultat").setAttribute("hidden", 'hiden');
    document.getElementById("error").setAttribute("hidden", 'hiden');

    if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if ( document.getElementById("nom").value.length > 20 ) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au max 20 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }

    else if (document.getElementById("prenom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if ( document.getElementById("prenom").value.length > 20 ) {
        document.getElementById("error").innerHTML = "Le prenom doit contenir au max 20 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }


    else if (document.getElementById("Adresse").value.length < 5 ) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if ( document.getElementById("Adresse").value.length > 20 ) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au max 50 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }
   

    else if (document.getElementById("Mail").value.length < 5) {
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if(validateEmail(document.getElementById("Mail").value) == false){
        document.getElementById("error").innerHTML = "mail non valide";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if ( document.getElementById("Adresse").value.length > 30 ) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au max 30 carateres";
        document.getElementById("error").removeAttribute('hidden');
    }
 

    else 
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("nom").value + " " + document.getElementById("prenom").value;
    document.getElementById("resultat").removeAttribute('hidden');   
       

    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }