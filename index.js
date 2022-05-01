const express = require('express');
const uuid = require('uuid');
const { showMethodNUrl, checkIdExistence, verifyClientData } = require('./middlewares');

const server = express();
server.use(express.json());
server.use(showMethodNUrl);
const port = 3000;

// orders made
const ordersList = [];

// route to request order
server.post('/order', verifyClientData, (req, res) => {
    /* request(body) pattern:
        {
            "order": "X- Salada, 2 batatas grandes, 1 coca-cola",
            "clienteName": "Talita",
            "price": 44.50
        }
    */

    // receive data
    const { order, clienteName, price } = req.body;
    const registeredOrder = { id: uuid.v4(), order, clienteName, price, status: 'Em preparação' };

    // verifying client post data
    for (orderData in registeredOrder) {
        if (!registeredOrder[orderData]) return res.status(400).json({ error: 'Missing Data' });
    }

    // add new order to orders list and return
    ordersList.push(registeredOrder);
    return res.status(201).json(registeredOrder);
});

// route to list all orders
server.get('/order', (req, res) => {
    return res.json(ordersList);
});

// route to get specific order (by id)
server.get('/order/:id', checkIdExistence, (req, res) => {
    return res.json({ order: ordersList[req.orderIndex] });
});

// route to update an order (by id)
server.put('/order/:id', checkIdExistence, verifyClientData, (req, res) => {
    // receiving order data
    const { order, clienteName, price } = req.body;
    const newData = { order, clienteName, price };

    // function to update one or more data from a order
    for (let orderData in ordersList[req.orderIndex]) {
        for (data in newData) {
            if (newData[data] && data === orderData) ordersList[req.orderIndex][data] = newData[data];
        }
    }

    return res.json({ updatedOrder: ordersList[req.orderIndex] });
});

// route to update an order status (by id)
server.patch('/order/:id', checkIdExistence, (req, res) => {
    ordersList[req.orderIndex].status = 'Pronto';
    return res.json({ order: ordersList[req.orderIndex] });
});

// route to delete an order (by id)
server.delete('/order/:id', checkIdExistence, (req, res) => {
    // deleting order from array
    ordersList.splice(req.orderIndex, 1);

    return res.status(204).json();
});

server.listen(port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});

//exporting orders list to middlewares.js
exports.ordersList = ordersList;
