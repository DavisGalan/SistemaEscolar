import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var swal:any
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  suEmail:string = ""
  asunto:string = ""
  contenido:string = ""
  respuestaContac:string = ""

  constructor(private contacto:PeticionService) { }

  ngOnInit(): void {
  }



  contactar(){

    var post = {
      host:this.contacto.urlLocal,
      path:'/usuario/email',
      payload:{
        suEmail:this.suEmail,
        asunto:this.asunto,
        contenido:this.contenido
      }
    }
    this.contacto.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      this.respuestaContac = res
      if(res.state == true){
        swal("Good job!", "You clicked the button!", "success");
      }else{
        swal("Ocurrio un error!", "You clicked the button!", "error");
      }

    })
  }


}
