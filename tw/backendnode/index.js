const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



var corsOptions = {
    origin : [ "http://localhost:3001", "http://localhost:8080" ],
    methods: "GET,PUT,POST,DELETE",
};

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors(corsOptions));
app.use("/api/categorias", require('./routes/categorias.routes'))
app.use("/api/peliculas", require('./routes/peliculas.routes'))
app.get('*', (req, res) => {res.status(404).send()});

app.listen(process.env.SERVER_PORT,()=>{
    console.log('Aplicacion de ejemplo escuchando en el puerto'+process.env.SERVER_PORT);
});


