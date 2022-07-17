const express = require('express');
const uuid = require('uuid');
const { showMethodNUrl, checkIdExistence, verifyClientData } = require('./middlewares');
const cors = require('cors');

const port = 3001;
const server = express();
server.use(express.json());
server.use(showMethodNUrl);
server.use(cors());

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

    // trying to add new order to orders list and return
    try {
        ordersList.push(registeredOrder);
        return res.status(201).json(registeredOrder);
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// route to list all orders
server.get('/order', (req, res) => {
    try {
        return res.json(ordersList);
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// route to get specific order (by id)
server.get('/order/:id', checkIdExistence, (req, res) => {
    try {
        return res.json({ order: ordersList[req.orderIndex] });
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// route to update an order (by id)
server.put('/order/:id', checkIdExistence, verifyClientData, (req, res) => {
    // receiving order data
    const { order, clienteName, price } = req.body;
    const newData = { order, clienteName, price };

    try {
        // function to update one or more data from a order
        for (let orderData in ordersList[req.orderIndex]) {
            for (data in newData) {
                if (newData[data] && data === orderData) ordersList[req.orderIndex][data] = newData[data];
            }
        }

        return res.json({ updatedOrder: ordersList[req.orderIndex] });
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// route to update an order status (by id)
server.patch('/order/:id', checkIdExistence, (req, res) => {
    try {
        ordersList[req.orderIndex].status = 'Pronto';
        return res.json({ order: ordersList[req.orderIndex] });
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// route to delete an order (by id)
server.delete('/order/:id', checkIdExistence, (req, res) => {
    try {
        // deleting order from array
        ordersList.splice(req.orderIndex, 1);
        return res.status(204).json();
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

server.listen(process.env.PORT || port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});

//exporting orders list to middlewares.js
exports.ordersList = ordersList;
