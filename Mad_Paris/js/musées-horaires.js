
console.log('musée-horaire.js')
let museeArtLink = document.getElementById('musee-art-link')
let museeNissimLink = document.getElementById('musee-nissim-link')

let imageMusee = document.getElementById('image-musee')

let horaireCollections = document.getElementById('horaire-collections')
let fermetureCollections = document.getElementById('fermeture-collections')

let horaireExpositions = document.getElementById('horaire-exposition')
let fermetureExposition = document.getElementById('fermeture-exposition')

let divAlert = document.getElementById('alert')

let divExposition = document.getElementById('exposition-temporaire')

let museeArtIsActive = true
let museeNissamIsActive = false

function loadMuseeDesArts() {
    removeElementByClass('new-bloc')
    // Reset 
    if (museeNissamIsActive) {
        museeNissimLink.classList.remove('active')
        museeNissamIsActive = false
    }

    museeArtLink.classList.add('active')

    imageMusee.src = 'img/musee-art-deco.png'

    fermetureCollections.innerHTML = '<i>Fermeture des caisses à <b>17h15</b></i>'
    horaireCollections.innerHTML = "Du mardi au dimanche de <b>11h</b> à <b>18h</b> <br>" + fermetureCollections.innerHTML

    fermetureExposition.innerHTML = "<i>Fermeture des caisses à <b>17h15</b></i>"
    horaireExpositions.innerHTML = "Le mardi, mercredi, vendredi, samedi et&nbsp;dimanche de <b>11h</b> à <b>18h</b><br>" + fermetureExposition.innerHTML

    addAlert("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium similique totam vel, quos rerum provident culpa minus cumque doloribus adip"
        , "Fermeture du musée à 17h les 24 et 31 décembre")

    museeArtIsActive = true
}

function loadMuseeNissim() {
    removeElementByClass('new-bloc')
    // RESET
    if (museeArtIsActive) {
        museeArtLink.classList.remove('active')
        museeArtIsActive = false
        removeAlert()
    }

    museeNissimLink.classList.add('active')

    imageMusee.src = 'img/musee-Nassim.png'

    fermetureCollections.innerHTML = 'Fermeture des caisses à <b>18h15</b>'
    horaireCollections.innerHTML = "Du mardi au dimanche de <b>11h</b> à <b>18h</b> <br>" + '<i>' + fermetureCollections.innerHTML + '</i>'

    fermetureExposition.innerHTML = "Fermeture des caisses à <b>17h15</b>"
    horaireExpositions.innerHTML = "Le mardi, mercredi, vendredi, samedi et&nbsp;dimanche de <b>11h</b> à <b>18h</b><br>"

    //  Création d'un bloc texte pour la nocturne 


    createBlocTexte('Nocturne le jeudi qu\'à <b>21h</b>', "Fermeture des caisses à <b>20h15</b>", divExposition)

    museeNissamIsActive = true
}

function addAlert(newText, newTextItalic) {
    divAlert.style.display = 'flex'

    let text = document.getElementById('alert-text')

    text.innerHTML = newText + '<br></br> <i>' + newTextItalic + '</i>'
}

function removeAlert() {
    divAlert.style.display = 'none'
}

function removeElementByClass(className) { // Cette fonction va permettre d'enlever les nouveaux bloc texte 

    elements = document.getElementsByClassName(className)
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0])
    }
}


function createBlocTexte(horaire, fermeture, div) {   // Création d'un nouveau bloc texte en plus de ceux par défaut
    let divBlocTexte = document.createElement('div')
    let horizontalLine = document.createElement('span')
    let horaireText = document.createElement('p')
    let fermetureText = document.createElement('i')

    divBlocTexte.classList.add('bloc-texte') // On donne une classe unique aux nouveaux bloc texte pour pouvoir les supprimer facilement avec la fonction removeElementByClass
    divBlocTexte.classList.add('new-bloc')

    horizontalLine.classList.add('horizontal-line')

    fermetureText.innerHTML = "<i>" + fermeture + "</i>"
    horaireText.innerHTML = horaire + "<br>" + fermetureText.innerHTML

    divBlocTexte.appendChild(horizontalLine)
    divBlocTexte.appendChild(horaireText)
    div.appendChild(divBlocTexte)
}

loadMuseeDesArts()










