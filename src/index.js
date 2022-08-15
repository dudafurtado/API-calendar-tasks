const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

const app = express();

dotenv.config();

app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(8000);