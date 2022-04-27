const express = require('express');
const uuid = require('uuid');

const server = express();
server.use(express.json());
const port = 3000;

// orders made
const ordersList = [];

// routes

// route to request order
server.post('/order', (req, res) => {
    /* request(body) pattern:
        {
            "order": "X-Salada, 2 batatas grandes, 1 coca-cola",
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

// route to list all orders
server.get('/order', (req, res) => {
    return res.json(ordersList);
});

// route to update an order (by its id)
server.put('/order/:id', (req, res) => {
    // finding order
    const orderId = req.params.id;
    const orderIndex = ordersList.findIndex(order => order.id === orderId);

    // verifying data
    const { status, id } = req.body;
    if (status || id) {
        return res.status(401).json({ error: 'Unable to change id or status information' });
    }

    // receiving order data
    const { order, clienteName, price } = req.body;
    const newData = { order, clienteName, price };

    /*
    function to avoid code repetition like:
        if (order) ordersList[orderIndex].order = order;
        if (clienteName) ordersList[orderIndex].clienteName = clienteName;
        if (price) ordersList[orderIndex].price = price;

    so, this function allows the user to update one or more data from a order */
    for (let property in ordersList[orderIndex]) {
        for (data in newData) {
            if (newData[data] && data === property) ordersList[orderIndex][data] = newData[data];
        }
    }

    return res.json({ updatedOrder: ordersList[orderIndex] });
});

server.delete('/order/:id', (req, res) => {
    // finding order
    const orderId = req.params.id;
    const orderIndex = ordersList.findIndex(order => order.id === orderId);

    // deleting order
    ordersList.splice(orderIndex, 1);

    return res.status(204).json();
});

server.get('/order/:id', (req, res) => {
    const orderId = req.params.id;
    const orderIndex = ordersList.findIndex(order => order.id === orderId);

    return res.json({ order: ordersList[orderIndex] });
});

server.patch('/order/:id', (req, res) => {
    const orderId = req.params.id;
    const orderIndex = ordersList.findIndex(order => order.id === orderId);

    ordersList[orderIndex].status = 'Pronto';
    return res.json({ order: ordersList[orderIndex] });
});

server.listen(port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});
