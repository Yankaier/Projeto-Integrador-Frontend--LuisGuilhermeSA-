

# Projeto-Integrador-FrontEnd-LuisGuilhermeSA

# Introdução #
Informaçãoes sobre o **Tema do Projeto Integrador da Turma B, Responsavel pela criação e desenvolvimento do projeto, assim como Responsavel pela Avaliação Do Projeto**. 
# Professor responsavel pela Avaliação do Projeto:
 **Professor Jeofton Costa Melo**
 
 # Sistema de Visualização de Pacientes Agendados

## 📋 Sobre o Projeto

Este projeto tem como objetivo oferecer uma interface simples e eficiente para a **Visualização de Pacientes Agendados**, permitindo que profissionais e equipes de recepção acompanhem os agendamentos de forma clara e organizada.

A identidade visual do projeto segue uma paleta de cores **azul clínico**, transmitindo confiança, higiene e profissionalismo — características associadas ao ambiente da saúde.

## 🎯 Objetivos

- Centralizar a visualização dos agendamentos de pacientes.
- Facilitar a consulta rápida de horários, nomes e status dos atendimentos.
- Reduzir erros e retrabalho na organização da agenda.
- Proporcionar uma experiência visual limpa e intuitiva para os usuários do sistema.

## ✨ Funcionalidades

- [x] Listagem de pacientes agendados
- [x] Filtro por data / horário
- [x] Busca por nome do paciente
- [x] Indicação de status do agendamento (confirmado, pendente, cancelado)
- [x] Interface responsiva



## 🎨 Identidade Visual

- **Paleta de cores:** tons de azul e verde clínico
- **Logo:** símbolo único, sem texto/nome, representando a proposta de cuidado e organização

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JAVASCRIPT

## 🚀 Como Executar o Projeto

```bash
# Clone este repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd nome-do-projeto

# Instale as dependências (se aplicável)
# npm install

# Execute o projeto
# npm start
```

## 📁 Estrutura do Projeto

```
projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── (imagens, ícones, logo)
└── README.md
```

## 👤 Autor

Desenvolvido por [Luis Guilherme Soares Amorim]. com a Supervisao do Professor Jeofton

## 📄 Licença

Este projeto está sob a licença [MIT].

CODE REVIEW - Feita por Letícia Correia Felix Ferreira no dia 27/08/2026.


    O projeto apresenta uma boa estrutura básica de HTML, utilizando corretamente DOCTYPE, html, head, body, meta charset e viewport. Os formulários também utilizam tipos de campos adequados e recursos como required e autocomplete. Como ponto negativo, o formulário utiliza action="#", não possuindo um processamento real dos dados.
    O uso de HTML semântico é um dos pontos fortes do projeto. Foram utilizadas corretamente tags como header, nav, main, section e footer, além de fieldset, legend e elementos adequados para a tabela. Também há preocupação com acessibilidade através do uso de aria, alt e scope.
    O projeto utiliza uma imagem como logomarca, com alt, width e height, o que é positivo. Não foram utilizados vídeos ou áudios, mas isso não é necessariamente um problema, pois não são necessários para a proposta do sistema. A imagem, porém, está hospedada externamente, criando uma dependência de outro servidor.
   
    Boas práticas
    O código apresenta boa organização e legibilidade. No CSS, o uso de variáveis facilita a manutenção, enquanto as media queries tornam o projeto responsivo. Também há preocupação com acessibilidade, principalmente nos estados de foco e na redução de animações. Como melhoria, alguns seletores poderiam ser substituídos por classes específicas para facilitar futuras alterações.
    Defeitos
    Os principais defeitos são o formulário sem processamento real, a pouca estilização do select e do footer e alguns seletores CSS que dependem da posição dos elementos. As datas e contatos apresentados também parecem ser apenas dados fictícios para teste.
    Qualidades
    O projeto se destaca pela boa estrutura, organização, semântica, acessibilidade e responsividade. O HTML e o CSS trabalham de forma consistente, e a identidade visual é adequada à proposta de um sistema clínico. De forma geral, apresenta poucos problemas e necessita principalmente de pequenos ajustes e melhorias funcionais.
