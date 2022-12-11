var express = require('express')
var config = require('./config.js').config
global.app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/'+ config.db,{useNewUrlParser:true,useUnifiedTopology:true}, (error,respuesta)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('Conexion a mongo exitoso')
    }
})


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//accesos a cors
var cors = require('cors')

app.use(cors({
  origin: function(origin, callback){
    console.log(origin)
    if(!origin) return callback(null, true);


    if(config.EnabledCors == true){

        if(config.origins.indexOf(origin) === -1){
            return callback('error cors', false);
        } 
    }

    return callback(null, true);
  }
}));

require('./rutas.js')

app.use('/', express.static(__dirname +'/pagina'))
app.use('/imagenes', express.static(__dirname +'/imagenes'))

app.listen(config.puerto, function() {
    console.log('Servidor funcionando por el puerto '+config.puerto)
})