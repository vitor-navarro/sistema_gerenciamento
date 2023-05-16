# Esse é um sistema de gerenciamento de empresa que está em desenvolvimento

## Assim que todas as issues de segurança e partes fundamentais do sistema forem completadas irei disponibilizar ele como uma versão de teste ao público.

[![License](https://img.shields.io/badge/License-Custom-blue)]([https://seu-link-aqui](https://github.com/vitor-navarro/sistema_gerenciamento/blob/main/LICENSE))

 - Caso queira testar antes da disponibilização favor entrar em contato comigo por uma das minhas redes sociais.

Nesse projeto foram utilizados:

No BackEnd:
- Na estruturação foi utilizado o padrão MVC como base.
- NodeJS, como linguagem.
- Express, para roteamento.
- MySQL, no database.
- Sequelize, como sistema gerenciador do banco de dados.
- Bcrypt, para cryptografia.
- NodeMailer, para enviar email.
- Swagger para documentação.

OBS: Para rodar o database utilizei XAMPP

No FrontEnd:
- Next.JS/React.JS, para criação das páginas.
- SCSS, para criar a estilização das páginas.
- Typescript, para criar funções.

Organização do projeto:
- O projeto está dividido em FrontEnd e BackEnd.
- No BackEnd a base foi utilizado o padrão MVC, estou desenvolvendo para que cada parte do projeto tenho sua responsabilidade definida e quase que imutável.
- No FrontEnd estou usando como padrão, pages que chamaram components, dentro desses components vão estar tudo que é necessário, inclusive  a necessidade ou não de se intercomunicar com outros.

### Para rodar os arquivos, em ambos execute npm install antes de tudo. No FrontEnd utilize yarn dev e no BackEnd npm start, vai precisar configurar o database, porém para isso recomendo instalar o XAMPP e criar um novo schema no MySQL workbank e configurar no arquivo .env
