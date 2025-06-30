document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para os NOMES DE ARQUIVOS HTML (ou URLs completas)
    const pageMap = {
        'btnQuemCriouPython': '/quem-criou-python.html', // AGORA DENTRO DE 'docs/'
        'btnSobrePython': '/sobre-python.html',         // AGORA DENTRO DE 'docs/'
        'btnRecursos': '/recursos.html',               // AGORA DENTRO DE 'docs/'
        'btnTutoriais': '/tutoriais.html',             // AGORA DENTRO DE 'docs/'
        'btnComunidade': '/comunidade.html',           // Já estava aqui, mantido
        'btnProjetos': '/projetos.html',               // Já estava aqui, mantido
        'btnFerramentas': '/ferramentas.html',         // Já estava aqui, mantido
        'btnNoticias': '/noticias.html',               // AGORA DENTRO DE 'docs/'
        'btnEventos': '/eventos.html',                 // AGORA DENTRO DE 'docs/'
        'btnContato': '/contato.html',                 // AGORA DENTRO DE 'docs/'
        'btnFAQ': '/faq.html',                         // AGORA DENTRO DE 'docs/'
        'btnTermos': '/termos.html'                    // AGORA DENTRO DE 'docs/'
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