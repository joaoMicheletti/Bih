const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const path = require('path');

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    app.use(cors());
    next();
});*/

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, 'public')));

app.listen(3001);
