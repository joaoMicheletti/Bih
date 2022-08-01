const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});
app.use(bodyparser.json());
app.use(express.json());
app.use(routes);


app.listen(3001);
