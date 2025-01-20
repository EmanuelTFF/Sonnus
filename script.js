const menuToggle = document.querySelector('.menu');
const navMenu = document.querySelector('menu-nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu'); // Botão de abrir/fechar
    const sideMenu = document.querySelector('.side-menu'); // Menu lateral
    const menuOverlay = document.querySelector('.menu-overlay'); // Sobreposição de fundo

    // Verifique se os elementos existem
    if (!menuToggle || !sideMenu || !menuOverlay) {
        console.error('Elementos do menu não encontrados no DOM.');
        return;
    }

    // Alterna o menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('menu-open');
        menuToggle.classList.toggle('close-icon', isOpen); // Alterna o ícone do botão
    });

    // Fecha o menu ao clicar na sobreposição
    menuOverlay.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
        menuToggle.classList.remove('close-icon');
    });

    // Fecha o menu ao clicar em um link
    const menuItems = document.querySelectorAll('.side-menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); // Impede o comportamento padrão
            const sectionId = event.target.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
            }
            // Fecha o menu
            document.body.classList.remove('menu-open');
            menuToggle.classList.remove('close-icon');
        });
    });
});

