console.log('main js')

competencesSection = document.getElementById('mes-compétences-section')
mesProjetsSection = document.getElementById('mes-projets-section')
langagesContainer = document.getElementById('Langages')
frameworksContainer = document.getElementById('Frameworks')

burger = document.getElementById('burger')
croix = document.getElementById('croix')
scrollmenu = document.getElementById('scrollmenu')
scrollMenuIsActive = false


function responsive() {

    // PLUS GRAND QUE 1000 PX
    if (window.matchMedia("(min-width: 1000px)").matches) {
        console.log('add container') // If media query matches
        competencesSection.classList.add('container')
        mesProjetsSection.classList.add('container')
        langagesContainer.classList.remove('container')
        frameworksContainer.classList.remove('container')
        scrollmenu.style.transform = 'translateX(100%)'

        // PLUS PETIT QUE 1000 PX
    } else {
        competencesSection.classList.remove('container')
        mesProjetsSection.classList.remove('container')
        langagesContainer.classList.add('container')
        frameworksContainer.classList.add('container')
    }
}

function toggleMenu() {
    if (scrollMenuIsActive) {
        scrollmenu.style.transform = 'translateX(100%)'
        setTimeout(() => { scrollmenu.style.display = 'none' },300)
        scrollMenuIsActive = false
    } else {
        scrollmenu.style.display = 'flex'
        setTimeout(() => {
            scrollmenu.style.transform = 'translateX(0%)'
        }, 1)
        scrollMenuIsActive = true
    }
}

responsive() // Call listener function at run time
window.addEventListener('resize', responsive) // Attach listener function on state changes

burger.addEventListener('click', () => {
    toggleMenu()
})

croix.addEventListener('click', () => {
    toggleMenu()
})

