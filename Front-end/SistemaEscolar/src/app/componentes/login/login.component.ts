import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private peticion:PeticionService, private router:Router) { }
  email:string = ""
  password:string = ""
  datos:any[] = []
  respuestaLogin:any
 
  ngOnInit(): void {
  }

  iniciar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/iniciarSesion',
      payload:{
        email:this.email,
        password:this.password
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      this.respuestaLogin = res
      if(res.state == true){
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 2000);
        
      }else{
        swal("Ocurrio un error!", "You clicked the button!", "error");
      }

    })
  }

}
