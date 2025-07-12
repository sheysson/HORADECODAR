document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos IDs dos botões para os NOMES DE ARQUIVOS HTML (ou URLs completas)
    const pageMap = {
        'btnQuemCriouPython': '/quem-criou-python.html', 
        'btnSobrePython':     '/sobre-python.html',         
        'btnRecursos':        '/recursos.html',               
        'btnTutoriais':       '/tutoriais.html',             
        'btnComunidade':      '/comunidade.html',           
        'btnProjetos':        '/projetos.html',              
        'btnFerramentas':     '/ferramentas.html',         
        'btnNoticias':        '/noticias.html',               
        'btnEventos':         '/eventos.html',                 
        'btnContato':         'contato.html',                 
        'btnFAQ':             'faq.html',                         
        'btnTermos':          'termos.html'                    
    };
 
    // Percorre cada entrada no mapa para adicionar o event listener
    for (const buttonId in pageMap) { 
        // Obtém o botão pelo ID  
        const button = document.getElementById(buttonId);
        // Verifica se o botão existe no HTML e adiciona o event listener   
        if (button) { // Verifica se o botão existe no HTML
            // Adiciona o event listener para o clique do botão
                button.addEventListener('click', function() {
                    // Redireciona para a página correspondente
                    // Verifica se o valor é uma URL completa ou um caminho relativo
                    if (pageMap[buttonId].startsWith('http://') || pageMap[buttonId].startsWith('https://')) {
                        // Se for uma URL completa, redireciona diretamente
                        window.location.href = pageMap[buttonId];
                    } else {
                        // Se for um caminho relativo, constrói a URL completa
                        const baseUrl = window.location.origin; // Obtém a origem da URL atual
                        window.location.href = baseUrl + pageMap[buttonId];
                    }
                    // Alternativamente, se você quiser usar apenas o caminho relativo:
                    //  //  window.location.href = pageMap[buttonId];
                    //  //  Se você quiser usar o caminho relativo, descomente a linha acima
                    //  //  e comente a linha abaixo
                    //  //  window.location.href = pageMap[buttonId];
                    //  //  Se você quiser usar o caminho relativo, descomente a linha acima
                    //  //  e comente a linha abaixo            
                   window.location.href = pageMap[buttonId];   
                    });
        } 
        else {  // Se o botão não for encontrado, exibe um aviso no console
            // Isso pode ajudar na depuração se você esquecer de adicionar um botão ao HTML     
            console.warn(`Botão com ID "${buttonId}" não encontrado no HTML.`);
        }       
    }
});