const verif = () => {
    //nom et prenom 
    const nom = document.querySelector('#fname').value
    const prenom = document.querySelector('#lname').value
    if (!/[A - Z] /.test(nom.charAt(0)))
        afficherError("la premiere letter du nom doit etre majuscule")
    if (!/[A - Z] /.test(prenom.charAt(0)))
        afficherError("la premiere letter du prenom doit etre majuscule")

    //email
    const email = document.querySelector("#mail").value
    if (email.search(/@esprit.tn/) == -1)
        afficherError("email doit appartenir a Esprit")

    //mot de passe
    const password = document.querySelector('#password').value
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))
        afficherError("Le mot de passe doit contenir au moins 8 caractères, dont au moins : Une lettre majuscule,Une lettre minuscule et un nombre.")

    //date
    const date = document.getElementById('DateFondation').value
    const day = new Date(date)
    if (day > new Date())
        afficherError("date is not valid")


    //NbrMember
    const adherant = document.querySelector('#NbrMembers').value
    if ((adherant < 10) || (adherant > 100))
        afficherError("Le nombre des adhérents doit être supérieur à 10 et inférieur à 100.")


    //activité
    const chkbox = document.getElementsByName('checkbox');
    var valid = 0;
    for (var i = 0; i < 5; i++) {
        if (chkbox[i].checked == true) {
            valid = 1;
            break;
        }

    }
    if (valid == 0) {
        afficherError("Catégorie est un menu à choix unique.")

    }

    //adhesion
    const adhesion = document.getElementsByName('adhesion')
    var valid = 0;
    for (var i = 0; i < 2; i++) {
        if (adhesion[i].checked == true) {
            valid = 1;
            break;
        }
    }
    if (valid == 0) {
        afficherError("On doit sélectionner au moins un type d’activités.")
    }
    //mail confirmation
    const mailConfirmation = document.querySelector("#mailConfirmation").value
    if (email != mailConfirmation)
        afficherError("ERROR")
    //others
    //  const text = document.getElementById('#textArea');
    //  const autre = document.getElementsByName('autres');
    //  if (autre.checked == true) {
    //      alert("work")
    //      text.style.display = "block";
    //  } else {
    //      text.style.display = "none";
    //  }

}


const afficherError = msg => {
    console.log(msg)
}

const submitButton = document.querySelector('.actions input');
submitButton.addEventListener('click', e => {
    e.preventDefault()

    verif()

})
const autre = document.getElementsById('autres');
autre.addEventListener('change', () => {
    const text = document.getElementById('textArea')
    text.style.display = "block"
})