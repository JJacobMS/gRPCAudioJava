const errorhandler = (err,req,res,next) =>{
    console.log("Manejo de errores desde un middleware");
    const defaultMensaje = 'la aplicacion esta ocupada. intentelo nuevamente mas tarde';

    if(process.env.NODE_ENV === 'development'){
        const statusCode = err.statusCode || 500;
        const message = err.statusCode || defaultMensaje;
        res.status(statusCode).json({
            success: false,
            status: statusCode,
            message: message,
            stack: err.stack
        });
    } else {
        res.status(200).send(defaultMensaje);
    }

}

module.exports = errorhandler;