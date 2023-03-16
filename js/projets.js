

mes_projets = [
    ['Atypik House', 'img/Atypik_house.jpg', ['Symfony','PHP']], // Structure : Nom du Projet, lien de l'image, techno et langages
    ['Mad Paris', '/img/Mad_Paris.png.jpg', ['HTML/CSS','Javascript']],
    ['Pokédex', 'img/pokedex.jpg', ['Angular','Javascript']],
    ['Appli météo', '/img/appli-meteo.jpg', ['VueJs','Javascript']],
]

projets_row = document.getElementById('projets-row')

previewPicture = document.getElementById('preview-img')
previewBox = document.getElementById('preview-box')
technoBox = document.getElementById('techno-box')

createTechnoBalises(0)

currentPictureId = '0'

for (i in mes_projets) {
    projetBlock = document.createElement('div')
    title = document.createElement('p')
    image = document.createElement('img')

    projetBlock.classList.add('projet-block');
    projetBlock.classList.add('col')
    projetBlock.classList.add('s12')
    projetBlock.classList.add('l10')


    title.classList.add('btn-project')
    image.classList.add('preview-mobile')

    projetBlock.setAttribute('id', i)
    projetBlock.setAttribute('onmouseover', 'changePreview(this.id)')
    title.innerHTML = mes_projets[i][0]
    image.src = mes_projets[i][1]



    projetBlock.appendChild(title)
    projetBlock.appendChild(image)

    projets_row.appendChild(projetBlock)

}

function changePreview(projet_id) {

    // Je crée une variable currentPicture pour vérifier si l'image n'est pas déjà affichée. Si elle l'est
    // Je ne fais rien
    if (currentPictureId != projet_id) {

        // Création des balises affichant les technos
        var technos = document.getElementsByClassName('techno');
        while (technos[0]) {
            technos[0].parentNode.removeChild(technos[0]);
        }

        createTechnoBalises(projet_id)


        // Je supprime l'image et je l'a recrée pour activer l'animation css (pas très propre lol)
        previewPicture.remove()
        previewPicture = document.createElement('img')
        previewBox.appendChild(previewPicture)
        previewPicture.setAttribute('id', 'preview-img')

        previewPicture.src = mes_projets[projet_id][1]
        previewPicture.style.animation = 'animation: 1s ease-in-out 0s 1 slideInFromLeft;'

        currentPictureId = projet_id
    } else {

    }
}

function createTechnoBalises(projet_id) { // création d'une fonction pour créer les balises en fonctions de l'ID du projet 
    for (t in mes_projets[projet_id][2]) {
        techno = document.createElement('p')

        techno.innerHTML = mes_projets[projet_id][2][t]
        
        techno.setAttribute('class', getTechnoColor(mes_projets[projet_id][2][t]))
        techno.classList.add('techno')

        technoBox.appendChild(techno)
    }
}

function getTechnoColor(techno) {
    console.log(techno)
    switch (techno) {
        case 'VueJs':
            return 'teal'
        case 'Angular':
            return 'red'
        case 'Symfony':
            return 'grey'
        case 'HTML/CSS':
            return 'orange'
        case 'PHP':
            return 'light-blue'
        case 'Javascript':
            return '#ffd600 yellow accent-4'
    }
}








