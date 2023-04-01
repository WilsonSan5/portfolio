mes_projets = [
    ['Atypik House', 'img/Atypik_house.webp', ['Symfony'], 'Mars, 2023', 'https://github.com/WilsonSan5/Atypik_House'], // Structure : Nom du Projet, lien de l'image, techno et langages
    ['Mad Paris', '/img/Mad_Paris.webp', ['HTML/CSS', 'Javascript'], 'Mars, 2023', '/Mad_Paris/index.html'],
    ['Site Portfolio', '/img/site-portfolio.webp', ['HTML/CSS', 'Javascript'], 'Mars, 2023', '/index.html'],
    ['Pokédex', 'img/pokedex.webp', ['Angular'], 'Mars, 2023', 'Pokédex/index.html'],
    ['Appli météo', '/img/appli-meteo.webp', ['VueJs', 'Javascript'], 'Février, 2023', 'https://www.appmeteo.wilsonsan.fr/'],
    ['Appli météo', '/img/appli-meteo.webp', ['VueJs', 'Javascript'], 'Février, 2023', 'https://www.appmeteo.wilsonsan.fr/'],
    ['Appli météo', '/img/appli-meteo.webp', ['VueJs', 'Javascript'], 'Février, 2023', 'https://www.appmeteo.wilsonsan.fr/'],
]

projets_row = document.getElementById('projets-row')
previewPicture = document.getElementById('default-img')
previewBox = document.getElementById('preview-box')
technoBox = document.getElementById('techno-box')
currentPictureId = 'default'

createTechnoBalises(0, technoBox)
changePreview(1) //Définit l'image par défaut



for (i in mes_projets) {
    projetBlock = document.createElement('div')
    title = document.createElement('p')
    image = document.createElement('img')
    techno = document.createElement('p')
    rowBalises = document.createElement('div')
    date = document.createElement('p')

    projetBlock.setAttribute('class', 'projet-block col s12 l10')
    rowBalises.setAttribute('class', 'flexbox row-balises')
    title.classList.add('btn-project')
    image.classList.add('preview-mobile')

    rowBalises.appendChild(date)

    createTechnoBalisesMobile(i, rowBalises)

    projetBlock.setAttribute('id', i)
    projetBlock.setAttribute('onmouseover', 'changePreview(this.id)')
    title.innerHTML = mes_projets[i][0]
    image.src = mes_projets[i][1]
    date.innerHTML = mes_projets[i][3]
    date.style.marginRight = 'auto'

    //Lien

    projetBlock.setAttribute('onclick', 'redirectToProject(this.id)')


    projetBlock.appendChild(title)
    projetBlock.appendChild(image)
    projetBlock.appendChild(rowBalises)

    projets_row.appendChild(projetBlock)
}

function changePreview(projet_id) {

    // Je crée une variable currentPicture pour vérifier si l'image n'est pas déjà affichée. Si elle l'est
    // Je ne fais rien
    if (currentPictureId != projet_id) {

        // Création des balises affichant les technos

        informationContainer.remove()
        createTechnoBalises(projet_id, technoBox)

        // Je supprime l'image et je l'a recrée pour activer l'animation css (pas très propre lol)
        previewPicture.remove()
        previewPicture = document.createElement('img')
        previewBox.appendChild(previewPicture)
        previewPicture.setAttribute('id', projet_id)
        previewPicture.setAttribute('class', 'preview-img')



        previewPicture.src = mes_projets[projet_id][1]
        previewPicture.setAttribute('onclick', 'redirectToProject(this.id)')
        previewPicture.style.animation = 'animation: 1s ease-in-out 0s 1 slideInFromLeft;'

        currentPictureId = projet_id
    } else {

    }
}

function createTechnoBalises(projet_id, div) { // création d'une fonction pour créer les balises en fonctions de l'ID du projet 
    informationContainer = document.createElement('div')
    informationContainer.setAttribute('id', 'informationContainer')
    informationContainer.setAttribute('class', 'flexbox')

    date = document.createElement('p')
    date.innerHTML = mes_projets[projet_id][3]
    date.style.marginRight = 'auto'
    informationContainer.appendChild(date)

    for (t in mes_projets[projet_id][2]) {
        techno = document.createElement('p')
        techno.innerHTML = mes_projets[projet_id][2][t]

        techno.setAttribute('class', getTechnoColor(mes_projets[projet_id][2][t]))
        techno.classList.add('techno')
        techno.classList.add('desktop')

        informationContainer.appendChild(techno)
    }

    div.appendChild(informationContainer)
}

function createTechnoBalisesMobile(projet_id, div) { // création d'une fonction pour créer les balises en fonctions de l'ID du projet 
    for (t in mes_projets[projet_id][2]) {
        techno = document.createElement('p')

        techno.innerHTML = mes_projets[projet_id][2][t]

        techno.setAttribute('class', getTechnoColor(mes_projets[projet_id][2][t]))
        techno.classList.add('techno')
        techno.classList.add('mobile')

        div.appendChild(techno)
    }
}

function getTechnoColor(techno) {
    switch (techno) {
        case 'VueJs':
            return '#00e676 green accent-3'
        case 'Angular':
            return 'red'
        case 'Symfony':
            return 'grey'
        case 'HTML/CSS':
            return 'blue'
        case 'PHP':
            return '#3949ab indigo darken-1'
        case 'Javascript':
            return '#ffd600 yellow accent-4'
    }
}

function redirectToProject(projet_id) {
    window.open(mes_projets[projet_id[0]][4])
}







