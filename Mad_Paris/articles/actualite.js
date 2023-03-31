console.log('activités')

array = [
    ["du 14 décembre 2022 au 19 mars 2023", // pour cibler cet élément array[0][0]
        "La table dréssée de ouf", //array[0][1]
        'https://madparis.fr/local/cache-responsive/cache-1090/18b95fa2bbe4b753354e3f58df57f913.jpg.webp?1637247992' //array[0][2]
    ],
    ["22 Fev 2023", //array[1][0]
        "Années 80. Mode Design Et graphisme en France", //array[1][1]
        'https://madparis.fr/IMG/logo/affichesmatdrapeauannees80-118_5x175cm_1_1_-3-2.jpg?1664874019' //array[1][2]
    ],
    ["23 Fev 2023", //array[2][0]
        "Decouvrez le regard de la créatrice Lea Sarra sur l'exposition “Étienne + Robial”", //array[2][1]
        'https://madparis.fr/local/cache-responsive/cache-600/2492c266cee895ca964c788b3658e3a0.jpg.webp?1674222293' //array[2][2] et ainsi de suite
    ],
    ["24 Fev 2023",
        "Decouvrez le regard de la créatrice Lea Sarra sur l'exposition “Étienne + Robial”",
        'https://madparis.fr/local/cache-responsive/cache-600/2492c266cee895ca964c788b3658e3a0.jpg.webp?1674222293'
    ],
]

let cardsContainer = document.getElementById('cards-container-actualite') // On crée une variable cardsContainer qui va récupérer la div qui a pour identifiant id ='cards-container-actualite'
// dans le HTML. Cela va servir à cibler la div dans laquelle on veut créer les cartes

// tant que i est dans array
// i va parcourir le tableau array
// au début i = 0 donc array[i] = le premier article dans le tableau
// et donc array[0][0] = première information du premier tableau
for (let i in array) {

    // Création des div

    let containerDiv = document.createElement('div') // cette ligne sert à créer une div que je pourrai appeler avec 'containerDiv'
    let cardDiv = document.createElement('div') // cette ligne sert à créer une div que je pourrai appeler avec 'cardDiv'
    let card_title = document.createElement('div')

    // Création du contenu

    let date = document.createElement('p') // cette ligne sert à créer un paragraphe que je pourrai appeler avec la variable 'date'
    let texte = document.createElement('p')// cette ligne sert à créer une paragraphe que je pourrai appeler avec la variable 'texte'

    // Pour récupérer la date d'aujourd'hui
    dateObject = new Date()
    dateObject.toLocaleDateString('fr-Fr',{day:'numeric', month:'long', year :'numeric'})

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



