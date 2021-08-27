const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const cors = require('cors');

 mongoose.connect('mongodb+srv://newuser:FqrKqTE46WS89Lh@cluster0.vq2ml.mongodb.net/Cluster0?retryWrites=true&w=majority',{
     useNewUrlParser: true,
});
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('3000', () =>{
 console.log('Rodando na porta 3000');
});