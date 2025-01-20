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
    const menuItems = document.querySelectorAll('.navigation .nav-menu li a, .side-menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            const target = event.target;
            const href = target.getAttribute('href');

            if (href === "index.html") {
                // Se o link for "index.html", permite a navegação padrão
                return;
            } else {
                // Caso contrário, faz a rolagem suave para a seção correspondente
                event.preventDefault();
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    const yOffset = -70; // Ajuste conforme necessário para a altura do cabeçalho fixo
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        });
    });
});




