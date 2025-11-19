document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link (navegação instantânea)
            e.preventDefault();

            // Pega o ID da seção de destino (ex: #gel-base)
            const targetId = link.getAttribute('href');
            
            // Encontra a seção de destino
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Rola suavemente para a seção
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // -70px para compensar o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});