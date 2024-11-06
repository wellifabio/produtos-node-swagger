require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const rotes = require('./src/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rotes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => { console.log("API de Produtos respondendo em http://localhost:" + PORT), console.log("Documentação em http://localhost:" + PORT + "/api-docs") });