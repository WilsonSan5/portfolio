mes_projets = [
    ['Atypik House', 'img/Atypik_house.jpg'],
    ['Mad Paris', 'img/Mad_Paris.png'],
    ['Pokédex', 'img/landing-img.jpg'],
    ['Appli météo', 'img/Atypik_house.jpg'],
]

projets_row = document.getElementById('projets-row')

previewPicture = document.getElementById('preview-img')
previewBox = document.getElementById('preview-box')

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
    if (currentPictureId !=  projet_id) {
    
        // Je supprime l'image et je l'a recrée pour activer l'animation css (pas très propre lol)
        previewPicture.remove()
        previewPicture = document.createElement('img')
        previewBox.appendChild(previewPicture)
        previewPicture.setAttribute('id', 'preview-img')

        previewPicture.src = mes_projets[projet_id][1]
        previewPicture.style.animation = 'animation: 1s ease-out 0s 1 slideInFromLeft;'

        currentPictureId = projet_id
    } else {
        
    }
}







