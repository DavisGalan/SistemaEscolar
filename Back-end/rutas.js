var registro = require('./api/controladores/registrarController.js').registro



app.post('/usuario/iniciarSesion', function(request,response) {
    registro.iniciarSesion(request,response)
})

app.post('/usuario/registro', function(request,response) {
    registro.registro(request,response)
})

app.post('/usuario/listar', function(request,response) {
    registro.listar(request,response)
})

app.post('/usuario/actualizado', function(request,response) {
    registro.actualizado(request,response)
})

app.post('/usuario/actualizar',function(request,response) {
    registro.actualizar(request,response)
})

app.post('/usuario/eliminarUsuario',function(request,response) {
    registro.eliminarUsuario(request,response)
})


app.post('/usuario/email',function(request,response) {
    registro.email(request,response)
})

app.post('/usuario/activar',function(request,response) {
    registro.activo(request,response)
})


app.get('/usuario/activar/:email/:codigo', function(request,response) {
    registro.activar(request,response)
})
