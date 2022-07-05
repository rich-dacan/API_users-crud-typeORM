# First API with typeORM :rocket:

## Base URL

Esta é a URL base para consumir a API: https://localhost:3000

# Endpoints

Atualmente a API possui um total de 6 Endpoints para realização de cadastro, login, listar todos os usuários e listar, deletar e atualizar a senha do usuário logado (sendo esses últimos necessário autenticação).

## - #1 Cadastrar usuário

**`POST`** _/users

Nome, email e senha são requeridos para o cadastro.

### body:

```
{
    "name": "name example",
    "email": "email@email.com",
    "password": "123456"
}
```

### Response:

```
{
	"name": "name example",
	"email": "email@email.com"
}
```

## - #2 Login

**`POST`** _/users/login

É necessário apenas email e senha para realização do login, e será recebido o token e acesso para realizar autenticações.

### body:

```
{
	"email": "email@email.com",
	"password": "123456"
}
```

### Response

É recomendado salvar o token localmente para realizar autenticação.

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2hfZGFjYW5AcHJvdG9uLm1lIiwiaWF0IjoxNjU3MDE5MDc1LCJleHAiOjE2NTcxMDU0NzV9.gp0nvOYbqWyP-d6PxcdOkcpItNOXglc2mG5IUnnV29w"
}
```

## - #3 Listar todos os usuários

**`GET`** _/users

Este endpoint retorna todos os usuários e não é necessário autenticação para acessá-lo.

### Response

```
[
	{
		"id": "5125ca96-4cc7-4f99-ae42-3ceb9835a6f0",
		"name": "Jones",
		"email": "jon@proton.me",
		"password": "$2b$10$Mf4y42F1vbhYDRSYiA4Cj.r7mVlDcz.wVdR8IcPwlvMmxE.NQ0yOO"
	},
	{
		"id": "c2b3ac56-d524-44aa-aae9-cdf41721f955",
		"name": "Teste",
		"email": "test@proton.me",
		"password": "$2b$10$TmregwhYDNPunBVykht4VOaGgYJcvBEa3CAzn3waqge6ZkaQy9kXa"
	},
	{
		"id": "95dc6485-2651-40bf-9fc0-0136ba9df204",
		"name": "Teste 1",
		"email": "test1@proton.me",
		"password": "$2b$10$yDKUzT30b7IJEF0Sc7EI/.2NxYnL/Z09AITA70pWxWvG6PieJp8C6"
	},
	{
		"id": "1b09ad6a-e769-4406-8003-51b7ceb9bf3b",
		"name": "Teste 2",
		"email": "test2@proton.me",
		"password": "$2b$10$ZUalUohPwYsrbTSCEnn13ePJZqOLalWQhaZH3pd8LfYxIVjrTIQMq"
	},
  {...}
```

## - #4 Listar usuário logado

**`GET`** _/users/me

Este endpoint retorna o usuário logado e é necessário autenticação para acessá-lo.

### Response

```
{
	"id": "5125ca96-4cc7-4f99-ae42-3ceb9835a6f0",
	"name": "Jones",
	"email": "jon@proton.me",
	"password": "$2b$10$Mf4y42F1vbhYDRSYiA4Cj.r7mVlDcz.wVdR8IcPwlvMmxE.NQ0yOO"
}
```

## - #5 Deletar usuário logado

**`GET`** _/users/me

Este endpoint necessita do token de autenticação e retorna um feedback pro cliente.

### Response

```
{
	"message": "User deleted with success"
}
```

## - #6 Alterar senha de usuário logado

**`GET`** _/users/me/update_password

Este endpoint necessita do token de autenticação e retorna um feedback pro cliente.

### Response

```
{
	"message": "Password updated"
}
```
