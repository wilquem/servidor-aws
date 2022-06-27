const express = require('express');
const routes = require('./src/routes');
require('./src/database');

const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);


app.listen(3333, ()=> {
    console.log("rodando servidor")
})