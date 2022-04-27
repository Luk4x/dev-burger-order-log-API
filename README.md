# dev-burger-order-log-API

dev-burger-order-log-API

<h1 align="center">
    <img alt="CodeClub" src="https://i0.wp.com/rodolfomori.com/wp-content/uploads/2021/05/Co%CC%81pia-de-Yellow-White-and-Black-Edgy-Maximalism-Video-Gaming-YouTube-Outro-1-1024x1024.png" width="300px" />
</h1>

<h2 align="center">
  Dev Burger Order Log API (under construction)
</h2>

## :rocket: Sobre o desafio

Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar [Node](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).

### Rotas

-   `POST /order`: A rota deve receber o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status: "Em preparação" }`. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o `status` como "Em preparação".

-   `GET /order`: Rota que lista todos os pedidos já feitos.

-   `PUT /order/:id`: O `id` do pedido deve ser enviado nos parâmetros da rota. Sua função é alterar um pedido, podendo ser um, ou todos os dados do pedido (exceto o `id` e o `status`, claro).

-   `DELETE /order/:id`: Essa rota deve deletar um pedido já feito com o `id` enviado nos parâmetros da rota.

-   `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e deve retornar um pedido específico.

-   `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

### Exemplo

Se eu chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`,
o array deve ficar assim:

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

Se eu chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array deve ficar assim:

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

-   Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o ID passado existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

-   Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da requisição(GET,POST,PUT,DELETE, etc) e também a url da requisição.

### Exemplo

[GET] - /order

## 📅 Entrega

Após finalizar o desafio, suba o projeto para o seu github e compartilhe no Club, para todos verem que você conseguiu.

Feito com ♥ by Code Club - Rodolfo Mori
