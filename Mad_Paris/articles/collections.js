array = [
    ["21 Fev 2023",
        "Decouvrez le regard de la créatrice Lea Sarra sur l'exposition “Étienne + Robial”",
        'https://madparis.fr/local/cache-responsive/cache-1090/c3d22819a82e057912679adbdcb88d5e.jpg.webp?1675178189'
    ],
    ["22 Fev 2023",
        "Decouvrez le regard de la créatrice Lea Sarra sur l'exposition “Étienne + Robial”",
        'https://madparis.fr/local/cache-responsive/cache-600/2492c266cee895ca964c788b3658e3a0.jpg.webp?1674222293'
    ],
    ["23 Fev 2023",
        "Decouvrez le regard de la créatrice Lea Sarra sur l'exposition “Étienne + Robial”",
        'https://madparis.fr/local/cache-responsive/cache-600/2492c266cee895ca964c788b3658e3a0.jpg.webp?1674222293'
    ],
    ["24 Fev 2023",
        "Decouvrez le regard de la créatrice Lea Sarra sur l'exposition “Étienne + Robial”",
        'https://madparis.fr/local/cache-responsive/cache-600/2492c266cee895ca964c788b3658e3a0.jpg.webp?1674222293'
    ],
]
     
    cardsContainer = document.getElementById('cards-container-collections')
    for (let i in array) {

        // Création des div
    
        let containerDiv = document.createElement('div') // cette ligne sert à créer une div que je pourrai appeler avec 'containerDiv'
        let cardDiv = document.createElement('div') // cette ligne sert à créer une div que je pourrai appeler avec 'cardDiv'
        let card_title = document.createElement('div')
    
        // Création du contenu
    
        let date = document.createElement('p') // cette ligne sert à créer un paragraphe que je pourrai appeler avec la variable 'date'
        let texte = document.createElement('p')// cette ligne sert à créer une paragraphe que je pourrai appeler avec la variable 'texte'
    
        date.innerHTML = '<br>' + array[i][0] + '</br>' // [0] = la date  -------- date étant un <p></p> innerHTML sert à mettre du contenu entre les balises
        texte.innerHTML = "<strong>" + array[i][1] + "</strong>" //[1] = le titre ----- donc dans la balise <p></p> de texte je mets la variable array[i][1] qui est égale au titre
      
        // attribution des classes
    
        containerDiv.classList.add('mx-2')
     //.classList.add permet d'ajouter des class. Ici on ajoute la class .mx-2
        cardDiv.classList.add('card-perso')
        cardDiv.classList.add('p-4')

        //Attribution du style (Obligatoire car le background image change en focntion de l'article)

        cardDiv.style.background = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url('+ array[i][2] +')'
        cardDiv.style.backgroundSize = 'cover'
        cardDiv.style.backgroundPosition = 'center'
    
        // Enboitement des div
        card_title.appendChild(date)
        card_title.appendChild(texte)
    
        cardDiv.appendChild(card_title)
        containerDiv.appendChild(cardDiv) //appendChild permet d'insérer des éléments dans d'autre. Ici dans l'élément containerDiv je lui ajoute cardDiv.
    
    
        cardsContainer.appendChild(containerDiv) //Cards container est relié à une div dans notre html par son id.  voi
    }



