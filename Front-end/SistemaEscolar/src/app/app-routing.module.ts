import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componentes/contact/contact.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { Page404Component } from './componentes/page404/page404.component';
import { Paquete1Component } from './componentes/paquete1/paquete1.component';
import { Paquete2Component } from './componentes/paquete2/paquete2.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';





const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent}, 
  {path:'menu',component:MenuComponent},  
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'registro',component:RegistroComponent},
  {path:'paquete1',component:Paquete1Component},
  {path:'paquete2',component:Paquete2Component},  
  {path:'pago',component:PagoComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'**',component:Page404Component,pathMatch:'full'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
