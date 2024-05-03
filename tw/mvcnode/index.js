const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
app.use("/",homeRouter);
app.use("/home",homeRouter)

const errorhandler = require('./middlewares/errorhandler');
app.use(errorhandler);

app.listen(process.env.SERVER_PORT,()=>{
    console.log("aplicacion de ejemplo escuchando en el puerto "+process.env.SERVER_PORT);
});
