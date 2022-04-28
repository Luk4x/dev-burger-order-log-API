<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>
<br>

# Dev Burger Order Log API
<p align="center">
  <video src="https://user-images.githubusercontent.com/86276393/165772574-ff4b0ddf-12ab-4430-a444-1531fbd85aca.mp4">
</p>
<br>

## Sobre
Esse projeto é uma API que realiza o cadastro de pedidos de uma hamburgueria.

### Rotas
-   `POST /order`: Essa rota recebe o pedido do cliente, o nome do cliente e o valor do pedido. essas informações são passadas pelo `body` da requisição, e com base nelas um novo pedido é registrado dentro de um array, no seguinte formato:
    
    ```js
    {
      id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
      order: "X- Salada, 2 batatas grandes, 1 coca-cola",
      clientName:"José",
      price: 44.50,
      status: "Em preparação"
    }
    ```

    As informaçãos de `id` e `status` são geradas no sistema e incorporadas no pedido. Os ids são gerados fazendo o uso da biblioteca `uuid`, e o status é sempre de 'Em preparação' quando um pedido é feito.<br>
    Essa rota também tem uma verificação especial para impedir que pedidos com dados incompletos sejam feitos.

-   `GET /order`: Essa rota lista todos os pedidos já feitos, exibindo os que está dentro do array.

-   `GET /order/:id`: Com base no `id` enviado, essa rota retorna um pedido específico.

-   `PUT /order/:id`: Com base no `id` enviado, essa rota pode alterar um pedido, podendo ser um, ou todos os dados do pedido (exceto o `id` e o `status`, claro).

-   `PATCH /order/:id`: Com base no `id` enviado, assim que chamada, essa rota altera o status do pedido recebido para "Pronto".

-   `DELETE /order/:id`:  Com base no `id` enviado, assim que chamada, deleta o pedido recebido.

#### Exemplos
Ao chamar a rota `POST /order` passando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`, o array fica dessa forma:

```js
[
    {
        id: 'ac3ebf68-e0ad-4c1d-9822-ff1b849589a8',
        order: 'X- Salada, 2 batatas grandes, 1 coca-cola',
        clienteName: 'José',
        price: 44.5,
        status: 'Em preparação'
    }
];
```

Ao chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`, o array fica dessa forma:

```js
[
    {
        id: 'ac3ebf68-e0ad-4c1d-9822-ff1b849589a8',
        order: 'X- Salada, 2 batatas grandes, 1 coca-cola',
        clienteName: 'José',
        price: 44.5,
        status: 'Pronto'
    }
];
```

### Middlewares
- `checkIdExistence`: Sua função é verificar se o ID recebido existe e tomar medidas em caso de inexistência. Ele é usado em todas as rotas que recebem um ID.

- `showMethodNUrl`: Sua função é mostrar no console o método(GET,POST,PUT,DELETE, etc) e também a url da requisição. Ele é usado em todas as requisições.

- `verifyClientData`: Sua função é verificar os dados do cliente enviados pelo `body`, e tomar medidas caso essa requisição tenha a intenção de modificar dados que o cliente não tem permissão.

## Como usar
Para clonar e executar este projeto, você precisará do [Git](https://git-scm.com/) e [Node.js v16.13.2](https://nodejs.org/en/) ou superior instalados em seu computador.<br>No terminal:

```bash
# Clone esse repositório:
$ git clone https://github.com/Luk4x/dev-burger-order-log-API.git

# Entre no repositório:
$ cd dev-burger-order-log-API

# Instalar dependências 
$ npm i

# Executar o projeto
$ npm run server

# O servidor irá iniciar em: http://localhost:3000/
```

## Contato dos Contribuintes
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lucasmacielf/">
        <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/><br>
        <sub>
          <b>Lucas Maciel</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
