var configuracion = {
    puerto: 3000,
    db: "escuela",
    colletion: "Estudiantes" ,
    palabraClave: "holamundo", // se puede tambien incritar holamundo para mayor seguridad
    emailPass: "atcnfojuxoekjokb"    
}

configuracion.EnabledCors = true

configuracion.origins = [
                    'http://localhost:4200'
]
                 
module.exports.config = configuracion