# Products-CRUD

Este é um projeto de CRUD de produtos desenvolvido em Angular, com uma interface de usuário construída utilizando Angular Material e dados mockados com JSON Server. O objetivo deste projeto é permitir que o usuário visualize, crie, edite e exclua produtos.

## 📚 Funcionalidades

- **Listar produtos**: Visualização de todos os produtos registrados no sistema.
- **Adicionar produto**: Possibilidade de adicionar novos produtos ao sistema.
- **Editar produto**: Permite a edição dos detalhes de um produto existente.
- **Excluir produto**: Opção para remover produtos do sistema.

## 📑 Tecnologias Utilizadas

- **Angular version 15.2.11**: Framework front-end para desenvolvimento da aplicação.
- **Angular Material**: Biblioteca de componentes UI para Angular.
- **JSON Server**: Ferramenta para mockar dados de API RESTful para desenvolvimento e testes.

## 📖 Pré-requisitos

Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

- **Node.js**: [Instalar Node.js](https://nodejs.org/)
- **Angular CLI**: Instale via npm:

```bash
  npm install -g @angular/cli
```

## 💻 Como rodar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/livbrandao/Products-CRUD.git
cd Products-CRUD
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o JSON Server para mockar a API RESTful:

```bash
npx json-server --watch mocks/db.json
```

4. Em outra janela de terminal, inicie o servidor Angular:

```bash
npm start
```

5. Abra o navegador e acesse `http://localhost:4200` para ver a aplicação em funcionamento.

```bash

```

## 🗂️ Estrutura de Pastas

- src/app: Contém os componentes e serviços principais do CRUD de produtos.
- mocks/db.json: Arquivo JSON usado pelo JSON Server para armazenar dados mockados.

## 🧑‍💻 Autora

Lívia Brandão
