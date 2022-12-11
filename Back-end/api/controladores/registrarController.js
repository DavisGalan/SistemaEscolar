var registrarM = require('../modelos/registrarModelo.js').regsitrarM
var md5 = require('md5')
var secret = require('../../config.js').config
var nodemailer =  require('nodemailer')

//CRUD
var registrarController = {}

var enviarEmail = function(to,asunto,contenido) {           
    
    var tranportador = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:'587',
        secure:false,
        requireTLS:true,
        auth:{
            user:'webfullstack31@gmail.com',
            pass:secret.emailPass
        }
    })

    var mailOptions = {
        from:'webfullstack31@gmail.com',
        to:to,
        subject:asunto,
        html:contenido
    }

    tranportador.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log(error.message)
            response.json({state:false,mensaje:error.message})
        }
        else{
            response.json({state:true,mensaje:"Correo enviado"})
        }
    })   
}


//Read
registrarController.iniciarSesion   = function(request,response) {
    
    var post = {
        email: request.body.email,
        pass: md5(request.body.password + secret.palabraClave)
    }
    
    if (post.email == undefined || post.email == null || post.email == ""){
        response.json({state:false, mensaje:'Email es obligatorio'})
        return false
    }
    
    if (post.pass == undefined || post.pass == null || post.pass == ""){
        response.json({state:false, mensaje:'Contraseña es obligatorio'})
        return false
    }
    registrarM.iniciarSesion(post,function(existe) {
        if (existe == true){
            response.json({state:true,mensaje:'Usuario loguiado correctamente'})
        }
        else{
            response.json({state:false,mensaje:'Credenciales invalidas'})
        }
    })
}
 
//Create
registrarController.registro        = function(request,response) {   
    var nombres = request.body.nombres
    var apellidos = request.body.apellidos
    var grado = request.body.grado
    var grupo = request.body.grupo
    var email = request.body.email
    var estado = request.body.estado
    var ubicacion_geografica = request.body.ubicacion_geografica
        
    if (nombres == undefined || nombres == null || nombres == ""){
        response.json({state:false, mensaje:'Nombres es obligatorio'})
        return false
    }
    if (apellidos == undefined || apellidos == null || apellidos == ""){
        response.json({state:false, mensaje:'Apellidos es obligatorio'})
        return false
    }
    if (grado == undefined || grado == null || grado == ""){
        response.json({state:false, mensaje:'Grado es obligatorio'})
        return false
    }
    if (grupo == undefined || grupo == null || grupo == ""){
        response.json({state:false, mensaje:'Grupo es obligatorio'})
        return false
    }    
    if (email == undefined || email == null || email == ""){
        response.json({state:false, mensaje:'Email es obligatorio'})
        return false
    }
    if (estado == undefined || estado == null || estado == ""){
        response.json({state:false, mensaje:'Estado de nacimiento es obligatorio'})
        return false
    }
    if (ubicacion_geografica == undefined || ubicacion_geografica == null || ubicacion_geografica == ""){
        response.json({state:false, mensaje:'Ubicacion es obligatorio'})
        return false
    }
    // if (pass == undefined || pass == null || pass == ""){
    //     response.json({state:false, mensaje:'Contraseña es obligatorio'})
    //     return false
    // }
    // if (cpass != pass){
    //     response.json({state:false, mensaje:'Confirmar es contraseña'})
    //     return false
    // }    


    var post = {      
        nombres:nombres,
        apellidos:apellidos,
        grado:grado,
        grupo:grupo,
        email:email,
        estado:estado,
        ubicacion_geografica:ubicacion_geografica,
        // pass: md5(pass + secret.palabraClave)
    }
    
 
    registrarM.buscarGmail(post,function(existe) {  //proceso para validar
        if(existe == true){
          response.json({state:false,mensaje:'Usuario ya existe intente con otro'})
          return false
        }
        else{ 
            //var codigo = Math.floor( Math.random() * (9999 - 1000) + 1000)
            //post.codigo = codigo
            
            registrarM.registro(post,function(datos){          //Proceso de almacenamiento
               
                if(datos.state == true){
                    //enviarEmail(post.email,"Bienvenido","<div><a href='http://localhost:3000/usuario/activar/"+post.email+"/"+post.codigo+"'>Click aquí</a></div>")
                    response.json({state:true,Mensaje:'Usuario registrado correctamente'})
                }
                else{
                    response.json({state:false,Mensaje:'Error al registrase'})
                } 
                
            })
        }
    })   

    
}

//Read
registrarController.listar          = function(request,response) {
    registrarM.listar(null,function(listaDeUsuarios) {
        response.json({state:true,usuario:listaDeUsuarios})
    })
}

registrarController.actualizado = function(request,response) {

    var post = {
        id: request.body.id
    }

    if(post.id == '' || post.id == undefined || post.id == null){
        response.json({state:false, mensaje:'El campo id es obligatorio'})
    }
    registrarM.actualizado(post,function(respuesta) {
        response.json(respuesta)
    })
}


//Update
registrarController.actualizar = function(request,response) {
  
    var post = {
        id:request.body.id,        
        nombres : request.body.nombres,
        apellidos : request.body.apellidos,
        grado: request.body.grado,
        grupo : request.body.grupo,
        estado: request.body.estado,
        ubicacion_geografica: request.body.ubicacion_geografica,
    }

    
    
    registrarM.actualizar(post,function(respuesta){
       
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo actualizar el usuario'})
        }
        else{
            response.json({state:true , mensaje:'El usuario se actualizo correctamente'})
        }
    }) 
    
    
}
//Delete
registrarController.eliminarUsuario = function(request,response) {
    var post = {
        id: request.body.id
    }

    if (post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false, mensaje:'El id es obligatorio'})
        return false
    }
   
    registrarM.eliminarUsuario(post,function(resultado) {
       response.json(resultado) 
    })
 
}

registrarController.email           = function(request,response){

    var post = {
        suEmail:request.body.suEmail,
        asunto:request.body.asunto,
        contenido:request.body.contenido
    }
    if (post.suEmail == undefined || post.suEmail == null || post.suEmail == ""){
        response.json({state:false, mensaje:'Email es obligatorio'})
        return false
    }
    if (post.asunto == undefined || post.asunto == null || post.asunto == ""){
        response.json({state:false, mensaje:'Asunto es obligatorio'})
        return false
    }
    if (post.contenido == undefined || post.contenido == null || post.contenido == ""){
        response.json({state:false, mensaje:'Contenido es obligatorio'})
        return false
    }

    var tranportador = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:'587',
        secure:false,
        requireTLS:true,
        auth:{
            user:'webfullstack31@gmail.com',
            pass:secret.emailPass
        }
    });

    let mailOptions = {
        from:post.suEmail,
        to:'webfullstack31@gmail.com',
        subject:post.asunto,
        html:'<div style="color:red">'+ post.contenido +'</div>'
    }

    tranportador.sendMail(mailOptions,(error,info) => {

        if(error){
            console.log(error.message)
            response.json({state:false,mensaje:error.message})
        }
        else{
            response.json({state:true,mensaje:"Correo enviado"})
        }

    })
}

registrarController.activar   = function(request,response) {
    
    var post = {
        email: request.params.email,
        codigo:request.params.codigo
    }
    
    if (post.email == undefined || post.email == null || post.email == ""){
        response.json({state:false, mensaje:'Email es obligatorio'})
        return false
    }
    
    if (post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state:false, mensaje:'Código es obligatorio'})
        return false
    }
    registrarM.actualizarEstado(post,function(resultado) {
       
        if(resultado.info != null){
            response.json({state:true,mensaje:'Usuario activado'})
        }else{
            response.json({state:false,mensaje:'Error en el código de activación'})
        }
    })
}


module.exports.registro = registrarController