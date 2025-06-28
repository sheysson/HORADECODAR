
from flask import Flask, render_template

app = Flask(__name__)

# Rota para a página principal (index.html)
@app.route('/')
def index():
    return render_template('index.html')

# Rotas para as outras páginas HTML
@app.route('/quem-criou-python')
def quem_criou_python():
    return render_template('quem_criou_python.html')

@app.route('/sobre-python')
def sobre_python():
    return render_template('sobre_python.html')

@app.route('/recursos')
def recursos():
    return render_template('recursos.html')

@app.route('/tutoriais')
def tutoriais():
    return render_template('tutoriais.html')

@app.route('/comunidade')
def comunidade():
    return render_template('comunidade.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/ferramentas')
def ferramentas():
    return render_template('ferramentas.html')

@app.route('/noticias')
def noticias():
    return render_template('noticias.html')

@app.route('/eventos')
def eventos():
    return render_template('eventos.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/termos')
def termos():
    return render_template('termos.html')

# Certifique-se de que o Flask serve os arquivos estáticos corretamente.
# Por padrão, ele serve a pasta 'static'.
# Se o seu script.js e style.css estão em 'static/', não precisa de configuração extra.

if __name__ == '__main__':
    # Para desenvolvimento, use debug=True para recarregar automaticamente e ver erros.
    # Em produção, defina debug=False.
    app.run(debug=True)