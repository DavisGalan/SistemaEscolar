import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { Page404Component } from './componentes/page404/page404.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { Paquete1Component } from './componentes/paquete1/paquete1.component';
import { Paquete2Component } from './componentes/paquete2/paquete2.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegistroComponent,
    PagoComponent,
    Page404Component,
    MensajesComponent,
    Paquete1Component,
    Paquete2Component,       
    AdministradorComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
