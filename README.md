<h1 style='text-align: center'>LinkApi Teste</h1>

## APIS Ultilizadas

- **Pipedrive** Sistema CRM focado em vendas <br>
- **Bling** Sistema de Gestao

---
## Objetivo
Construção de uma API RESTful usando a tecnologia NodeJS.

---
## 📄 Requisitos

- Criar contas testes nas plataformas Pipedrive e Bling.

- Criar uma integração entre as plataformas Pipedrive e Bling (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- Criar banco de dados Mongo, existem serviços como MongoDB Atlas para criar de graça.

- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

---
## 👣 Instalação dos Software

Para rodar a aplicação, você precisa ter instalado o Git, Node e para fazer as requisições o Insomnia
- [Node](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads/)
- [Insomnia](https://insomnia.rest/download)

---

## 🗂️ Como baixar o projeto

```bash
# Clonar o repositório
$ git clone 

# Entrar no diretório
$ cd foodfy

# Instalar as dependências
$ npm install

# Iniciar a aplicação
$ npm start
```
## Observacao

- Para fazer a integracao primeiro crie um negocio no **Pipedrive** com o status **GANHO**

- Nao se esquece de inserir as variaveis de ambientes.