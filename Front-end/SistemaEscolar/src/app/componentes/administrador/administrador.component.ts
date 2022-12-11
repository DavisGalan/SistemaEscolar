import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private peticion:PeticionService, private msg:MensajeriaService) { }

  ngOnInit(): void {
  }

  datos:any[] = [];
  // id:string = ""  
  nombres:string = ""
  apellidos:string = ""
  grado:string = ""
  grupo:string = ""
  email:string = ""
  estado:string = ""
  ubicacion_geografica:string = ""
  idselecionado : string = ""

  configNombres = ""
  configApellidos = ""
  configGrado = ""
  configGrupo = ""
  configEmail = ""
  configEstado = ""
  configUbicacion_geografica = ""

 listar(){   
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/listar',
      payload:{
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      this.datos = res.usuario      
    })
    
  }

  registro(){    
    
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/registro',
      payload:{
        
        nombres:this.nombres,
        apellidos:this.apellidos,
        grado:this.grado,
        grupo:this.grupo,
        email:this.email,
        estado:this.estado,
        ubicacion_geografica:this.ubicacion_geografica        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        this.listar()
        this.nuevo()
        this.msg.agregarMsg('primary',res.Mensaje,5000)
      }else{
        this.msg.agregarMsg('danger',res.mensaje,5000)
      }
      
    })
    
  }
  
  eliminar(myid:string){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/eliminarUsuario',
      payload:{
       id: myid
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        this.msg.agregarMsg('success', res.mensaje, 5000)
        this.listar()
      }
      else{
        this.msg.agregarMsg('danger', res.mensaje, 5000)
        this.listar()
      }     
      
    })
    
  }

  editar(id:string){

    $('#editarDatos').modal('show')

    this.idselecionado = id
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/actualizado',
      payload:{
       id:id
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){       
       this.configNombres = res.data[0].nombres
       this.configApellidos = res.data[0].apellidos
       this.configGrado = res.data[0].grado
       this.configGrupo= res.data[0].grupo
       this.configEmail = res.data[0].email
       this.configEstado = res.data[0].estado
       this.configUbicacion_geografica = res.data[0].ubicacion_geografica 
      }      
    })
  }

  nuevo(){  
    this.nombres = ""
    this.apellidos = ""
    this.grado = ""
    this.grupo = ""
    this.email = ""
    this.estado = ""
    this.ubicacion_geografica = ""
    // this.password = ""
    // this.cpassword = ""
    // this.idselecionado = ""    
    this.configNombres = ""
    this.configApellidos = ""
    this.configGrado = ""
    this.configGrupo = ""
    this.configEmail = ""
    this.configEstado =
    this.configUbicacion_geografica =""    
  }


  editarDatos(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/actualizar',
      payload:{
        id: this.idselecionado,       
        nombres: this.configNombres,
        apellidos: this.configApellidos,
        grado: this.configGrado,
        grupo: this.configGrupo,
        email: this.configEmail,
        estado: this.configEstado,
        ubicacion_geografica: this.configUbicacion_geografica,
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        
        this.msg.agregarMsg('success', res.mensaje, 5000)
        this.listar()
        this.nuevo()
        $('#editarDatos').modal('hide')
        
      }
      else{
        this.msg.agregarMsg('danger', res.mensaje, 5000)
      }
      
      
      
    })
  }

}
