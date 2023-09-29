<h1>Aplicativo ToDo com React Native e SQLite</h1>

Este projeto é uma demonstração de um aplicativo ToDo, desenvolvido com React Native e SQLite. Ele foi criado com o objetivo de servir como base de aprendizado e implementação dessas tecnologias.

<h2>Sobre o Aplicativo</h2>
O aplicativo é uma lista de tarefas (ToDo), projetado para explorar os conceitos de operações CRUD (Criar, Ler, Atualizar, Deletar) e praticar queries SQL. Ele permite que os usuários gerenciem suas tarefas de maneira eficiente e intuitiva.

<h2>Funcionalidades</h2>
O aplicativo incorpora funcionalidades interativas, incluindo:

<ul>
	<li><strong>Gestos:</strong> Os usuários podem interagir com suas tarefas usando vários gestos. Por exemplo, eles podem arrastar uma tarefa para editar ou remover, e dar um duplo clique para alternar entre tarefa completa e incompleta.</li>
</ul>

<h2>Arquitetura do Código</h2>

<ul>
	<li><strong>A regra de negócio,</strong> que normalmente seria encontrada em services/use-cases, foi centralizada em uma store criada com Zustand. Isso facilita a manutenção e atualização do código, tornando-o mais eficiente e fácil de gerenciar.</li>
	<li><strong>A lógica dos componentes</strong> foi separada em hooks personalizados, aplicando o princípio de Separation of Concerns</li>
	<li>Adotei o <strong>Repository Pattern</strong> para centralizar e isolar a persistência de dados das regras de negócios do aplicativo. Isso garante que as regras de negócios não sejam afetadas por detalhes de implementação específicos da persistência de dados.</li>
</ul>

<h2>Tecnologias</h2>

<p>Foi usado as seguintes tecnologias:</p>

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Expo-SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

<h2>Rodando o projeto</h2>

Você precisa ter o [Node](https://nodejs.org/en/), o [Git](https://git-scm.com/) e algum gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) || [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)) instalados em sua máquina.

Use o [ExpoGo](https://expo.dev/client) para rodar o app no seu dispositivo fisico ou no emulador.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/sqlite-rn-example.git

2. Acesse a pasta e instale as dependências via terminal:
$ yarn || npm i

3. Inicie a aplicação em modo de desenvolvimento:
$ yarn start || npm run start

4. Escaneie o QRCode ou digite a URL informada
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
