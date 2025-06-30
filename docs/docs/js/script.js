document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para as ROTAS (URLs) correspondentes
    const pageMap = {
        'btnQuemCriouPython': '/docs/quem-criou-python', // Rota Flask
        'btnSobrePython': '/docs/sobre-python',         // Rota Flask
        'btnRecursos': '/docs/recursos',
        'btnTutoriais': '/docs/tutoriais',
        'btnComunidade': '/docs/comunidade',
        'btnProjetos': '/docs/projetos',
        'btnFerramentas': '/docs/ferramentas',
        'btnNoticias': '/docs/noticias',
        'btnEventos': '/docs/eventos',
        'btnContato': '/docs/contato',
        'btnFAQ': '/docs/faq',
        'btnTermos': '/docs/termos'
    };

    // Percorre cada entrada no mapa para adicionar o event listener
    for (const buttonId in pageMap) {
        if (pageMap.hasOwnProperty(buttonId)) {
            const button = document.getElementById(buttonId);
            if (button) { // Verifica se o botão existe no HTML
                button.addEventListener('click', function() {
                    const routePath = pageMap[buttonId];
                    window.location.href = routePath; // Redireciona para a rota Flask
                });
            } else {
                console.warn(`Botão com ID "${buttonId}" não encontrado no HTML.`);
            }
        }
    }
});