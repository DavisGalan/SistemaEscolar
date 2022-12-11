import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }


  public mensajeAlert:any[] = [
    // {tipo:'primary',mensaje:'#'},
    // {tipo:'primary',mensaje:'#'},
    // {tipo:'primary',mensaje:'#'},
    // {tipo:'danger',mensaje:'#d'},
    // {tipo:'primary',mensaje:'#'} 

  ]

  agregarMsg(tipo:string,mensaje:string,tiempo:number){
    this.mensajeAlert.push({tipo:tipo,mensaje:mensaje})
    this.eliminarMsg(tiempo)
  }

  eliminarMsg(tiempo:number){
    setTimeout(() => {
      this.mensajeAlert.splice(0,1)
    }, tiempo);
  }

}
