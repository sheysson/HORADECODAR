document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para os NOMES DE ARQUIVOS HTML (ou URLs completas)
    const pageMap = {
        'btnQuemCriouPython': 'HORADECODAR/docs/quem-criou-python.html', 
        'btnSobrePython':     'HORADECODAR/docs/sobre-python.html',         
        'btnRecursos':        'HORADECODAR/docs/recursos.html',               
        'btnTutoriais':       'HORADECODAR/docs/tutoriais.html',             
        'btnComunidade':      'HORADECODAR/docs/comunidade.html',           
        'btnProjetos':        'HORADECODAR/docs/projetos.html',              
        'btnFerramentas':     'HORADECODAR/docs/ferramentas.html',         
        'btnNoticias':        'HORADECODAR/docs/noticias.html',               
        'btnEventos':         'HORADECODAR/docs/eventos.html',                 
        'btnContato':         'HORADECODAR/docs/contato.html',                 
        'btnFAQ':             'HORADECODAR/docs/faq.html',                         
        'btnTermos':          'HORADECODAR/docs/termos.html'                    
    };
 
    // Percorre cada entrada no mapa para adicionar o event listener
    for (const buttonId in pageMap) {
        const button = document.getElementById(buttonId);
        if (button) { // Verifica se o botão existe no HTML
                button.addEventListener('click', function() {
                  
                    window.location.href = pageMap[buttonId];   
                });
        } 
        else {
            console.warn(`Botão com ID "${buttonId}" não encontrado no HTML.`);
        }
    }
});