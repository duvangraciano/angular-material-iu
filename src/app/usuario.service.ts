import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  
  private usuarioEsLogeado;
  private username;

  constructor() { 
    this.usuarioEsLogeado = false;
  }
  
  setUsuarioLogeado() {
    this.usuarioEsLogeado = true;
  }
  
  getUsuarioLogeado(){
    return this.usuarioEsLogeado;
  }

}
