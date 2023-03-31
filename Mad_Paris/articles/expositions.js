array = [
    ['Exposition en&nbsp;cours',
    'https://madparis.fr/IMG/logo/affichesmatdrapeauannees80-118_5x175cm_1_1_-3-2.jpg?1664874019'
    ],
    ['Prochaine expositions',
    'https://madparis.fr/local/cache-responsive/cache-400/c708d25577146edd0f200b0c0402f113.jpg.webp?1647511983'
    ],
    ['Exposition terminées',
    'https://madparis.fr/local/cache-responsive/cache-400/2e3cfbc72e28b7b6252bfac25cec46c6.jpg.webp?1635231318'
    ],
    ['Exposition itinérantes',
    'https://madparis.fr/local/cache-responsive/cache-1090/c3d22819a82e057912679adbdcb88d5e.jpg.webp?1675178189'
    ],
    ['Soutenez nos&nbsp;expositions',
    'https://madparis.fr/local/cache-responsive/cache-400/f9f221716c658609c537b8124f0878bc.jpg.webp?1635231319'
    ],
    ['Hors-les-murs',
    'https://madparis.fr/local/cache-responsive/cache-400/1c2c16a24cfed61e08ce084124e472df.jpg.webp?1670413938'
    ],
]

cardsContainer = document.getElementById('cards-container')
for (let i in array) {

    // Création des div

    let expositionCard = document.createElement('div') // cette ligne sert à créer une div que je pourrai appeler avec 'containerDiv'
    let cardContent = document.createElement('div') // cette ligne sert à créer une div que je pourrai appeler avec 'cardDiv'

    let title = document.createElement('p')
    let arrow = document.createElement('img')

    title.innerHTML = array[i][0]
    arrow.src = './img/arrow.png'

    //contenu
    cardContent.appendChild(title)
    cardContent.appendChild(arrow)

    //style et classe
    expositionCard.classList.add('expositions-card')
    expositionCard.style.background = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url('+ array[i][1] +')'
    expositionCard.style.backgroundSize = 'cover'
    expositionCard.style.backgroundPosition = 'center'

    cardContent.classList.add('py-2')

    title.classList.add('col-11')
    title.classList.add('p-2')




    expositionCard.appendChild(cardContent)
    cardsContainer.appendChild(expositionCard)
}