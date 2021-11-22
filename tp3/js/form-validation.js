window.onload = function () {

    document.querySelector("#button").addEventListener("click", function (event) {
        event.preventDefault();
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));


        if ((document.querySelector("#nom").value.length == "") || (document.querySelector("#nom").value.length < 5)) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "Le nom doit avoir au moins 5 caractères";

            myModal.show();
        }
        else if (document.querySelector("#nom").value.length > 20) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "Le nom doit avoir au max 20caractères";
            myModal.show();
        }

        else if ((document.querySelector("#prenom").value.length == "") || (document.querySelector("#prenom").value.length < 5)) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "Le prénom doit avoir au moins 5 caractères";
            myModal.show();
        }
        else if (document.querySelector("#prenom").value.length > 20) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "Le prénom doit avoir au max 20 caractères";
            myModal.show();
        }
        else if ((document.querySelector("#adresse").value.length == "") || (document.querySelector("#adresse").value.length < 5)) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "L'adresse doit avoir au moins 5 caractères";
            myModal.show();
        }
        else if (document.querySelector("#adresse").value.length > 50) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "L'adresse doit avoir au max 50 caractères";
            myModal.show();
        }
        else if (validateEmail(document.querySelector("#email").value) == false) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "Email non-valid.";
            myModal.show();
        }

        else if (validateDate(document.querySelector("#datedenaissance").value) == false) {
            document.querySelector(".modal-title").textContent = "Error !!!";
            document.querySelector(".modal-body").textContent = "WOW !!!! Tu es né(e) dans le futur.";
            myModal.show();
        }

        else {

            document.querySelector(".modal-title").textContent = " Bienvenue " + document.getElementById("prenom").value;
            document.querySelector(".modal-body2").textContent = " Vous êtes nés le " + document.getElementById("datedenaissance").value + " et vous habitez à";
            document.querySelector("#map").src = `https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector("#adresse").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
            document.querySelector("#lien").href = `http://maps.google.com/maps?q=${document.querySelector("#adresse").value}`;
            document.querySelector(".modal-body3").textContent = document.getElementById("adresse").value;

            myModal.show();
        }

    });






};



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateDate() {
    const inputDateDeNaissance3 = document.getElementById('datedenaissance').value;

    let dateNaissance = new Date(inputDateDeNaissance3);
    let dateNaissanceTimestamp = dateNaissance.getTime();

    let nowTimestamp = Date.now();

    return (dateNaissanceTimestamp < nowTimestamp)
}