
function validation() {

    document.getElementById("resultat").setAttribute("hidden", 'hiden');
    document.getElementById("error").setAttribute("hidden", 'hiden');

    if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caratères";
        document.getElementById("error").removeAttribute('hidden');
    }

    else if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caratères";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caratères";
        document.getElementById("error").removeAttribute('hidden');
    } else if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caratères";
        document.getElementById("error").removeAttribute('hidden');
    }
    else if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caratères";
        document.getElementById("error").removeAttribute('hidden');
    }


}
