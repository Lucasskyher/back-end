# 🌐 Controle de Investimentos - Back-end

## 📑 Sumário
- [Objetivos do Back-end](#-objetivos-do-back-end)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Validações](#-validações)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Back-end](#-como-executar-o-back-end)
- [Autor](#-autor)


## 🎯 Objetivos do Back-end
O objetivo do back-end é fornecer uma API para gerenciar os investimentos. Ele permite operações de CRUD (Create, Read, Update, Delete) para cadastrar, atualizar, listar e excluir investimentos. O sistema utiliza um arquivo JSON como banco de dados, facilitando o gerenciamento dos dados de forma simples e rápida.

## 🔥 Funcionalidades Principais
- *Listar Todos os Investimentos*: Através do endpoint GET /items, é possível recuperar a lista completa de investimentos cadastrados. A resposta inclui todos os dados de cada investimento.
- *Buscar Investimento por ID*: O endpoint GET /items/:id permite consultar um único investimento baseado no seu ID. Caso o investimento não seja encontrado, será retornado um erro 404.
- *Cadastrar Novo Investimento*: Com o endpoint POST /items, novos investimentos podem ser adicionados ao banco de dados. O back-end gera automaticamente um ID único para o novo investimento, e as informações como nome, tipo, valor e data são armazenadas.
- *Atualizar Investimento Existente*: O endpoint PUT /items/:id permite a atualização dos dados de um investimento já cadastrado. A modificação é realizada com base no ID do investimento. Se o ID não for encontrado, um erro 404 será retornado.
- *Excluir Investimento*: Com o endpoint DELETE /items/:id, é possível excluir um investimento utilizando o seu ID. Caso o investimento não exista, será retornado um erro 404, indicando que o item não foi encontrado.

## ✔ Validações
- *Nome do Investimento*: O nome do investimento deve ter pelo menos 3 caracteres. Caso contrário, o usuário receberá uma mensagem de erro.
- *Tipo de Investimento*: O tipo do investimento é obrigatório e não pode ser deixado em branco.
- *Valor Investido*: O valor investido deve ser maior que 0, garantindo que o usuário insira um valor válido para o investimento.
- *Data do Investimento*: A data do investimento não pode ser no futuro. O sistema valida a data inserida e assegura que o investimento tenha sido feito em uma data válida.

## 🛠 Tecnologias Utilizadas:
- *Node.js*: Utilizado como ambiente de execução para o código JavaScript no servidor.
- *Express*: Framework para criar a API RESTful, facilitando o roteamento das requisições.
- *CORS*: Configurado para permitir que o front-end se comunique com o back-end, mesmo que estejam em origens diferentes.
- *fs (File System)*: Usado para ler e escrever dados no arquivo db.json, que serve como banco de dados simples.

## 💻 Como Executar o Back-end:
- *Clonar Repositório*: Abra o terminal ou prompt de comando, navegue até a pasta onde deseja clonar, e execute este comando:
```sh
git clone https://github.com/Lucasskyher/back-end
```
- *Instalar as Dependências*: Na pasta do back-end, instale as dependências necessárias com o comando:
```sh
npm install
```
- *Iniciar o Servidor Node.js*: Para iniciar o servidor, execute o seguinte comando:
```sh
node server.js
```
Isso iniciará o back-end na URL http://localhost:3000.

## 👥 Autor
O Aplicativo Controle de Investimentos foi criado por Lucas Silva Pinheiro.
