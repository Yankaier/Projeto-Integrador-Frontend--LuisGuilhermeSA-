// Dá processamento real ao formulário de agendamento (antes só tinha action="#")
// e aos filtros de busca, sem depender de um back-end.

const formAgendamento = document.getElementById('form-agendamento');
const formFiltros = document.getElementById('form-filtros');
const corpoTabela = document.getElementById('corpo-tabela-pacientes');
const mensagemVazia = document.getElementById('mensagem-vazia');
const limparFiltrosBtn = document.getElementById('limpar-filtros');

const rotulosStatus = {
    confirmado: 'Confirmado',
    pendente: 'Pendente',
    cancelado: 'Cancelado',
};

function formatarData(valorISO) {
    if (!valorISO) return '';
    const [ano, mes, dia] = valorISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

function criarLinha({ nome, contato, data, status }) {
    const linha = document.createElement('tr');
    linha.classList.add('linha-nova');
    linha.dataset.nome = nome.toLowerCase();
    linha.dataset.data = data;

    linha.innerHTML = `
        <td data-rotulo="Nome">${nome}</td>
        <td data-rotulo="Contato">${contato}</td>
        <td data-rotulo="Data">${formatarData(data)}</td>
        <td data-rotulo="Status"><span class="status status--${status}">${rotulosStatus[status]}</span></td>
    `;

    return linha;
}

function atualizarContadores() {
    const linhas = corpoTabela.querySelectorAll('tr');
    const contagem = { confirmado: 0, pendente: 0, cancelado: 0 };

    linhas.forEach((linha) => {
        if (linha.style.display === 'none') return;
        const status = linha.querySelector('.status');
        if (!status) return;
        const chave = Object.keys(rotulosStatus).find((s) => status.classList.contains(`status--${s}`));
        if (chave) contagem[chave] += 1;
    });

    document.getElementById('contagem-confirmado').textContent = contagem.confirmado;
    document.getElementById('contagem-pendente').textContent = contagem.pendente;
    document.getElementById('contagem-cancelado').textContent = contagem.cancelado;
}

formAgendamento.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(formAgendamento);
    const novaLinha = criarLinha({
        nome: dados.get('nome').trim(),
        contato: dados.get('contato').trim(),
        data: dados.get('data'),
        status: dados.get('status'),
    });

    corpoTabela.prepend(novaLinha);
    formAgendamento.reset();
    atualizarContadores();
    novaLinha.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

function aplicarFiltros(evento) {
    if (evento) evento.preventDefault();

    const termoBusca = document.getElementById('busca').value.trim().toLowerCase();
    const dataFiltro = document.getElementById('data-filtro').value;
    let algumVisivel = false;

    corpoTabela.querySelectorAll('tr').forEach((linha) => {
        const nomeConfere = !termoBusca || linha.dataset.nome.includes(termoBusca);
        const dataConfere = !dataFiltro || linha.dataset.data === dataFiltro;
        const visivel = nomeConfere && dataConfere;
        linha.style.display = visivel ? '' : 'none';
        if (visivel) algumVisivel = true;
    });

    mensagemVazia.hidden = algumVisivel;
    atualizarContadores();
}

formFiltros.addEventListener('submit', aplicarFiltros);

limparFiltrosBtn.addEventListener('click', () => {
    setTimeout(aplicarFiltros, 0);
});

// Garante que as linhas iniciais (vindas do HTML) tenham os data-attributes
// usados pelos filtros, já que foram escritas estaticamente na página.
corpoTabela.querySelectorAll('tr').forEach((linha) => {
    if (!linha.dataset.nome) {
        const nome = linha.children[0].textContent.trim();
        linha.dataset.nome = nome.toLowerCase();
    }
    if (!linha.dataset.data) {
        const dataTexto = linha.children[2].textContent.trim();
        const [dia, mes, ano] = dataTexto.split('/');
        linha.dataset.data = `${ano}-${mes}-${dia}`;
    }
});

atualizarContadores();