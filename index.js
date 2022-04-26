const server = require('express')();
const port = 3000;

server.get('/', (req, res) => {
    return res.send('Good.');
});

server.listen(port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});
