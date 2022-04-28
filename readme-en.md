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

## Sobre

É uma API que realiza o cadastro de pedidos de uma hamburgueria.

### Rotas

-   `POST /order`: A rota deve receber o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato:
    `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status: "Em preparação" }`.
    Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o `status` como "Em preparação".

-   `GET /order`: Rota que lista todos os pedidos já feitos.

-   `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e deve retornar um pedido específico.

-   `PUT /order/:id`: O `id` do pedido deve ser enviado nos parâmetros da rota. Sua função é alterar um pedido, podendo ser um, ou todos os dados do pedido (exceto o `id` e o `status`, claro).

-   `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

-   `DELETE /order/:id`: Quando chamada, deleta um pedido com base no `id` informado.

#### Exemplos
Ao chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`, o array fica dessa forma:

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

- `showMethodNUrl`: Sua função é mostrar o método da requisição(GET,POST,PUT,DELETE, etc) e também a url da requisição. Ele é usado em todas as requisições.

- `verifyClientData`: Sua função é verificar os dados do cliente enviados pelo `body`, e tomar medidas caso essa requisição tenha a intenção de modificar dados que o cliente não tem permissão.

### Como usar
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
