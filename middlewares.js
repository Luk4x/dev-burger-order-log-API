const ordersList = require('./index'); // ordersList.ordersList === index ordersList

const showMethodNUrl = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`);

    next();
};

const checkIdExistence = (req, res, next) => {
    // finding order by id
    const orderId = req.params.id;
    const orderIndex = ordersList.ordersList.findIndex(order => order.id === orderId);

    // return error if not found
    if (orderIndex < 0) {
        return res.status(404).json({ error: 'Order Not Found' });
    }

    // incorporating the order index in request
    req.orderIndex = orderIndex;

    next();
};

// verify if client is trying to change or add id or status information
const verifyClientData = (req, res, next) => {
    const { status, id } = req.body;

    if (status || id) {
        return res.status(401).json({ error: 'Unable to change id or status information' });
    }

    next();
};

// exporting middlewares to index.js
module.exports = { showMethodNUrl, checkIdExistence, verifyClientData };
