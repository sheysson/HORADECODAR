document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para os NOMES DE ARQUIVOS HTML (ou URLs completas)
    const pageMap = {
        'btnHome':            'index.html', 
        'btnQuemCriouPython': 'quem-criou-python.html', 
        'btnSobrePython':     'sobre-python.html',         
        'btnRecursos':        'recursos.html',               
        'btnTutoriais':       'tutoriais.html',             
        'btnComunidade':      'comunidade.html',           
        'btnProjetos':        'projetos.html',              
        'btnFerramentas':     'ferramentas.html',         
        'btnNoticias':        'noticias.html',               
        'btnEventos':         'eventos.html',                 
        'btnContato':         'contato.html',                 
        'btnFAQ':             'faq.html',                         
        'btnTermos':          'termos.html'                    
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