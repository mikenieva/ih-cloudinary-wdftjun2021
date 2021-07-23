// PATRÓN DE DISEÑO - BAJO EL PARADIGMA DE PROGRAMACIÓN FUNCIONAL

// IMPORTACIONES
const mongoose = require("mongoose")
require("dotenv").config()


// MIDDLEWARE
const conectarDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })

        console.log("Base de datos conectada")

    } catch(e){

    }
}

// EXPORTACIÓN
module.exports = conectarDB