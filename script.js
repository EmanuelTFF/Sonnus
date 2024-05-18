const menuToggle = document.querySelector('.menu');
const navMenu = document.querySelector('menu-nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const sideMenu = document.querySelector('.side-menu');

    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
    });

    menuOverlay.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });

    sideMenu.addEventListener('click', event => {
        event.stopPropagation(); // Impede que o clique no menu feche o menu
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); // Impede o comportamento padrão do link

            const sectionId = event.target.getAttribute('href').substring(1); // Obtém o ID da seção alvo

            const section = document.getElementById(sectionId); // Obtém a seção alvo pelo ID

            section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção alvo
        });
    });
});
