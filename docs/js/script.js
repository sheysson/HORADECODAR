const colors = ['#f86024ff', '#FFFF00', '#0909ceff'];   // Array de cores para o fundo
let currentColorIndex = 0; // Índice da cor atual   
// Função para mudar a cor de fundo
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Atualiza o índice para a próxima cor
}       

// Muda a cor de fundo a cada 3 segundos
setInterval(changeBackgroundColor, 3000); // 3000 milissegundos = 3 segundos   

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

document.addEventListener('DOMContentLoaded', function () {
    // Mapeamento dos IDs dos botões para os NOMES DE ARQUIVOS HTML (ou URLs completas)
    const pageMap = {
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

    // Percorre cada entrada no mapa para adicionar o event listener
    for (const buttonId in pageMap) {
        const button = document.getElementById(buttonId);
        if (button) { // Verifica se o botão existe no HTML
            button.addEventListener('click', function () {

                window.location.href = pageMap[buttonId];
            });
        }
        else {
            console.warn(`Botão com ID "${buttonId}" não encontrado no HTML.`);
        }
    }
});

