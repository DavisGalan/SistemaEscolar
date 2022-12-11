
function peticion (tipo,url,payload,callback) {
    var xhr = new XMLHttpRequest                                           
    xhr.open(tipo, url)
    if (tipo == "Get") {
        xhr.send()
    }
    else if (tipo == "Post"){
        xhr.setRequestHeader("content-type", "application/json")      
        xhr.send(JSON.stringify(payload)) 
    }

    xhr.addEventListener("readystatechange",function() {                                        
        if(this.readyState === 4){                                                                                                                
            return callback(JSON.parse(this.responseText))     
        }
    })
}

function registro() {
    var nombres = document.getElementById('nombres').value
    var apellidos = document.getElementById('apellidos').value
    var grado = document.getElementById('grado').value
    var grupo = document.getElementById('grupo').value
    var email = document.getElementById('email').value 
    var estado = document.getElementById('estado').value
    var ubicacion_geografica = document.getElementById('ubicacion_geografica').value

    var post = {
        tipo: "Post",
        url: "http://localhost:3000/usuario/registro",
        payload: {
            nombres: nombres,
            email: email,
            // password: password,
            // cpassword: cpassword
        }
    }
    peticion(post.tipo,post.url,post.payload,function(respuesta) {
        //alert(JSON.parse(respuesta).mensaje)
        console.log(respuesta)
    })
}

function iniciarSesion() {

    var correo = document.getElementById('email').value 
    var password = document.getElementById('password').value


    var post = {
        tipo: "Post",
        url: "http://localhost:3000/usuario/iniciarSesion",
        payload: {
           
            email: correo,
            password: password,
        
        }
    }
    peticion(post.tipo,post.url,post.payload,function(respuesta) {
        //alert(JSON.parse(respuesta).mensaje)
        console.log(respuesta)
    })
}
