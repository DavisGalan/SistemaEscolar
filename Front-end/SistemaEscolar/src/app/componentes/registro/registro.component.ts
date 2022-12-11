import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombres:string = ""
  apellidos:string = ""
  grado:string = ""
  grupo:string = ""  
  email:string = ""
  estado:string = ""
  ubicacion_geografica:string = ""

  failNombres:string = ""
  failApellidos:string = ""
  failGrado:string = ""  
  failGrupo:string = "" 
  failEmail:string = ""  
  failEstado:string = ""  
  failUbicacion_geografica:string = ""

  constructor(private peticion:PeticionService, private mensaje:MensajeriaService, private router:Router) { }

  ngOnInit(): void {
  }

  validar(){
    this.failNombres = ""
    if(this.nombres == "" || this.nombres == null || this.nombres == undefined){
      this.failNombres = "*"
    }
    this.failApellidos = ""
    if(this.apellidos == "" || this.apellidos == null || this.apellidos == undefined){
      this.failApellidos = "*"
    }
    this.failGrado = ""
    if(this.grado == "" || this.grado == null || this.grado == undefined){
      this.failGrado = "*"
    }
    this.failGrupo = ""
    if(this.grupo == "" || this.grupo == null || this.grupo == undefined){
      this.grupo = "*"
    }
    this.failEmail = ""
    if(this.email == "" || this.email == null || this.email == undefined){
      this.failEmail = "*"
    }
    this.failEstado = ""
    if(this.estado == "" || this.estado == null || this.estado == undefined){
      this.failEstado = "*"
    }   
    this.failUbicacion_geografica = ""
    if(this.ubicacion_geografica == "" || this.ubicacion_geografica == null || this.ubicacion_geografica == undefined){
      this.ubicacion_geografica = "*"
    }
  }

  registrar(){
    
    this.validar()
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
        this.mensaje.agregarMsg('primary',res.Mensaje,5000)
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000);
      }else{
        this.mensaje.agregarMsg('danger',res.mensaje,5000)
      }
      
    })
    
  }
  

}
