const city = document.querySelector('.city-golotha');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    city.style.backgroundPositionY = offset * 0.5 + 'px'
})

// HEADER SCROLL CHANGE

const header = document.querySelector('header');

const navOptions = {
    threshold: 0.2
};

const navObserver = new IntersectionObserver
(function(
    entries, 
    navObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
        });
}, 
navOptions);

navObserver.observe(city);


// Dice drop

const diceDrop = () => {

const btn = document.querySelector('.dice-btn');
const diceMenu = document.querySelector('.dice-drop')

btn.addEventListener('click', () => {
    diceMenu.classList.toggle('dice-active');
    btn.classList.toggle('dice-drop-drop')
});

}

diceDrop();

const burgerDrop = () => {
    const burger = document.querySelector('.burger');
    const pageLinks = document.querySelector('.page-links');

    burger.addEventListener('click', () => {
        pageLinks.classList.toggle('page-links-active');
        burger.classList.toggle('burger-active');
    });
}

burgerDrop();