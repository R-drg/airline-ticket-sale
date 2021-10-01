# Serviço de compra de passagens

### Alunos: 
Henrique Rodrigues de Souza - 11811ECP011 

Rodrigo Henrique Alves Ferreira - 11811ECP001

## Pré requisitos

- npm
- node.js
- docker-compose

Instalar node_modules

```bash
$ npm install
```

## Como rodar a aplicação

Iniciar docker
```bash
$ docker-compose up
```

Iniciar aplicação em modo desenvolvedir
```bash
$ yarn run dev
```

## Api Routes

Comprar tickets

### `POST /tickets/buy`

Necessário passar o token no header 'Authorization'

Body: 
```json
{
    "flight_id": "74fe664c-562c-4710-83d0-2161bc885118",
    "seat   ": "7A"
}
```

Login

### `POST /login`

Body: 
```json
{
    "email":"rodrigo@domain.com",
    "password":"pwd123"
}
```

Verificar token

### `POST /verifyToken`

Necessário passar o token no header 'Authorization'

Logout 

### `POST /logout`

Necessário passar o token no header 'Authorization'

Pegar lista de aeroportos

### `GET /airports`

Query params

### Airlines -> pesquisar pelo nome linha aerea


### departure -> pesquisa pelo nome da cidade de saida (lista todos destinos)

Pegar lista de voos

### `GET /airports`

Query params

### Airlines -> pesquisar pelo nome linha aerea


### departure -> id do aeroporto da saida

### departure -> id do aeroporto da chega