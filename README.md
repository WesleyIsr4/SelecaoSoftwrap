<<<<<<< HEAD
## 📝 Conteúdo

<p align="center">
<a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#tech">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#decições">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 🧐 Sobre <a name = "about"></a>

A Aplicação feita é um teste de habilidades proposta pela **Softwrap** :rocket:.<br/>
A aplicação tem o objetivo de criar cadastros de pessoas fisicas. Nele fazemos o cadastro de pessoas , edição e excluir as pessoas cadastras.<br/>

## Funcionalidades do projeto

- Inserir contéudo
- Editar o contéudo
- Remover o contéudo
- Paginação da tabela
- Visualização de forma clara

## 💻 Tecnologias <a name = "tech">

### - Front-end

As seguintes ferramentas foram usadas na construção do projeto:

- 🔵 [TypeScript][typescript]
- ⚛️ [React][reactjs]
- 💅 [Styled-components][styled-components]

### - Backend

As seguintes ferramentas usadas para construção do servidor do projet:

- 🟢 [Node.js][Node.js]
- 🔵 [TypeScript][typescript]
- 💪 [Express][Express]
- 🌌 [Postgresql][Postgresql]
- 🟡 [Typeorm][Typeorm]

### - Padronização de projeto

Para padronizar o projeto, foi usado Eslint + Prettier

### Plugins

- [Airbnb][Airbnb]

<div id="Rodando" align="center">
    <h1>🎲 Rodando</h1>
</div>

<div id="install" align="center">
    <h4>
        siga esses passos para instalar:
    </h4>
</div>

```bash
# clonando o projeto na sua maquina
$ git clone https://github.com/WesleyIsr4/SelecaoSoftwrap.git

#entre na pasta do projeto
$ cd Backend ou Frotnend

#instale as dependencias com:
$ yarn install
#ou
$ npm install

#iniciando o servidor
$ yarn dev
#ou
$ npm run dev

#o servidor backend iniciara na porta:3333
#o servidor frontend iniciara na porta:3000 (Caso nenhuma esteja usando essa porta)
```

## 🧐 Decições <a name = "decições"></a>

- Backend

Para as decisões do projeto como o uso de **Typescript** com **Node.js** foi que Typescript facilita o trabalho durante o desenvolvimento, me fornecendo para escrever um codigo limpo, organizado e seguindo padrões de projetos. Permitindo também uma construção de um projeto escalável, usando patterns avançados como **Types**, **Generics**

Para o banco de dados usando **Postgresql** é que as Transações fornecidas pelo Postgres que são extremamentes úteis para series de tarefas.

E o Typeorm é pelo fato de ser um ORM Node, que é focado em Typescript.

- Frontend

Para o uso do React no Frontend do projeto foi que o react é flexivel e facilitador na criação das interfaces com outras bibliotecas e framework.

O uso de componentes que em conjunto, criam boas interfaces, podendo reutilizar e combina com componentes no codigo.
