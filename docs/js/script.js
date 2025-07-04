// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Abre uma nova aba com a URL especificada.
     * @param {string} url - Caminho do arquivo HTML a ser aberto.
     */
    function abrirNovaAba(url) {
        window.open(url, '_self');
    }

    // Mapeamento dos IDs dos botões para os respectivos arquivos HTML
    const botoesConfig = {
        'btnHome': 'index.html',
        'btnQuemCriouPython': 'quem-criou-python.html',
        'btnSobrePython': 'sobre-python.html',
        'btnRecursos': 'recursos.html',
        'btnTutoriais': 'tutoriais.html',
        'btnComunidade': 'comunidade.html',
        'btnProjetos': 'projetos.html',
        'btnFerramentas': 'ferramentas.html',
        'btnNoticias': 'noticias.html',
        'btnEventos': 'eventos.html',
        'btnContato': 'contato.html',
        'btnFAQ': 'faq.html',
        'btnTermos': 'termos.html'
    };

    // Percorre cada par ID/URL e adiciona o listener de clique ao botão correspondente
    Object.entries(botoesConfig).forEach(([idBotao, url]) => {
        const botao = document.getElementById(idBotao);
        if (botao) {
            botao.addEventListener('click', () => abrirNovaAba(url));
        } else {
            // Exibe um aviso no console caso o botão não seja encontrado no DOM
            console.warn(`Botão com ID "${idBotao}" não encontrado.`);
        }
    });
});