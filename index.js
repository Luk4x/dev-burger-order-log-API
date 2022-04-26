const express = require('express');
const uuid = require('uuid');

const server = express();
server.use(express.json());
const port = 3000;

const ordersList = [];

server.post('/order', (req, res) => {
    /* request(body) pattern:
        {
            "order": "X- Salada, 2 batatas grandes, 1 coca-cola",
            "clienteName": "Talita",
            "price": 44.50
        }
    */

    // receive and treat data from request
    const { order, clienteName, price } = req.body;
    const registeredOrder = { id: uuid.v4(), order, clienteName, price, status: 'Em preparação' };

    // add new order to orders list and return
    ordersList.push(registeredOrder);
    return res.status(201).json(registeredOrder);
});

server.listen(port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});
