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

![luk4x-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/dev-burger-order-log-API?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# 🍔 CodeBurger Project API

<br>
<p align="center">
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-routes-and-examples">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-middlewares">Middlewares</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/165772574-ff4b0ddf-12ab-4430-a444-1531fbd85aca.mp4">
</div>

> **If the video has any errors, reload the page!**<br>
> Access the project online **[HERE](https://luk4x-codeburgerv1-api.herokuapp.com/order)**

## 🚀 Technologies Used

- [NodeJS](https://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [UUID](https://www.uuidgenerator.net/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📝 About

> Watching the video above and/or accessing the project online will help you understand the explanation!

This project is the API of **CodeBurger**, a web application that performs the registration and management of orders for a hamburger shop, serving as the basis for its [Interface](https://github.com/Luk4x/dev-burger-order-log-interface) that I developed essentially in ReactJS.

### 📃 Routes and Examples
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

<br>

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

### 🔑 Middlewares
- `checkIdExistence`: Its function is to check if the received ID exists and to take action if it does not. It is used on all routes that are given an ID.

- `showMethodNUrl`: Its function is to show the method (GET,POST,PUT,DELETE, etc) on the console and also the url of the request. It is used in all requests.

- `verifyClientData`: Its function is to verify the customer data sent by the `body`, and take action if this request intends to modify data that the customer does not have permission to.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher, and preferably an API Client such as [Insomnia](https://insomnia.rest/) (but can also be accessed through the browser) previously installed.<br>In the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/dev-burger-order-log-API.git

# Enter the repository with:
> cd dev-burger-order-log-API

# Install dependencies with: 
> npm i

# Run the project with:
> npm run server

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://localhost:3000/ or http://127.0.0.1:5173/)
```

## 🤝 Contributor Contact
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

<p align="right">
  <a href="#-codeburger-project-api">Back to Top</a>
</p>
