var config = require('../../config.js').config
var registrarModelo = {}
var datos = []
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//La estructura para una collection
var userSchema = new Schema ({  
    nombres: String,
    apellidos: String,
    grado: String,
    grupo: String,    
    email: String,
    estado: String,    
    ubicacion_geografica: String,   
})

//Creacion del modelo
const MyModel = mongoose.model(config.colletion,userSchema)

registrarModelo.registro         = function(post,callback) {

    const instancia = new MyModel   
    instancia.nombres = post.nombres
    instancia.apellidos = post.apellidos
    instancia.grado = post.grado
    instancia.grupo = post.grupo    
    instancia.email = post.email
    instancia.estado = post.estado
    instancia.ubicacion_geografica= post.ubicacion_geografica
    //instancia.estado = 0
    

    instancia.save((error,userCreate) => {

        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})

        }
    })    
}

registrarModelo.buscarGmail      = function(post,callback) { // Hace parte del "registro"

    MyModel.find({email:post.email},{nombre:1,email:1},(error,registro)=>{
        if(error){
            console.log(error)
            return callback(false)
        }
        else{
            console.log(registro)
            console.log(registro.length)
            if(registro.length > 0){
                return callback(true)
            }
            else{
                return callback (false)
            }
        }        
    })

}

registrarModelo.iniciarSesion = function(post,callback) {

    MyModel.find({email:post.email,password:post.pass},{_id:1,nombres:1,apellidos:1,grado:1,grupo:1,email:1,estado:1,ubicacion_geografica:1},(error,inicioSesion)=>{
        if(error){
            console.log(error)
            return callback({state:false,mensaje:error})
        }
        else{
            if(inicioSesion.length > 0){
                return callback(true)
            }
            else{
                return callback(false)
            }
        }
    })

}

registrarModelo.listar  = function(post,callback) {

    MyModel.find({},{_id:1,nombres:1,apellidos:1,grado:1,grupo:1,email:1,estado:1,ubicacion_geografica:1},(error,registro)=>{

        if(error){
            console.log(error)
            return callback({state:false, info:error})
        }
        else{
            return callback(registro)
        }
    
    })
}

registrarModelo.actualizado  = function(post,callback) {

    console.log(post.id)
      MyModel.find({_id:post.id},{nombres:1,apellidos:1,grado:1,grupo:1,email:1,estado:1,ubicacion_geografica:1},(error,registro)=>{
 
          if(error){
            
              return callback({state:false, info:error})
          }
          else{
             console.log(registro)
             return callback({state:true,data:registro})
         }
     
     })
 }

registrarModelo.buscarPosicion   = function(post,callback) { 

    var posicion = datos.findIndex((iterador) => {
        return iterador.email == post.email
    })
    return callback(posicion)
}

registrarModelo.actualizar = function(post,callback) {
   
    MyModel.findByIdAndUpdate({_id:post.id},{      
        nombres:post.nombres,
        apellidos:post.apellidos,
        grado:post.grado,
        grupo:post.grupo,
        email:post.email,
        estado:post.estado,
        ubicacion_geografica:post.ubicacion_geografica        
        
    },(error,modificado) =>{
        if(error){
            return callback({state:false, info:error})
        }
        else{
            return callback({state:true, modificado})
        }
    })

}


registrarModelo.actualizarNombre = function(post,callback) {

    MyModel.findOneAndUpdate({email:post.email},{nombres:post.nombres},(error,usuarioModificado)=>{
        if(error){
            console.log(error)
            return callback({state:false,mensaje:error})
        }
        else{
           return callback(usuarioModificado)
        }
    })

}

registrarModelo.eliminarUsuario  = function(post,callback) {
    
    MyModel.findByIdAndDelete(post.id,(error,eliminarUsuario)=>{
        if(error){
            console.log(error)
            return callback({state:false,mensaje:error})
        }
        else{
           return callback(eliminarUsuario)
        }

    })
}


registrarModelo.actualizarEstado = function(post,callback) {

    MyModel.findOneAndUpdate({email:post.email,codigo:post.codigo},{estado:1},(error,usuarioModificado)=>{
        if(error){
            console.log(error)
            return callback({state:false,mensaje:error})
        }
        else{
           return callback(usuarioModificado)
        }
    })

}
module.exports.regsitrarM = registrarModelo