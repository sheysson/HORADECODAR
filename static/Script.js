document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para as ROTAS (URLs) correspondentes
    const pageMap = {
        'btnQuemCriouPython': '/quem-criou-python', // Rota Flask
        'btnSobrePython': '/sobre-python',         // Rota Flask
        'btnRecursos': '/recursos',
        'btnTutoriais': '/tutoriais',
        'btnComunidade': '/comunidade',
        'btnProjetos': '/projetos',
        'btnFerramentas': '/ferramentas',
        'btnNoticias': '/noticias',
        'btnEventos': '/eventos',
        'btnContato': '/contato',
        'btnFAQ': '/faq',
        'btnTermos': '/termos'
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