document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para os NOMES DE ARQUIVOS HTML (ou URLs completas)
    const pageMap = {
        'btnQuemCriouPython': 'docs/quem-criou-python.html', // AGORA DENTRO DE 'docs/'
        'btnSobrePython': 'docs/sobre-python.html',         // AGORA DENTRO DE 'docs/'
        'btnRecursos': 'docs/recursos.html',               // AGORA DENTRO DE 'docs/'
        'btnTutoriais': 'docs/tutoriais.html',             // AGORA DENTRO DE 'docs/'
        'btnComunidade': 'docs/comunidade.html',           // Já estava aqui, mantido
        'btnProjetos': 'docs/projetos.html',               // Já estava aqui, mantido
        'btnFerramentas': 'docs/ferramentas.html',         // Já estava aqui, mantido
        'btnNoticias': 'docs/noticias.html',               // AGORA DENTRO DE 'docs/'
        'btnEventos': 'docs/eventos.html',                 // AGORA DENTRO DE 'docs/'
        'btnContato': 'docs/contato.html',                 // AGORA DENTRO DE 'docs/'
        'btnFAQ': 'docs/faq.html',                         // AGORA DENTRO DE 'docs/'
        'btnTermos': 'docs/termos.html'                    // AGORA DENTRO DE 'docs/'
    };

    // Percorre cada entrada no mapa para adicionar o event listener
    for (const buttonId in pageMap) {
        if (pageMap.hasOwnProperty(buttonId)) {
            const button = document.getElementById(buttonId);
            if (button) { // Verifica se o botão existe no HTML
                button.addEventListener('click', function() {
                    const pagePath = pageMap[buttonId];
                    // Redireciona para o arquivo HTML correspondente
                    window.location.href = pagePath; 
                });
            } else {
                console.warn(`Botão com ID "${buttonId}" não encontrado no HTML.`);
            }
        }
    }
});