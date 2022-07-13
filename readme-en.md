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

# CodeBurger V1 API
<p align="center">
  <video src="https://user-images.githubusercontent.com/86276393/165772574-ff4b0ddf-12ab-4430-a444-1531fbd85aca.mp4">
</p>
<br>

## Technologies used
- [NodeJS](https://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [UUID](https://www.uuidgenerator.net/)

## About
This project is an API that performs the registration of orders for a hamburger shop, serving as the basis for the [Interface](https://github.com/Luk4x/dev-burger-order-log-interface) I built.

### Routes
-   `POST /order`: This route receives the customer's order, the customer's name, and the order amount. This information is passed by the `body` of the request, and based on it a new request is registered inside an array, in the following format:
    
    ```js
    {
      id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
      order: "X- Salada, 2 batatas grandes, 1 coca-cola",
      clientName:"José",
      price: 44.50,
      status: "Em preparação"
    }
    ```

  The `id` and `status` information is generated in the system and incorporated in the request. The ids are generated using the `uuid` library, and the status is always 'In preparation' when an order is placed.<br>
    This route also has a special check to prevent orders with incomplete data from being made.

-   `GET /order`: This route lists all orders already placed, displaying the ones inside the array.

-   `GET /order/:id`: Based on the `id` sent, this route returns a specific request.

-   `PUT /order/:id`: Based on the `id` sent, this route can change an order, which could be one or all of the order data (except the `id` and `status`, of course).

-   `PATCH /order/:id`: Based on the `id` sent, once called this route changes the status of the received order to "Ready".

-   `DELETE /order/:id`:  Based on the `id` sent, once called, delete the received order.

#### Examples
When calling the `POST /order` route passing `{ order: "X- Salad, 2 large potatoes, 1 coke", clienteName:"José", price: 44.50 }`, the array looks like this:

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

When calling the `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8` route, the array looks like this:

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
- `checkIdExistence`: Its function is to check if the received ID exists and to take action if it does not. It is used on all routes that are given an ID.

- `showMethodNUrl`: Its function is to show the method (GET,POST,PUT,DELETE, etc) on the console and also the url of the request. It is used in all requests.

- `verifyClientData`: Its function is to verify the customer data sent by the `body`, and take action if this request intends to modify data that the customer does not have permission to.

## How to use
To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher and an API Client like [Insomnia](https://insomnia.rest/) installed on your computer.<br>In terminal:

```bash
# Clone this repository:
$ git clone https://github.com/Luk4x/dev-burger-order-log-API.git

# Go into the repository:
$ cd dev-burger-order-log-API

# Install dependencies: 
$ npm i

# Run the project:
$ npm run server

# The server will start at http://localhost:3000/, and you can explore it using Insomnia.
```

## Contributors Contact
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
